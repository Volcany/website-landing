/**
 * ContactController
 *
 * @module      :: Controller
 */
var validator = require('validator');

var ContactController = {
	index: function(req, res) { 
		res.send('Hey you.', 404);
	},
	find: function(req, res) { 
		res.send('Hey you.', 404);
	},
	update: function(req, res) { 
		res.send('Hey you.', 404);
	},
	destroy: function(req, res) { 
		res.send('Hey you.', 404);
	},
    create: function(req, res) {
		var email = validator.toString(req.param('email'));
		if (!email || email === '') {
			res.send({ status: 'NOK', message: 'Please enter your email address.' });
		}
		else if (!validator.isEmail(email)) {
			res.send({ status: 'NOK', message: 'Please enter a valid email address.' });
		}
		else {		
			Contact.findByEmailAddress(email).exec(function (err, contact) {
				if (err) {
					res.send({ status: 'NOK', message: err });
				}
				else if (contact !== null && contact.length > 0) {
					res.send({ status: 'NOK', message: 'Your email is already registered. We\'ll be in touch :).' });
				}
				else {
					Contact.create({
						emailAddress: email
					}).done(function(err, user) {
						if (err) {
							res.send({ status: 'NOK', message: err });
						}
						else {
							res.send({ status: 'OK', message: 'Thank you. We\'ll be in touch :).' });
						}
					});
				}	
			});
		}
    }
}

module.exports = ContactController;