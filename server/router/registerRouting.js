const express = require('express');
const Register = require('../model/registerModel');
const registerRouter = express.Router();

// =============================
// REGISTER
// =============================
registerRouter.post('/register', async (req, res) => {
    try {
        const RegisterData = new Register(req.body);
        const result = await RegisterData.save();

        if (result) {
            res.send({ status: 'success', message: 'Successfully Registered' });
        } else {
            res.send({ status: 'failed', message: 'Registration Failed' });
        }
    } catch (error) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// =============================
// LOGIN
// =============================
registerRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const exists = await Register.findOne({ email: email });

        if (!exists) {
            return res.send({
                status: 'failed',
                message: 'User not registered',
            });
        } else if (exists.password !== password) {
            return res.send({
                status: 'failed',
                message: 'Invalid login credentials',
            });
        } else {
            return res.send({
                status: 'success',
                message: exists,
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// =============================
// FORGOT PASSWORD
// =============================
registerRouter.post('/forgot-password', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Register.findOne({ email });

        if (!user) {
            return res.send({
                status: 'failed',
                message: 'Email not found',
            });
        }

        await Register.updateOne({ email }, { $set: { password } });

        return res.send({
            status: 'success',
            message: 'Password changed successfully',
        });
    } catch (err) {
        res.send({
            status: 'failed',
            message: 'An error occurred while updating password',
        });
    }
});

module.exports = registerRouter;
