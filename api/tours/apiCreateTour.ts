import { RequestHandler } from 'express';
import uuid from 'uuid/v4';
import { DataStore } from '../../data/data';
import { APIError, PublicInfo } from '../../model/shared/messages';

export const apiCreateTour: RequestHandler = (req, res, next) => {
  const requireFields = ['tourTitle', 'location'];
  const givenFields = Object.getOwnPropertyNames(req.body)
  if(!requireFields.every(field => givenFields.includes(field))) {
    return next(new APIError('Data missing', 'Not all required fields supplied.', 400));
  };
  const newTour = {
    id: uuid(),
    location: req.body.location || "",
    tourTitle: req.body.tourTitle || "",
    tourCategory: req.body.tourCategory || "",
    tourDescription: req.body.tourDescription || "",
    price: req.body.price || 0,
    currency: req.body.currency || "",
    img: []
  }

  DataStore.tours.push(newTour);
  res.json(new PublicInfo('Tour added', 200, {tour: newTour}));
}