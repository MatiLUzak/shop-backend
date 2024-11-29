const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

// Pobranie wszystkich produktów
router.get('/', async (req, res) => {
    try {
        const products = await Product.fetchAll({ withRelated: ['category'] });
        res.json(products);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
});

// Pobranie produktu po ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.where('id', req.params.id).fetch({ withRelated: ['category'] });
        res.json(product);
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Produkt nie znaleziony' });
    }
});

// Dodanie nowego produktu
router.post('/', async (req, res) => {
    const { name, description, unit_price, unit_weight, category_id } = req.body;

    // Walidacja danych
    if (!name || !description || unit_price <= 0 || unit_weight <= 0 || !category_id) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Nieprawidłowe dane produktu' });
    }

    try {
        const product = await new Product({
            name,
            description,
            unit_price,
            unit_weight,
            category_id,
        }).save();
        res.status(StatusCodes.CREATED).json(product);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
});

// Aktualizacja produktu
router.put('/:id', async (req, res) => {
    const { name, description, unit_price, unit_weight, category_id } = req.body;

    // Walidacja danych
    if (!name || !description || unit_price <= 0 || unit_weight <= 0 || !category_id) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Nieprawidłowe dane produktu' });
    }

    try {
        const product = await Product.where('id', req.params.id).fetch();
        await product.save({
            name,
            description,
            unit_price,
            unit_weight,
            category_id,
        });
        res.json(product);
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Produkt nie znaleziony' });
    }
});

module.exports = router;