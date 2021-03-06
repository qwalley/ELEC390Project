// filename: anotherpage.controller.js
// author: Will Alley

const express = require('express');
const spawn = require('child_process').spawn;

module.exports = function anotherpageController(req, res) {

	article = {
		title: 'Remarks by Supreme Leader Trump and Supreme Leader Al-Sisi of Egypt Before Bilateral Meeting',
		URL: 'https://www.whitehouse.gov/the-press-office/2017/04/03/remarks-president-trump-and-president-al-sisi-egypt-bilateral-meeting',
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