const express = require('express');
const Service = require('../model/serviveModel.js');
const serviceRouter = express.Router();

serviceRouter.post('/service', async (req, res) => {
    try {
        const { sname } = req.body;
        const beforecheck = await Service.findOne({ sname: sname });
        if (beforecheck) {
            return res.send({
                status: 'failed',
                message: 'Service already exists',
            });
        } else {
            const serviceData = new Service(req.body);
            const result = await serviceData.save();
            if (result._id) {
                return res.send({
                    status: 'success',
                    message: result,
                });
            } else {
                return res.send({
                    status: 'failed',
                    message: 'Service not saved',
                });
            }
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

serviceRouter.get('/service', async (req, res) => {
    try {
        const services = await Service.find();
        if (services && services.length > 0) {
            return res.send({
                status: 'success',
                message: services,
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'No services found',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

serviceRouter.delete('/service/:id', async (req, res) => {
    try {
        const result = await Service.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
            return res.send({
                status: 'success',
                message: 'Service deleted successfully',
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'Service not found',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

serviceRouter.get('/service/:sid', async (req, res) => {
    try {
        const services = await Service.findOne({ _id: req.params.sid });
        return res.send({
            status: 'success',
            message: services,
        });
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

serviceRouter.put('/service/:sid', async (req, res) => {
    try {
        const result = await Service.updateOne(
            { _id: req.params.sid },
            { $set: req.body }
        );
        if (result.modifiedCount > 0) {
            return res.send({
                status: 'success',
                message: 'Service updated successfully',
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'Service not found or data is the same',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

module.exports = serviceRouter;
