const homeController = (con) => {
    return {
        index(req, res) {
            con.query('SELECT * FROM item WHERE status=0', (error, results) => {
                console.log(results);
                res.render('home', { data: results });
            })
        }
    }
}
module.exports = homeController;