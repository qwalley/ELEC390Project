// filename: server.js
// author: Will Alley

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/router');

const app = express();
/*const hbs = exhbs.create({
	helpers: {
		title: function () { return 'title!'; },
		body: function () { return 'article body!'; }
	}
}); */

app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(8000, () => {
	console.log('Listening on 8000');
});