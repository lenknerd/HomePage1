# HomePage1

Blog about my projects and professional interests.  This site is under construction, thanks for your patience!

Thanks to [Start Bootstrap](http://startbootstrap.com/) - [Clean Blog](http://startbootstrap.com/template-overviews/clean-blog/) for the starting point for this package.

## Planning Notes

Notes on things to do, and general features of app structure.  Especially regarding page and post management.

Some terminology first - a page is not a post, it is a list of post summaries/links you get to from home.

### "PostInfo" type

Create json object for entry - can be used client-side and server-side in node.js for build.

Include:

* date (displayed and used for sorting)
* title (displayed on list page)
* sub-heading description (displayed on list page)
* mainhtml-filename (url from that, since will all be in /posts, and view html sep but also based on)
* author (can all be me for now #DEFER)
* categories (array of strings for topics it relates to #DEFER)
* permission-type (string to use to determine whether to display based on log-in #DEFER)
* header pic source

So, post structure is;

* a body view file, created from markdown
	* this has insertion points for header and footer
	* also has definition of the above stuff
* a mainhtml for the post, which has js to load in source via Underscore tpl

               
### Write Posts (Just Core)

Create markdown pages for each blog post, js at top defining "PostInfo" instance for that.  Start out with one post, the one on your CMU research.  Put images manually in img.

For each post include an identically-named .js with instance of the PostInfo corresponding.  Can read it in gulp.

Also, for each post, an identically-named folder with supporting files (mostly img).  These can copy to the /img or other root dir for serve, but should be divided up in dev.

### Header Image and Text from JS

Instead of hard-coded image source and text in the header, should load from js objects defined per post or page.  Order matters here... probably define js objects ahead of header insert.

### Write PostProcessor

As part of gulp tasks, server JS to;

* Process markdowns to html
	* Later automatically list categories here and link them to category pages #DEFER
* Add header and footer etc. to each post, output to publishable files in posts folder
* Sort the posts by date, list, break into pages
* Create pages html with appropriate page-button visibility at bottom, appropriate links and date and description and all that

### Write Client-Side Page Handler

* Write js to load templates for all of the blog post pages, display based on tracked current page number, increment on older/newer page clicks
* Later, could use Marionette or something for this, but not right now.
