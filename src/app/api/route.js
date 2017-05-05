import { Router } from 'express'
import Intent from './intent/route'

const router  = new Router()


router.use('/intent',Intent)

router.get('/',function(req,res,next){
	res.json({status:"I m API"})
})



module.exports = router;
