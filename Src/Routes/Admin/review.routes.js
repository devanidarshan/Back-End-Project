const express = require('express');
const ReviewRoutes = express.Router();
const { adminVerifyToken }  = require('../../Helpers/userVerifyToken');

const {  getAllReview ,  deleteReview } = require('../../Controller/Admin/review.controller');


// GET ALL REVIEW
ReviewRoutes.get('/get-all-review' , adminVerifyToken,  getAllReview);

// DELETE REVIEW
ReviewRoutes.delete('/delete-review' , adminVerifyToken , deleteReview);


module.exports = ReviewRoutes;