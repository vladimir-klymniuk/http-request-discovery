import { Router } from "express"
import asyncErrorHandler from "express-async-handler"
import exploreTier from "../service/tier"
import TierDTO from '../dto/location/tier'
const router = Router();

router.get("/:countryCode", asyncErrorHandler(async function (req, res) {
    const countryCode = req.params.countryCode;
    const tier = exploreTier(countryCode);

    res.status(200).send(new TierDTO(tier).response);
}));

export default router
