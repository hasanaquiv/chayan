const index = (req, res) => {
    res.json(req.user)
}

module.exports = {index}