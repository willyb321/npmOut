#!/usr/bin/env node

'use strict';
const npm = require('npm');
const prompt = require('prompt');

prompt.start();

function onErr(err) {
	console.log(err);
	return 1;
}

npm.load(() => {
	npm.commands.outdated({json: true}, (err, data) => {
		console.log(data);
		if (err) {
			console.log(err);
		}
		npm.commands.update((err, d) => {
					if (err) {
						console.log(err);
					}
					console.log(d);
				});
		});
	});
