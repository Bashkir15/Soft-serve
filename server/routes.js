import express from 'express'

let router = express.Router();

router.get('/', (req, res) => {
	res.render('./index');
});

router.get('/getting-started', (req, res) => {
	res.render('./started/started')
});

router.get('/components', (req, res) => {
	res.render('./components/components');
});

router.get('/components/menu', (req, res) => {
	res.render('./components/menu');
});

router.get('/components/notifications', (req, res) => {
	res.render('./components/notifications');
});

router.get('/components/tooltip', (req, res) => {
	res.render('./components/tooltip');
});

module.exports = router;