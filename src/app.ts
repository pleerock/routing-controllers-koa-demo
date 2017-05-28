import "reflect-metadata";

import { createKoaServer, useContainer } from "routing-controllers";
import { Container } from "typedi";

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We have to import all controllers, before creating the server.
 * Alternatively we can specify a "controllers" option in
 * createKoaServer/useKoaServer to load controllers from an array of paths.
 */
import "./controllers/CategoryController";
import "./controllers/PostController";

/**
 * We create a new koa server instance.
 * We could have also use useKoaServer here to attach controllers to an
 * existing koa instance.
 */
const koaApp = createKoaServer({
    /**
     * We can add options about how routing-controllers should
     * configure itself.
     */
});

/**
 * Start the koa app.
 */
koaApp.listen(3000);

console.log("Server is up and running at port 3000");