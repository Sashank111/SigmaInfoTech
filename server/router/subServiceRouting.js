const express = require('express');
const SubService = require('../model/subServiceModel.js');
const subServiceRouter = express.Router();

// Create SubService
subServiceRouter.post('/subservice', async (req, res) => {
    try {
        const subServiceData = new SubService(req.body);
        const result = await subServiceData.save();
        if (!result._id) {
            return res.send({
                status: 'failed',
                message: 'SubService not saved',
            });
        } else {
            return res.send({
                status: 'success',
                message: result,
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Get all SubServices
subServiceRouter.get('/subservice', async (req, res) => {
    try {
        const subServices = await SubService.find();
        if (subServices && subServices.length > 0) {
            return res.send({
                status: 'success',
                message: subServices,
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'No subservices found',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Delete SubService
subServiceRouter.delete('/subservice/:id', async (req, res) => {
    try {
        const result = await SubService.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
            return res.send({
                status: 'success',
                message: 'SubService deleted successfully',
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'SubService not found',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Get one SubService
subServiceRouter.get('/subservice/:sid', async (req, res) => {
    try {
        const subService = await SubService.findOne({ _id: req.params.sid });
        return res.send({
            status: 'success',
            message: subService,
        });
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

//Get one service by name
subServiceRouter.get('/subservicename/:sname', async (req, res) => {
    try {
        const subService = await SubService.find({ sname: req.params.sname });
        return res.send({
            status: 'success',
            message: subService,
        });
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Update SubService
subServiceRouter.put('/subservice/:sid', async (req, res) => {
    try {
        const result = await SubService.updateOne(
            { _id: req.params.sid },
            { $set: req.body }
        );
        if (result.modifiedCount > 0) {
            return res.send({
                status: 'success',
                message: 'SubService updated successfully',
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'SubService not found or data is the same',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

module.exports = subServiceRouter;
