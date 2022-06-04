var fs = require('fs');
fs.readfile('sample.txt', 'utf',function(err,data){
  console.log(data);
});
