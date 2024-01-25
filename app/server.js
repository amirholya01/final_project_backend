const { AllRoutes } = require("./router/router");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerJs = require("swagger-jsdoc");


module.exports = class Application{

    #express = require("express");
    #app = this.#express();

    constructor(PORT, DB_HOST){
        this.configApplication();
        this.connectToMongoDB(DB_HOST);
        this.createServer(PORT);
        this.createRoutes();
        this.errorHandler();
    }

    configApplication(){
        const path = require("path");

        this.#app.use(morgan("dev"));
        this.#app.use(this.#express.json());
        this.#app.use(this.#express.urlencoded({extended : true}));
        this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
        this.#app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJs({
            swaggerDefinition: {
                info: {
                    title: "Backend of final project",
                    version: "1.0.0",
                    description: ".........",
                    contact: {
                        name: "Amir Hossein Olyanasabnarab",
                        email: "amirholyanasab@gmail.com"
                    }
                },
                servers:[
                    {
                        url: "http://localhost:5000"
                    }
                ]
            },
            apis: ["app/router/*/*.js"]
        })))

    }

    createServer(PORT){
        const http = require("http");
        http.createServer(this.#app)
            .listen(PORT, () => {
                console.log(`Server is running on http://localhost:${PORT}`)
            });
    }

    connectToMongoDB(DB_HOST){
        const mongoose = require("mongoose");

        mongoose.connect(DB_HOST)
            .then(() => console.log("Connecting to MongoDB was successfully"))
            .catch(err => console.log(`Connecting to MongoDB was failed ---- ${err}`));
        //installing the morgan package and using it on the server file when breaking the connection to DB, it's a secure way 
        process.on("SIGINT", async() => {
            await mongoose.connection.close();
            process.exit(0);
        })
        
    }

    createRoutes(){
        this.#app.use(AllRoutes);
    }

    errorHandler(){
        const createError = require("http-errors");

        this.#app.use((req, res, next) => {
            next(createError.NotFound("Address was not found"))
        });

        this.#app.use((err, req, res, next) => {
            const serverError = createError.InternalServerError;
            const statusCode = err.status || serverError.statusCode;
            const message = err.message || serverError.message;
            return res.status(statusCode).json({
                errors: {
                    statusCode,
                    message
                }
            })
        })
    }
}