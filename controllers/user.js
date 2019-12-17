const userservice = require('../service/userservice');
const loginService = require('../service/loginservice');
const jwt = require('jsonwebtoken');

exports.create = function (req, res) {

    userservice.userRegistation(req, function (err, event) {
        if (event) {
            return res.status(200).json({
                success: true,
                message: "user created successfully"
            })
        }

        if (err) {
            console.log("err : ", err)
            return res.status(500).json({
                success: false,
                err: err
            })
        }
    })
}




exports.login = function (req, res) {
    console.log(req.body);

    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            success: false,
            message: 'Please provide email/password'
        });
    }

    loginService.login(req.body, function (err, result) {

        if (result.success) {
            console.log("login successful => ", result);

        }
        if (err) {
            console.log("err : ", err)
            return res.status(500).json({
                success: false,
                err: err
            })
        }

        if (!result.success) {
            return res.status(404).send(result);
        }
    });
}






exports.loggedInUser = function (req, res) {

    loginService.loggedInUser(req, function (err, user) {
        if (event) {
            return res.status(200).json({
                success: true,
                user
            })
        }

        if (err) {
            console.log("err : ", err)
            return res.status(500).json({
                success: false,
                err: err
            })
        }
    })
}



exports.findAll = function (req, res) {

    loginService.getAll(req, function (err, user) {
        if (user) {
            return res.status(200).json({
                success: true,
                user
            })
        }

        if (err) {
            console.log("err : ", err)
            return res.status(500).json({
                success: false,
                err: err
            })
        }
    })
}