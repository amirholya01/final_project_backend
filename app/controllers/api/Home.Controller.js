const Controller = require("../Controller");
class HomeController extends Controller{
    async indexPage(req, res, next){
        try {
         return await res.status(200).json({
            statusCode: 200,
            message: "Welcome to Home page"
         })   
        } catch (error) {
            next();
        }
    }
}

module.exports = {
    HomeController : new HomeController()
}