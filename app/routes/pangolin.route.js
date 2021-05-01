module.exports = app => {
    const pangolin = require("../pangolin.controller");
    let Router = require("express").Router();

    Router.post("/", pangolin.create);

    Router.get("/", pangolin.findAll);

    Router.get("/users", pangolin.findAllPublished);

    Router.get("/:id", pangolin.findOne);

    app.use('/api/pangolins', Router);
};
