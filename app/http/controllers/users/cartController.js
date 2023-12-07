const cartController = (con) => {
    return {
        cartp(req, res) {
            res.render('users/cart');
        }
    }
}
module.exports = cartController;