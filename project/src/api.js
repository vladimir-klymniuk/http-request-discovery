import express from "express";
import config from "../config/config";
import { logError, logInfo } from "./logger";
import cors from "cors";
import location from "./routes/country";
import device from "./routes/device";
import tier from "./routes/tier";

let app = express();

app.use(cors({maxAge: 3600}));
app.use('/country', location);
app.use('/device', device);
app.use('/tier', tier);

app.listen(config.httpPort, function onReady () {
    logInfo(`Web server is listening on port ${ config.httpPort }`);
});

process.on("unhandledRejection", async (reason, p) => {
    logError(`Unhandled rejection occurred, reason: ${ reason }`, p);
    process.exit(1);
});

export default app;
