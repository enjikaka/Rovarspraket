// http://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket

var Rovarspraket = {
	to: function(s) {
		return s.toString().replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)/gi, function(str) {
			return str + 'o' + str.toLowerCase();
		});
	},
	from: function(s) {
		return s.toString().replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)+o+(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)/gi, function(str) {
			return str.substr(0, 1);
		});
	}
};