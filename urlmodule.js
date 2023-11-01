let url = require('url');
let query = require('querystring');
var address = 'https://www.amazon.in/search?mobile=Samsung&price=100000';
var q = url.parse(address,true);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);
console.log(q.query.mobile)
//console.log(query.search.mobile);
console.log(q.query.price)