// filename: scrape.js
// author: Will Alley

const express = require('express');
const spawn = require('child_process').spawn;

const scraper = spawn('python', ["webscraper.py"]);

scraper.stdout.on('data', (data) => {
	console.log(data.toString());
});

scraper.stderr.on('data', (data) => {
	console.log(data.toString());
})

scraper.on('close', (code) => {
	console.log('exited with code: ' + code);
});

