import express from "express";
import config from "../config/config";
import { logError, logInfo } from "./logger";
import location from "./routes/country";
import cors from "cors";

let app = express();

app.use(cors({maxAge: 3600}));
app.use('/country', location);
app.listen(config.httpPort, function onReady () {
    logInfo(`Web server is listening on port ${ config.httpPort }`);
});

process.on("unhandledRejection", async (reason, p) => {
    logError(`Unhandled rejection occurred, reason: ${ reason }`, p);
    process.exit(1);
});

export default app;
