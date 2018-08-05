import { Router } from "express";
import asyncErrorHandler from "express-async-handler";
import { countryLookup } from "../geo";

const router = Router();

router.get("/:ip", asyncErrorHandler(async function (req, res) {
    const ip = req.params.ip;
    const info = await countryLookup(ip);
    res.status(info ? 200 : 404).send(info);
}));

export default router;