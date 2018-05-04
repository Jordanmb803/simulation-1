module.exports = {
    readInventory:(req,res) => {
       req.app.get('db').get_inventory()
       .then(inventory => res.status(200).send(inventory))
    },
    addProduct:(req,res) => {
        const { imgUrl ,name, price } = req.body
        req.app.get('db').create_product([imgUrl, name, price])
            .then( ok => res.sendStatus(200))
        
    },
    deleteProduct:(req,res) => {
        const { product_id } = req.params
        req.app.get('db').delete_product([product_id])
            .then( ok => res.sendStatus(200))
    },
    updateProduct:(req,res) => {
        const { imgurl, name, price } = req.body
        const { product_id } = req.params
        req.app.get('db').update_product([product_id, imgurl, name, price])
            .then(ok => res.sendStatus(200))
    }
}