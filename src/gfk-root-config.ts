import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@gfk/single-spa-navbar",
  app: () =>
    System.import(
      "//localhost:8081/dist/gfk-single-spa-navbar.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@gfk/crosstab",
  app: () => System.import("//localhost:8080/dist/gfk-crosstab.js"),
  activeWhen: ["/crosstab"]
});

start({
  urlRerouteOnly: true,
});
