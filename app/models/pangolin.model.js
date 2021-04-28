module.exports = mongoose => {
    const Pangolin = mongoose.model(
        "pangolin",
        mongoose.Schema(
            {
                famille: String,
                race: String,
                nourriture: String,
                age: Number,
            },
            { timestamps: true }
        )
    );

    return Pangolin;
};