// filename: webscrape.controller.js
// author: Will Alley

const express = require('express');
const spawn = require('child_process').spawn;


module.exports = function (req, res) {
	// start scraper for list of articles
	const URLScraper = spawn('python', ["webscraper.py", 'links']);
	var result, URLs;

	// on success parse into array
	URLScraper.stdout.on('data', (data) => {
		result = data.toString();
		URLs = result.split(',');
	});

	// log errors to console
	URLScraper.stderr.on('data', (data) => {
		result = data.toString();
		consonle.log(result);
	});

	URLScraper.on('close', (code) => {
		article = {
			title: '',
			URL: URLs[0],
			body: ''
		};
		// spawn a scraper to find the title
		const articleScraper = spawn('python', ['webscraper.py', 'title', article.URL]);

		articleScraper.stdout.on('data', (data) => {
		article.title = data.toString();
		});

		articleScraper.stderr.on('data', (data) => {
			console.log(data.toString());
		});

		articleScraper.on('close', (code) => {
			// spawn a scraper for the body of the article
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
		});
	});
}