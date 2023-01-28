const handler = (req, res) => {
    const query = req.query.breed
    res.status(200).json({ message: `I love ${query}` })
}

export default handler
