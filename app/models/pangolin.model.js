module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            family: String,
            race: String,
            food: String,
            age: Number,
            friend: Boolean
        },
        {timestamps: true}
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Pangolin = mongoose.model("pangolin", schema);
    return Pangolin;
};
