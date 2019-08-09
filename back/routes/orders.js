const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const table = Number(req.body.table);
    const menu = req.body.menu;
    const date = Date.parse(req.body.date);

    const newOrder = new Order({
        table,
        menu,
        date,
    });

    newOrder.save()
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(order => res.json('Order deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            order.table = Number(req.body.table);
            order.menu = req.body.menu;
            order.date = Date.parse(req.body.date);

            order.save()
                .then(() => res.json('Order updated'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;