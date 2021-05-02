const db = require("./models/db");
const Pangolin = db.pangolin ;

exports.create = (req, res) => {
    if (!req.body.family) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const pangolin = new Pangolin({
        family: req.body.family,
        race: req.body.race,
        age: req.body.age,
        food: req.body.food,
        friend:  false
    });
    console.log('test');
    pangolin
        .save(pangolin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creation."
            });
        });
};

exports.findAll = (req, res) => {
    const family = req.query.family;
    let condition = family ? { family: { $regex: new RegExp(family), $options: "i" } } : {};

    Pangolin.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving other pangolins."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Pangolin.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Pangolins with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Pangolins with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Pangolin.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Profile with id=${id}.`
                });
            } else res.send({ message: "Profile was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Profile with id=" + id
            });
        });
};

exports.findAllPublished = (req, res) => {
    Pangolin.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving pangolins."
            });
        });
};
