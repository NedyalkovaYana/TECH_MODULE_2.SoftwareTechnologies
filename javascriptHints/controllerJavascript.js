const Product = require('../models/Product');

module.exports = {
	index: (req, res) => {
        Product.find().then(products => {
            res.render('product/index', {'products': products});
        });
    	},
		
		
	createGet: (req, res) => {
        res.render('product/create');
	},
	
	
	createPost: (req, res) => {
        let productArgs = req.body;

        if (!productArgs.priority ||
            !productArgs.name ||
            !productArgs.quantity ||
            !productArgs.status) {
            return res.redirect('/');
        }

        Product.create(productArgs).then(product => {
            res.redirect('/');
        });
	},
	
	
	editGet: (req, res) => {
        let productId = req.params.id;
        Product.findById(productId).then(product => {
            if (product){
                res.render('product/edit', product);
            }
            else {
                res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
	},
	
	
	editPost: (req, res) => {
        let productId = req.params.id;
        let product = req.body;

        Product.findByIdAndUpdate(productId, product, {runValidators: true}).then(product => {
            res.redirect('/');
        }).catch(err => {
            product.id = productId;
            product.error = "Cannot edit product.";
            return res.render("product/edit", product);
        });

    }
};
	
	
	deleteGet: (req, res) => {
        let filmId = req.params.id;
        Film.findById(filmId).then(film => {
            if (film){
                return res.render('film/delete', film);
            }
            else {
                return res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
	},
	
	
	deletePost: (req, res) => {
        let filmId = req.params.id;
        Film.findByIdAndRemove(filmId).then(film => {
            res.redirect('/');
        }).catch(err => res.redirect('/'));
	},
};