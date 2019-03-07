"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const TourDetail_1 = require("../../model/shared/TourDetail");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = data_1.DataStore.tours.find((element) => element.id == tourID);
    if (selectedTour) {
        const selectedReviews = data_1.DataStore.reviews.filter((item) => item.tourID == tourID);
        res.json(new TourDetail_1.TourDetail(selectedTour, selectedReviews));
    }
    else {
        res.json({ "status": "failed", "message": "Element not found" });
    }
};
