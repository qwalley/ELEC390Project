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
		res.send('1: ' + URLs[0] + ' 2: ' + URLs[1] + ' 3: ' + URLs[2]);
	});
}