// filename: anotherpage2.controller.js
// author: Will Alley

const express = require('express');
const spawn = require('child_process').spawn;

module.exports = function anotherpage2Controller(req, res) {

	article = {
		title: 'Remarks by the Sous Chef to Dynalab Inc, Reynoldsburg, OH',
		URL: 'https://www.whitehouse.gov/the-press-office/2017/04/01/remarks-vice-president-dynalab-inc-reynoldsburg-oh',
		body: ''
	};
	
	const articleScraper = spawn('python', ['webscraper.py', 'article', article.URL]);

	articleScraper.stdout.on('data', (data) => {
	article.body = data.toString();
	});

	articleScraper.stderr.on('data', (data) => {
		console.log(data.toString());
	});

	articleScraper.on('close', (code) => {
		res.render('anotherpage', {
			helpers: {
				title: function () { return article.title; },
				text: function () { return article.body; }
			}
		});
	});
}