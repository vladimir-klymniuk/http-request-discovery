import { Router } from "express"
import asyncErrorHandler from "express-async-handler"
import exploreDevice from "../service/device"
const router = Router();

router.get("/", asyncErrorHandler(async function (req, res) {
    const userAgent = req.query.userAgent;
    const device = exploreDevice(userAgent);

    if (null == device) {
        res.status(404).send({});
    } else {
        res.status(200).send(device);
    }
}));

export default router