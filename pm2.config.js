module.exports = {
  apps: [
    {
      name: "Firebase",
      script: "firebase emulators:start",
      watch: ["remix.config.js", "app"],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "Remix",
      script: "remix run",
      ignore_watch: ["."],
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
