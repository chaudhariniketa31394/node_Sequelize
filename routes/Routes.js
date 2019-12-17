const express = require("express");
const authJwt = require("../Verified/verifyToken")
const router = express.Router();



const usercontroller = require('../controllers/user');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello Welcome");
});


router.post('/registration',usercontroller.create);
router.post('/login',usercontroller.login);
router.get('/loggedInUser',  [authJwt.verifyToken], usercontroller.loggedInUser);
router.get('/findAll' , usercontroller.findAll);


module.exports = router;
// import HeroController = require("../../controllers/HeroController");
// import CourseController = require("../../controllers/CourseController");
// import UserController = require("../../controllers/UserController");

// var router = express.Router();
// class Routes {
//   private _heroController: HeroController;
//   private _courseController: CourseController;
//   private _userController: UserController;
  

//   constructor() {
//     this._heroController = new HeroController();
//     this._courseController = new CourseController();
//     this._userController = new UserController();
//   }
//   get routes() {

//     //hero API
//     const herocontroller = this._heroController;
//     router.get("/heroes", herocontroller.retrieve);
//     router.post("/heroes", herocontroller.create);
//     router.put("/heroes/:_id", herocontroller.update);
//     router.get("/heroes/:_id", herocontroller.findById);
//     router.delete("/heroes/:_id", herocontroller.delete);




//     //student
//     const courseController = this._courseController;
//     router.get("/students", courseController.retrieve);
//     router.post("/students", courseController.create);
//     router.put("/heroes/:_id", courseController.update);
//     router.get("/course/:_id", courseController.findById);
//     router.delete("/heroes/:_id", courseController.delete);




//     user
//     const userController = this._userController;
//     router.get("/user", courseController.getAll);

//     router.get("/Posts", courseController.getPosts);
//     router.post("/students", courseController.create);
//     router.put("/heroes/:_id", courseController.update);
//     router.get("/course/:_id", courseController.findById);
//     router.delete("/heroes/:_id", courseController.delete);


//     return router;
//   }
// }

// Object.seal(Routes);

