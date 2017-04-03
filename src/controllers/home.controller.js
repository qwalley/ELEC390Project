// filename: home.controller.js
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
		console.log(result);
	});

	URLScraper.on('close', (code) => {
		var titles = {
			title1: '',
			title2: '',
			title3: ''
		};
		const title1Scraper = spawn('python', ["webscraper.py", 'title', URLs[0]]);
		var result1
		// on success parse into array
		title1Scraper.stdout.on('data', (data) => {
			result1 = data.toString();
		});

		// log errors to console
		title1Scraper.stderr.on('data', (data) => {
			consonle.log(data.toString());
		});

		title1Scraper.on('close', (code) => {
			titles.title1 = result1;
			// title 2
			const title2Scraper = spawn('python', ["webscraper.py", 'title', URLs[1]]);
			var result2
			// on success parse into array
			title2Scraper.stdout.on('data', (data) => {
				result2 = data.toString();
			});

			// log errors to console
			title2Scraper.stderr.on('data', (data) => {
				consonle.log(data.toString());
			});

			title2Scraper.on('close', (code) => {
				titles.title2 = result2;
				// title 3
				const title3Scraper = spawn('python', ["webscraper.py", 'title', URLs[2]]);
				var result3
				// on success parse into array
				title3Scraper.stdout.on('data', (data) => {
					result3 = data.toString();
				});

				// log errors to console
				title3Scraper.stderr.on('data', (data) => {
					consonle.log(data.toString());
				});

				title3Scraper.on('close', (code) => {
					titles.title3 = result3;
					res.render('home', {
						helpers: {
							title1: function () { return titles.title1; },
							title2: function () { return titles.title2; },
							title3: function () { return titles.title3; }
						}
					});
				}); // end title3
			}); // end tite 2
		}); // end title 1
	}); //end URL scrapper
}