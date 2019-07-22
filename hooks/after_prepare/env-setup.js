#!/usr/bin/env node

var environmentList = ['debug','staging','prod'];

var fs = require("fs");
var path = require("path");

/*console.log('-----------------------------');
console.log("Running hook: "+path.basename(process.env.CORDOVA_HOOK));
 
var buildEnvironment = environmentList[0];

if (process.env.target && environmentList.indexOf( process.env.target ) > 0 ) {
	buildEnvironment = process.env.target;
	console.log( 'Setting environment');
}	
else {
	console.log( 'Using Default Environment' );
}

console.log('Using environment: ' + buildEnvironment);
var htmlFile = path.join( path.resolve(),'www') + '/index.html';

console.log( htmlFile );
if (fs.existsSync(htmlFile)) { 
  console.log('it exists');

	fs.readFile( htmlFile, function(err, buf) {
		
		if (typeof buf !== 'undefined') {
			console.log('Read from file ' + htmlFile);
			fs.writeFile(htmlFile, buf.toString() , function(err) {
				console.log('Wrote to file ' + htmlFile);
				console.log('-----------------------------');
				if (err) throw err;
			});
		}
		else {
			console.log('Config File ' + htmlFile + ' NOT FOUND');
			console.log(htmlFile + ' NOT CHANGED');
			console.log('-----------------------------');
		}	
		
	});
}
else {
	console.log('Config File ' + htmlFile + ' NOT FOUND');
	console.log(htmlFile + ' NOT CHANGED');
	console.log('-----------------------------');
}*/

function replace(path, regex, value) {
    var fileContent = fs.readFileSync(path, 'utf8');
    fileContent = fileContent.replace(regex, function replacer(match) {
        return value;
    });
    fs.writeFileSync(path, fileContent);
}

var htmlPath = path.join(path.resolve(), 'platforms', 'android', 'app', 'src', 'main', 'assets', 'www') + '/index.html';
var regex = /<p class="event received">(.+)<\/p>/g;
var value = '<p class="event received">Exterminate</p>';
replace(htmlPath, regex, value);

var htmlPath = path.join(path.resolve(), 'platforms', 'android', 'app', 'src', 'main', 'res', 'values') + '/strings.xml';
var regex = /<string name="app_name">(.+)<\/string>/g;
var value = '<string name="app_name">DoomBot</string>';
replace(htmlPath, regex, value);