// app/models/issuePost.js
var mongoose = require('mongoose');

var hazzulSchema = mongoose.Schema({
  title: String,
	url  : String,
	img_url: [String],
	img_comment: [String],
	video_url:[String],
	posted: { type: Date, default: Date.now },
	numClicks: {type: Number, default:0},
	usernumClicks: {type: Number, default:0},
	myClicks: {type: Number, default:0},
	comments: [{
		name: String,
		content: String
	}],
	userComments: [{
		userPost: String
	}],
  nickname: String,
  type: String

     });

hazzulSchema.statics.findByTitle = function(title, cb) {
	// This is an interesting line.
	// New RegExp(title, 'i') creates a Regular Expression that causes a case-insensitive search.
	// Also passing in the callback like this allows us to call this method like so:

	/*
		Pinless.findByTitle('kitty', function(err, results) {
			console.log(results)  // Here results will have all Pinless' with title 'kitty'
		})
	*/
	this.find({ title: new RegExp(title, 'i')}, cb);
}

     hazzulSchema.plugin(mongoosePaginate);
     module.exports = mongoose.model('hazzulPost', hazzulSchema);
