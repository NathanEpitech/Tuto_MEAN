exports.findOne = (req, res) => {
    const id = req.params.id;

    pangolin.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Pangolin with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Pangolin with id=" + id });
        });
};
