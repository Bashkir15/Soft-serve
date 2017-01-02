import express from 'express'

let router = express.Router();

router.get('/', (req, res) => {
	res.render('./index');
});

router.get('/components', (req, res) => {
	res.render('./components/components');
})

module.exports = router;