const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST
router.post('/', (req, res) => {
	console.log('req.body:', req.body);
	let queryText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
	VALUES ($1, $2, $3, $4);`;
	pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
	.then(response => {
		console.log('back from POST with response:', response);
		res.sendStatus(201);
	}).catch(error => {
		console.log('error in POST:', error);
	})
});//end POST

module.exports = router;