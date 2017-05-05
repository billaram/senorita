var request = require('request')

var IntentModel = require('./model').getModel();

const Intent = {

	create:(req,res,next) =>{
		

			var Intent = new IntentModel()
			Intent.conversation_id = req.body.conversation_id;
			Intent.message = req.body.message;
			Intent.intent = req.body.intent;
			Intent.save(function(err,intent){
				res.json({status:'success',data:intent})
			})

		

	}
}

module.exports = Intent