// filename: anotherpage2.controller.js
// author: Will Alley

const express = require('express');
const spawn = require('child_process').spawn;

module.exports = function anotherpage3Controller(req, res) {

	article = {
		title: 'Remarks by Supreme Leader Trump et al. at Signing of Trade Executive Orders',
		URL: 'https://www.whitehouse.gov/the-press-office/2017/03/31/remarks-president-trump-et-al-signing-trade-executive-orders',
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