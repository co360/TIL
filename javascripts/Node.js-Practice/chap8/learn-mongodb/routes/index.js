var express = require('express');
var router = express.Router();

/* GET home page. */

//get/usrs

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/',(req,res,next)=>{

})



module.exports = router;