const Models = require('../models');

const userRegistation = function (req, result) {

    
console.log("req============================body",req.body);


    Models.User.findOne({ where: { email: req.body.email } })
        .then(function (user) {
           
            if (!user) {
                Models.User.create(req.body)
                    .then(event => {
                        if (event) {
                            result(null, event);
                        }
                    }).catch(err => {
                        result(err, null);
                    })
            }else {
                return result("email already exist",null)
            }
        }
        )}
                

module.exports = {
    userRegistation
}