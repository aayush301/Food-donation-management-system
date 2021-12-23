const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");

module.exports = function(passport) {
	passport.use( "local",
		new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
			User.findOne({ email: email })
				.then(user => {
					if(!user)
						return done(null, false, { message: "The email is not registered" });
					
					bcrypt.compare(password, user.password, (err, isMatch) => {
						if(err)	throw err;
						if(!isMatch)
							return done(null, false, {message: "Password incorrect"});
						else
							return done(null, user, { message: "Logged in successfully" });
					})
				})
				.catch(err => console.log(err));
		})
	);
	
	
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});
	
	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});
	
}

