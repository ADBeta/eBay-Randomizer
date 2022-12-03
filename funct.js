//Mode and value variables (global)
const GenVars = {
	//Valid states: seed rand
	cMode: "seed",
	
	//Seed variables (assigned on click of "Generate" button)
	seedVal: 0,
	seedRange: 0,
	
	//Unlocked Random variables ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	randMin: 0,
	randMax: 0,
}


//Mode setup functons
function setSeed() {
	GenVars.cMode = "seed";
	console.log(GenVars.cMode);
}

function setRand() {
	GenVars.cMode = "rand";
	console.log(GenVars.cMode);
}



function test() {
	console.log("hello");
	console.log("test");
}

//Takes a random number generated and append it to the eBay URL 
function genURL(val) {
	let eBayURL = "";
	
	//Convert the number to a string and pad the string with 0's for length
	eBayURL = val.toString();
	eBayURL = eBayURL.padStart(12, '0');
	
	//Return
	return "https://www.ebay.co.uk/itm/" + eBayURL;
}

//Generate a random 12 digit number with min and max value
function generateRandomMinMax(min, max) {
	//Generate a random number between max and 1
	let randVal = Math.floor((Math.random() * max) + min);
	
	//Return it
	return randVal;
}

//Generate a random number from a seed value, inside a range
function generateRandomFromSeed(seed, range) {
	//Generate a random number between spread and 1
	let randVal = Math.floor((Math.random() * range) + 1);
	
	//Pre-define an ouput value
	let outputVal = 0;
	//Get random float, if it is greater than .5 (50%) then addition, else
	//subraction of the random val
	if(Math.random() > 0.5) {
		outputVal = seed + randVal;
	} else {
		outputVal = seed - randVal;
	}
	
	return outputVal;
}



