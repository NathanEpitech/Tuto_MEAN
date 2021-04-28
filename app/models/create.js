exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const pangolin = new Pangolin({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    pangolin
        .save(pangolin)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
