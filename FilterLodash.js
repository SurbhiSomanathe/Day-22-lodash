const _ = require("lodash"); 

var users = [
  { 'user': 'luv',
    'salary': 36000,
    'active': true },
  { 'user': 'kush', 
    'salary': 40000,
    'active': false }
];
  
let result = _.filter(users, 
    { 'salary': 36000, 'active': true }
);
  

console.log(result);

