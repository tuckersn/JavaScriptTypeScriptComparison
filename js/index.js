const express = require("express");
const { config } = require("./config");
const { unsafeApiKeyMiddleWare } = require("./middleware/unsafeApiKeyMiddleware");
const { pingRoute } = require("./routes/ping");
const { fruitRoute  } = require("./routes/fruit");
const { makeSmoothieRoute } = require("./routes/smoothie");
const Logger = require("./common/Logger");
const loggingMiddleware = require("./middleware/loggingMiddleware");


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