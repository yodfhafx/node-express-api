"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const bodyparser = __importStar(require("body-parser"));
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({ extended: true });
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
const apiCreateTour_1 = require("./api/tours/apiCreateTour");
const apiDeleteTour_1 = require("./api/tours/apiDeleteTour");
const apiUpdateTour_1 = require("./api/tours/apiUpdateTour");
// console.log(JSON.parse(JSON.stringify(DataStore.tours)));
const morgan_1 = __importDefault(require("morgan"));
const logger = morgan_1.default('dev');
app.use(logger);
const authenticator = (req, res, next) => {
    const username = "Marvel";
    req.user = username;
    next();
};
app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});
app.get('/tours', apiGetTours_1.apiGetTours);
app.get('/tours/:id', apiGetTourDetail_1.apiGetTourDetail);
app.post('/tours', jsonParser, apiCreateTour_1.apiCreateTour);
app.delete('/tours/:id', apiDeleteTour_1.apiDeleteTour);
app.patch('/tours/:id', jsonParser, apiUpdateTour_1.apiUpdateTour);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server run at port: ${port}`);
});
