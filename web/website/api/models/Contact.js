/**
 * Contact
 *
 * @module      :: Model
 */

var Contact = {
  attributes: {
	emailAddress: {
      type: 'email', 
      required: true
    },
	emailSent: {
      type: 'boolean',
      defaultsTo: false
    }    
  }
};

module.exports = Contact;
