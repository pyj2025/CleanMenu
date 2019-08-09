const router = require('express').Router();

let Table = require('../models/table.model');

router.route('/').get((req, res) => {
    Table.find()
        .then(tables => res.json(tables))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const table = Number(req.body.table);
    const newTable = new Table({table});

    newTable.save()
        .then(() => res.json('Table added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;