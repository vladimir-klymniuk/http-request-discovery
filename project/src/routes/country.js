import { Router } from "express"
import asyncErrorHandler from "express-async-handler"
import countryExplore from "../service/country"
import CountryDTO from '../dto/location/country'
const router = Router();

router.get("/:ip", asyncErrorHandler(async function (req, res) {
    const ip = req.params.ip;
    const country = await countryExplore(ip);

    if (null != country) {
        res.status(200).send(new CountryDTO(country).response);
    } else {
        return res.status(404).send({});
    }
}));

export default router