var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Intent   = new Schema({
    conversation_id: String,
    message:String,
    intent:Object
});

exports.getModel = function()
{
	return mongoose.model('intent', Intent);

}

