const Models = require('../models');



const jwt = require('jsonwebtoken');

const login = function(userReq, result) {

    Models.User.findOne({ where: { email: userReq.email } })
        .then(function(user) {

            if (!user) {               
                const response = {
                    success: false,
                    message: "user not found with email"
                }
                result(null, response);
            } else if (user.dataValues.password != userReq.password) {
               
                const response = {
                    success: false,
                    message: "password is incorrect"
                }
                result(null, response);
            } else {
                console.log("user=>", user.dataValues);
                const token = jwt.sign({
                    id: user.dataValues.id
                },'secretkey', process.env.JWT_KEY, {
                    expiresIn: "1h"
                });


                let updateValues = { token: token };
                Models.User.update( updateValues,
                   { where: { email: userReq.email } },
                   
                  ).then(event => {
                    if (event) {
                        result(null, event);
                    }
                }).catch(err => {
                    result(err, null);
                })
                console.log("========================",token)
            }
        });
}






const loggedInUser = function(req, result) {
console.log("=============id===========",req.userId)
    Models.User.findOne({ where: { id: req.userId } })
        .then(function(user) {

            
                if (user) {
                    const loginResponse = {
                        success: true,
                        user: user.dataValues,
                       
                    }
                    return result(null,loginResponse)
                }else {
                    return result("Invalid token",null)
                }
            
        })
}






const getAll = function(req, result) {
   
    Models.User.findAll({
        include: [
          {
            model:  Models.Post,
            include: [
              {
                model:  Models.Comment
              }
            ]
          }
        ]
      }).then(function(user) {
                    if (user) {
                        const loginResponse = {
                            success: true,
                            user:user
                            
                        }
                        return result(null,loginResponse)
                    }else {
                        return result("Invalid token",null)
                    }
                
            })
    }
module.exports = {
    login,
    loggedInUser,
    getAll
}