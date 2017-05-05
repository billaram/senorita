import { Router } from 'express'
import bodyParser from 'body-parser'
import Intent from './controller.js'
const router  = new Router()

var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*50})
var jsonParser = bodyParser.json();
router.get('/',function(req,res,next){

})



router.post('/',urlencodedParser,Intent.create)



module.exports = router;
