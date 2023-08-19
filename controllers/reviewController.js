
const createReview = async (req, res) => {
    res.send('create a review')
}

const getAllReviews = async (req, res) => {
    res.send('get all reviews')
}

const getSingleReview = async (req, res) => {
    res.send('get single review')
}

const updateReview = async (req, res) => {
    res.send('update a review')
}

const deleteReview = async (req, res) => {
    res.send('delete a review')
}

module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview
}