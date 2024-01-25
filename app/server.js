const { AllRoutes } = require("./router/router");

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

        this.#app.use(this.#express.json());
        this.#app.use(this.#express.urlencoded({extended : true}));
        this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));

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
        
        
        
    }

    createRoutes(){
        this.#app.use(AllRoutes);
    }

    errorHandler(){

    }
}