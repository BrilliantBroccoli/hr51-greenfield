const User = require('./models/user.js');

module.exports = {

	register: (IP, category) => {
		return new User({
			IP: IP,
			category: category
		}).save();
	}
}