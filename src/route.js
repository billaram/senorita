import { Router } from 'express'
import Api from './app/api/route'
const router = new Router();


router.use('/api',Api)

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.get('/',function(req,res){
  return res.end('Senorita, Bienvenido')
})


module.exports = router;