function pingRoute() {
    return (req, res) => {
        res.status(200).send('pong');
    };
}

module.exports = {
    pingRoute
}