const express = require("express");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");

let app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (require.main === module) {
  app.use(express.static("public"));

  app.all(
    "*",
    createRequestHandler({
      // Uncomment the following line if you don't want sessions. This will
      // disable the warning message when no session middleware is present.
      enableSessions: false,
      getLoadContext() {
        // Whatever you return here will be passed as `context` to your loaders
        // and actions.
      },
    })
  );

  let port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`);
  });

} else {
  app.all(
    "*",
    createRequestHandler({
      // Uncomment the following line if you don't want sessions. This will
      // disable the warning message when no session middleware is present.
      enableSessions: false,
      getLoadContext() {
        // Whatever you return here will be passed as `context` to your loaders
        // and actions.
      },
    })
  );
}


module.exports = app;