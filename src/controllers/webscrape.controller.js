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

	// once finished spawn scraper for the links collected
	URLScraper.on('close', (code) => {
		const articleScraper = spawn('python', ['webscraper.py', 'article', URLs[0]]);
		var text;

		articleScraper.stdout.on('data', (data) => {
		text = data.toString();
		});

		articleScraper.stderr.on('data', (data) => {
			text = data.toString();
			console.log(text);
		});

		articleScraper.on('close', (code) => {
			
		});
	});
}