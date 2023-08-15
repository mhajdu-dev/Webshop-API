const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Please provide product name'],
            maxlength: [100, 'Name can not be more than 100 characters'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide product price'],
            default: 0,
        },
        description: {
            type: String,
            required: [true, 'Please provide product description'],
            maxlength: [1000, 'Description can not be more than 1000 characters'],
        },
        image: {
            type: String,
            default: '/pictures/random.jpeg',
        },
        category: {
            type: String,
            required: [true, 'Please provide product category'],
            enum: ['VGA', 'mobilePhone', 'earbud'],
        },
        company: {
            type: String,
            required: [true, 'Please provide product company'],
            enum: {
                values: ['Apple', 'Samsung', 'Intel'],
                message: '{VALUE} is not supported',
            },
        },
        colors: {
            type: [String],
            required: true,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        freeShipping: {
            type: Boolean,
            default: false,
        },
        inventory: {
            type: Number,
            required: true,
            default: 15,
        },
        averageRating: {
            type: Number,
            default: 0,
        },
        numOfReviews: {
            type: Number,
            default: 0,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)