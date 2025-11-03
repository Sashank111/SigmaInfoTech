const express = require('express');
const BookService = require('../model/bookServiceModel');
const bookServiceRouter = express.Router();

// Create Booking
bookServiceRouter.post('/bookservice', async (req, res) => {
    try {
        const bookServiceData = new BookService(req.body);
        const result = await bookServiceData.save();
        if (!result._id) {
            return res.send({
                status: 'failed',
                message: 'Booking not saved',
            });
        }
        return res.send({
            status: 'success',
            message: result,
        });
    } catch (error) {
        return res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Get all Bookings
bookServiceRouter.get('/bookservice', async (req, res) => {
    try {
        const bookings = await BookService.find();
        if (bookings && bookings.length > 0) {
            return res.send({
                status: 'success',
                message: bookings,
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'No bookings found',
            });
        }
    } catch (error) {
        return res.send({ status: 'failed', message: 'An error occurred' });
    }
});

// Delete Booking
bookServiceRouter.delete('/bookservice/:id', async (req, res) => {
    try {
        const result = await BookService.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
            return res.send({
                status: 'success',
                message: 'Booking deleted successfully',
            });
        } else {
            return res.send({
                status: 'failed',
                message: 'Booking not found',
            });
        }
    } catch (error) {
        return res.send({ status: 'failed', message: 'An error occurred' });
    }
});

module.exports = bookServiceRouter;
