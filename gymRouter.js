const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 

const bodyParser = require('body-parser'); 
const jsonParser =- bodyParser.json(); 

const {Gym} = require('./models'); 

//GET User

router.get('/user/:userId', (req, res) => {
	Gym
		.find({userId: req.params.userId})
		.then(gym => {
			res.json({
				gym: gym.map(
					(gym) => gym.serialize())
			}); 
		})
		.catch(err => {
			console.error(err); 
			res.status(500).json({ message: 'Internal server error'}); 
		}); 
}); 

//GET gym by ID

router.get('/:id', (req, res) => {})