// post-load.js
// Client JS to load the post, set the header image, header title text, other default post stuff
// David Lenkner, 2017


/* Main function to be called on load of a blog post
 * Set up everything for this page - content, title, header image, etc
 * Example of items in postInf;
	title: 'Test Page',
	subtitle: 'Just Seeing if Things Work...',
	date: '2017-3-2',
	author: 'David Lenkner',
	categories: ['junk'],
	headerImg: 'post-bg.jpg',
	name: 'test'
*/
function postLoad(postInf) {
	// Replace contents of #post-title and #post-subtitle nodes
	$("#post-title").text(postInf.title);
	$("#post-subtitle").text(postInf.subtitle);

	// Set source of header image
	$(".intro-header").css("background-image", "url(/img/" + postInf.headerImg + ")");

	// Replace main body html with stuff from template - use Underscore
	$("#page-content").load( '/posts/' + postInf.name + '_body.html' );
}

// Last of all, actually call that function
postLoad(postInfo);
