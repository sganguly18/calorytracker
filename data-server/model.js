const mongoose = require("mongoose");
const { ObjectUnsubscribedError } = require("rxjs");

const ExerciseModel = mongoose.model("exercise",
    mongoose.Schema({
        desc: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        category_id: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        repetition: {
                type: Number,
                required: true    
        }
        
    })
);

const CategoryModel = mongoose.model("category",
    mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        threshold: {
            type: Number,
            required: true
        }
    })
);


module.exports = {ExerciseModel, CategoryModel};
