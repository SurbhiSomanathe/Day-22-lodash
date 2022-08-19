
const _ = require("lodash");
	
var users = [ 1, 2, 3, 4 ];

let result = _.reduce(users, function(sum, n) {
return sum + n;
}, 0);

console.log(result);
