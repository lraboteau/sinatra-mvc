requirejs.config( {
    baseUrl:"/assets/js/lib", paths: {
      app: "../app"
    }
    , shim: {
      bootstrap: ["jquery"],
      bundle: ["jquery"]
    }
  }
);
requirejs(["app/main"]);