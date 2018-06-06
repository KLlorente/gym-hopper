'use strict'; 

const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise;

//schema to represent a new gym post

const newGymSchema = mongoose.Schema({
	userId: {type: String}, 
	id: {type: String}, 
	title: {type: String, required: true}, 
	rating: {type: Number}, 
	address: {type: String}, 
	url: {type: String}, 
	content: {type: String}
}); 

newGymSchema.methods.serialize = function() {
	return {
		id: this._id, 
		userId: this.userId,
		title: this.title, 
		rating: this.rating, 
		address: this.address, 
		url: this.url, 
		content: this.content
	}; 
}

const Gym = mongoose.model('Gym', newGymSchema); 
module.exports = {Gym}; 