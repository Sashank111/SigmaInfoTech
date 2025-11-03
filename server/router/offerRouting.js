const express = require('express');
const Offer = require('../model/offerModel.js');
const offerRouter = express.Router();

// Add Offer
offerRouter.post('/offer', async (req, res) => {
    try {
        const { title } = req.body;
        const existing = await Offer.findOne({ title: title });

        if (existing) {
            return res.send({
                status: 'failed',
                message: 'Offer already exists',
            });
        }

        const offerData = new Offer(req.body);
        const result = await offerData.save();

        if (result._id) {
            return res.send({
                status: 'success',
                message: result,
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'Offer not saved',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Get All Offers
offerRouter.get('/offer', async (req, res) => {
    try {
        const offers = await Offer.find();
        if (offers && offers.length > 0) {
            return res.send({
                status: 'success',
                message: offers,
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'No offers found',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Delete Offer
offerRouter.delete('/offer/:id', async (req, res) => {
    try {
        const result = await Offer.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
            return res.send({
                status: 'success',
                message: 'Offer deleted successfully',
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'Offer not found',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Get Single Offer
offerRouter.get('/offer/:oid', async (req, res) => {
    try {
        const offer = await Offer.findOne({ _id: req.params.oid });
        return res.send({
            status: 'success',
            message: offer,
        });
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Update Offer
offerRouter.put('/offer/:oid', async (req, res) => {
    try {
        const result = await Offer.updateOne(
            { _id: req.params.oid },
            { $set: req.body }
        );

        if (result.modifiedCount > 0) {
            return res.send({
                status: 'success',
                message: 'Offer updated successfully',
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'Offer not found or data unchanged',
            });
        }
    } catch (err) {
        res.send({ status: 'failed', message: 'An error occurred' });
    }
});

module.exports = offerRouter;
