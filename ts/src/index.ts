import { default as express } from "express";
import Logger from "./common/Logger";
import { config } from "./config";
import { loggingMiddleware, unsafeApiKeyMiddleWare } from "./middleware";
import { fruitRoute, makeSmoothieRoute, pingRoute } from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(loggingMiddleware);
app.use(unsafeApiKeyMiddleWare);

// Routes
app.get('/ping', pingRoute());
app.get('/fruit/:id', fruitRoute('id'));
app.post('/makeSmoothie', makeSmoothieRoute());

app.listen(config.port, () => {
    Logger.info("Listening at: " + config.host + ":" + config.port);
})