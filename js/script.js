		let simsubscreennum=0;
		let temp=0;
	
		function navNext() {
			for (temp = 0; temp < 2; temp++) {
				const canvasElement = document.getElementById("canvas" + temp);
				if (canvasElement) {
					canvasElement.style.visibility = "hidden";
				}
			}
			simsubscreennum += 1;
			const nextCanvasElement = document.getElementById("canvas" + simsubscreennum);
			if (nextCanvasElement) {
				nextCanvasElement.style.visibility = "visible";
			}
			document.getElementById("nextButton").style.visibility = "hidden";
		}
		
		


	//=============//
	let simsubscreennum1=0;
	let temp1=0;
	function navNext1 ()
	{
		for(temp1=0;temp1<2;temp1++)
		{
			document.getElementById("canvas2"+temp1).style.visibility="hidden";
		}
		simsubscreennum1+=1;
		document.getElementById("canvas2"+simsubscreennum1).style.visibility="visible";
		document.getElementById("nextButton1").style.visibility="hidden";
		
		// magic();
	}		


	function getOption(){
		
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.output').textContent= output;
		
	}

	

	function getOption1(){
	
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.out').textContent= output;
		
	}


	function getOption2(){
		
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.out1').textContent= output;
		
	}




// JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the input element to call validateAlphabet when the input value changes.
    document.getElementById("alphabetInput").addEventListener("input", validateAlphabet);

    // Handle the click event of the submit button (removed from HTML)
    document.getElementById("nextButton1").addEventListener("click", function () {
        // Your code to handle the button click goes here
		
		
        navNext();
        getOption();
        getOption1();
        getOption2();
    });

    // Rest of your JavaScript code
    // ...

    function validateAlphabet() {
        var input = document.getElementById("alphabetInput").value.toUpperCase();
        var validAlphabets = ["A", "B", "C", "D","E","F", "G", "H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // Add all valid alphabets (A to Z) here

        if (validAlphabets.includes(input)) {
            document.getElementById("errorText").textContent = ""; // Clear error message
        } else {
			var errorTextContainer = document.getElementById("errorText");
        	errorTextContainer.style.padding = "10px";
			errorTextContainer.style.paddingRight='2px'
            document.getElementById("errorText").textContent = "Please enter a valid alphabet (A to Z)";
        }
    }

    // Other functions here
});



function getOptionaud(){
		selectElement =document.querySelector('#alphabetInput');
		output=selectElement.value;
		document.querySelector('.output2').textContent= output;
	}

	//----------
	function preloadImages(callback) {
		let loadedImages = 0;
		let totalImages = 0;
	
		for (const alphabet in imageSources) {
			totalImages += imageSources[alphabet].length;
			imageSources[alphabet].forEach(imageUrl => {
				const img = new Image();
				img.src = imageUrl;
				img.onload = () => {
					loadedImages++;
					if (loadedImages === totalImages) {
						callback();
					}
				};
			});
		}
	}
	

function displayHintImages() {
    // const selectElement = document.querySelector('#alphabetInput');
    const output = selectElement.value.toUpperCase();
    const imageContainer = document.querySelector('.outputImg');
    const nameContainer = document.querySelector('.outputName');

	const letterNames = {
		A: "Archery",
		B: "Banjo",
		C: "Candy",
		D: "Dog",
		E: "Eye",
		F: "Firetruck",
		G: "Giraffe",
		H: "Hippo",
		I: "Insect",
		J: "Jet",
		K: "Kite",
		L: "Laboratory",
		M: "Mustache",
		N: "Net",
		O: "Orchestra",
		P: "Paddle",
		Q: "Quarterback",
		R: "Robot",
		S: "Submarine",
		T: "Tape",
		U: "Unicorn",
		V: "Vacuum",
		W: "Wand",
		X: "X-ray",
		Y: "Yard",
		Z: "Zebra",
	};

    // Define image sources for each alphabet
	const imageSources = {
        // A: ["./img/A (Archery)/1.PNG", "./img/A (Archery)/2.PNG", "./img/A (Archery)/3.PNG"],
        A: ["./img/A (Archery)/1.PNG","./img/A (Archery)/2.PNG","./img/A (Archery)/3.PNG"],
        B: ["./img/B (Banjo)/1.PNG", "./img/B (Banjo)/2.PNG", "./img/B (Banjo)/3.PNG","./img/B (Banjo)/4.PNG","./img/B (Banjo)/5.PNG"],
		C: ["./img/C (Candy)/1.PNG","./img/C (Candy)/2.PNG","./img/C (Candy)/3.PNG","./img/C (Candy)/4.PNG","./img/C (Candy)/5.PNG"],
        D: ["./img/D (Dog)/1.PNG", "./img/D (Dog)/2.PNG", "./img/D (Dog)/3.PNG", "./img/D (Dog)/4.PNG"],
		E: ["./img/E (Eye)/1.PNG","./img/E (Eye)/2.PNG"],
		F: ["./img/F (Firetruck)/1.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/2.PNG","./img/F (Firetruck)/3.PNG","./img/F (Firetruck)/4.PNG","./img/F (Firetruck)/5.PNG"],
		G: ["./img/G (Giraffe)/1.PNG","./img/G (Giraffe)/2.PNG","./img/G (Giraffe)/3.PNG","./img/G (Giraffe)/4.PNG"],
		H: ["./img/H (Hippo)/1.PNG","./img/H (Hippo)/2.PNG","./img/H (Hippo)/3.PNG","./img/H (Hippo)/4.PNG","./img/H (Hippo)/5.PNG"],
		I: ["./img/I (Insect)/1.PNG","./img/I (Insect)/2.PNG","./img/I (Insect)/3.PNG"],
		J: ["./img/J (Jet)/1.PNG","./img/J (Jet)/2.PNG",'./img/J (Jet)/3.PNG','./img/J (Jet)/4.PNG','./img/J (Jet)/5.PNG'],
		K: ["./img/K (Kite)/1.PNG","./img/K (Kite)/2.PNG","./img/K (Kite)/3.PNG","./img/K (Kite)/4.PNG"],
		L: ["./img/L (Laboratory)/1.PNG","./img/L (Laboratory)/2.PNG","./img/L (Laboratory)/3.PNG","./img/L (Laboratory)/4.PNG","./img/L (Laboratory)/5.PNG"],
		M: ["./img/M (Mustache)/1.PNG","./img/M (Mustache)/2.PNG","./img/M (Mustache)/3.PNG"],
		N: ["./img/N (Net)/1.PNG","./img/N (Net)/2.PNG","./img/N (Net)/3.PNG"],
		O: ["./img/O (Orchestra)/1.PNG","./img/O (Orchestra)/2.PNG","./img/O (Orchestra)/3.PNG","./img/O (Orchestra)/4.PNG"],
		P: ["./img/P (Paddle)/1.PNG","./img/P (Paddle)/2.PNG","./img/P (Paddle)/3.PNG","./img/P (Paddle)/4.PNG","./img/P (Paddle)/5.PNG"],
		Q: ["./img/Q (Quarterback)/1.PNG","./img/Q (Quarterback)/2.PNG","./img/Q (Quarterback)/3.PNG","./img/Q (Quarterback)/4.PNG","./img/Q (Quarterback)/5.PNG"],
		R: ["./img/R (Robot)/1.PNG","./img/R (Robot)/2.PNG","./img/R (Robot)/3.PNG","./img/R (Robot)/4.PNG"],
		S: ["./img/S (Submarine)/1.PNG","./img/S (Submarine)/2.PNG","./img/S (Submarine)/3.PNG","./img/S (Submarine)/4.PNG"],
		T: ["./img/T (Tape)/1.PNG","./img/T (Tape)/2.PNG"],
		U: ["./img/U (Unicorn)/1.PNG","./img/U (Unicorn)/2.PNG","./img/U (Unicorn)/3.PNG","./img/U (Unicorn)/4.PNG"],
		V: ["./img/V (Vacuum)/1.PNG","./img/V (Vacuum)/2.PNG","./img/V (Vacuum)/3.PNG","./img/V (Vacuum)/4.PNG","./img/V (Vacuum)/5.PNG"],
		W: ["./img/W (Wand)/1.PNG","./img/W (Wand)/2.PNG","./img/W (Wand)/3.PNG","./img/W (Wand)/4.PNG"],
		X: ["./img/X (X-ray)/1.PNG","./img/X (X-ray)/2.PNG","./img/X (X-ray)/3.PNG","./img/X (X-ray)/4.PNG","./img/X (X-ray)/5.PNG"],
		Y: ["./img/Y (Yard)/1.PNG","./img/Y (Yard)/2.PNG","./img/Y (Yard)/3.PNG","./img/Y (Yard)/4.PNG","./img/Y (Yard)/5.PNG"],
        Z: ["./img/Z (Zebra)/1.PNG", "./img/Z (Zebra)/2.PNG", "./img/Z (Zebra)/3.PNG" ,"./img/Z (Zebra)/4.PNG","./img/Z (Zebra)/5.PNG"],
    };

	// Preload images when the page loads
function preloadImages() {
    for (const alphabet in imageSources) {
        imageSources[alphabet].forEach(imageUrl => {
            const img = new Image();
            img.src = imageUrl;
        });
    }
}

window.addEventListener('load', preloadImages);

//-----------

window.addEventListener('load', () => {
	setTimeout(() => {
		preloadImages(() => {
			// Your code to display hint images goes here
			displayHintImages();
		});
	}, 10); // Adjust the delay time as needed
});


	const alphabetTimings = {
		A: { interval: 700, timeout: 1700,},
		B: { interval: 660, timeout: 2800, },
		C: { interval: 700, timeout: 2800,  },
		D: { interval: 700, timeout: 2100, },
		E: { interval: 220, timeout: 500,  },
		F: { interval: 630, timeout: 2700 },
		G: { interval: 700, timeout: 2100},
		H: { interval: 600, timeout: 2600 },
		I: { interval: 700, timeout: 1600 },
		J: { interval: 600, timeout: 2500 },
		K: { interval: 700, timeout: 2100 },
		L: { interval: 600, timeout: 2600 },
		M: { interval: 600, timeout: 1500 },
		N: { interval: 600, timeout: 1600, },
		O: { interval: 550, timeout: 2000 },
		P: { interval: 600, timeout: 2500, },
		Q: { interval: 650, timeout: 2600 },
		R: { interval: 650, timeout: 2000 },
		S: { interval: 600, timeout: 2000 },
		T: { interval: 700, timeout: 1000 },
		U: { interval: 660, timeout: 2200 },
		V: { interval: 690, timeout: 2760 },
		W: { interval: 520, timeout: 2000 },
		X: { interval: 680, timeout: 2900 },
		Y: { interval: 600, timeout: 2500 },
		Z: { interval: 550, timeout: 2700 },
	};
	

	
	// const alphabetTimings = {
	// 	A: { interval: 800, timeout: 2400,},
	// 	B: { interval: 700, timeout: 2800, },
	// 	C: { interval: 700, timeout: 2800,  },
	// 	D: { interval: 500, timeout: 1500, },
	// 	E: { interval: 250, timeout: 250,  },
	// 	F: { interval: 450, timeout: 2250 },
	// 	G: { interval: 500, timeout: 1500},
	// 	H: { interval: 500, timeout: 2000 },
	// 	I: { interval: 550, timeout: 1100 },
	// 	J: { interval: 650, timeout: 2600 },
	// 	K: { interval: 800, timeout: 2400 },
	// 	L: { interval: 500, timeout: 2000 },
	// 	M: { interval: 750, timeout: 1500 },
	// 	N: { interval: 550, timeout: 1100, },
	// 	O: { interval: 650, timeout: 1950 },
	// 	P: { interval: 750, timeout: 3000,  },
	// 	Q: { interval: 650, timeout: 2600 },
	// 	R: { interval: 450, timeout: 1350 },
	// 	S: { interval: 500, timeout: 1500 },
	// 	T: { interval: 500, timeout: 500 },
	// 	U: { interval: 660, timeout: 1980 },
	// 	V: { interval: 690, timeout: 2760 },
	// 	W: { interval: 700, timeout: 2100 },
	// 	X: { interval: 950, timeout: 3850 },
	// 	Y: { interval: 750, timeout: 3150 },
	// 	Z: { interval: 600, timeout: 2400 },
	// };

	const audioContext = new (window.AudioContext || window.webkitAudioContext)();

	const morseCode = getMorseCodeForAlphabet(output);
    let morseIndex = 0;

	let startsWithDot = false;
    if (morseCode.charAt(0) === '.') {
        startsWithDot = true;
    }

	// Clear the previous content
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }

	
    // Clear the previous content
	hideHintButton();
	
  
    if (imageSources[output]) {
		let currentIndex = 0// Start with dot or dash
		

		
		const containerDiv = document.createElement('div');
    	containerDiv.style.textAlign = 'center';
		
        // Create an img element
        const image = document.createElement('img');
        image.src = imageSources[output][currentIndex];
        image.alt = `Image for ${output}`;

        image.style.width = '245px'; // Set the width
        image.style.height = '230px'; // Set the height
		

        image.style.margin = '-45px'; // Adjust margin as needed
		image.style.marginLeft = '80px';
		image.style.paddingLeft = '140px';

		

		function changeImage() {
			image.src = imageSources[output][currentIndex];
			currentIndex = (currentIndex + 1) % imageSources[output].length;

		}
        // Append the image to the container
        imageContainer.appendChild(image);
		const nameDiv = document.createElement('div');
		nameDiv.textContent = `${letterNames[output]}`;
		// nameDiv.style.textAlign = 'center'; // Center the text horizontally
		nameDiv.style.textAlign='left'
		nameDiv.style.marginLeft = '275px';
	
		
	
		// Append the name div to the container	
		imageContainer.appendChild(nameDiv);
		nameDiv.style.fontSize='18px'
		nameDiv.style.fontWeight = 'bold';
		nameDiv.style.padding='25px'

		imageContainer.appendChild(nameDiv);
		imageContainer.appendChild(containerDiv);
		// const audio = audioSources[output];
		
		// const imageChangeInterval = setInterval(changeImage, 500);
		//     // Clear the interval after a timeout (e.g., alphabetTimings[output].timeout)
		// 	setTimeout(function () {
		// 		clearInterval(imageChangeInterval);
		// 		const restartButton = document.querySelector('#resetButton');
		// 		restartButton.style.display = 'block';
		// 	}, alphabetTimings[output].timeout);
		const intervalsForF = [400, 380, 480, 420];
		
		let imageChangeInterval = null;
		if (output === 'F') {
			let intervalIndex = 0;
			imageChangeInterval = setInterval(function() {
				changeImage();
				intervalIndex = (intervalIndex + 1) % intervalsForF.length;
				
			}, intervalsForF[intervalIndex]); // 320 milliseconds for "F"
			
    } 
	
	
	else {
        imageChangeInterval = setInterval(changeImage, 500); // 500 milliseconds for others
    }

    // Clear the interval after a timeout
    setTimeout(function () {
        clearInterval(imageChangeInterval);
        const restartButton = document.querySelector('#resetButton');
        // restartButton.style.display = 'block';
    }, alphabetTimings[output].timeout);
			

		function playNextMorseCharacter() {
            if (morseIndex < morseCode.length) {
                const symbol = morseCode[morseIndex];
                if (symbol === '.') {
                    playDot(); // Play dot sound
                } else if (symbol === '-') {
                    playDash(); // Play dash sound
                }
                morseIndex++;
            } else {
                morseIndex = 0;
                currentIndex = (currentIndex + 1) % imageSources[output].length;
                image.src = imageSources[output][currentIndex];
				playSpace();
            }
        }

		function playSpace() {
			// Add code here to play a pause or space sound
			// You can adjust the duration as needed
			const oscillator = audioContext.createOscillator();
			oscillator.type = 'sine';
			oscillator.frequency.setValueAtTime(0, audioContext.currentTime); // Frequency 0 for a pause
			oscillator.connect(audioContext.destination);
			oscillator.start();
			oscillator.stop(audioContext.currentTime + 0.2); // Adjust the duration of the space
		}
		

        const morseInterval = setInterval(playNextMorseCharacter, alphabetTimings[output].interval);

        setTimeout(function () {
            clearInterval(morseInterval);
            setTimeout(function () {
                const restartButton = document.querySelector('#resetButton');
                restartButton.style.display = 'block';
            }, 1000);
        }, alphabetTimings[output].timeout);
    } else {
        // If no image found for the selected alphabet, display an error or placeholder message
        imageContainer.textContent = 'Image not found';
        nameContainer.textContent = '';
    }

    // Create a function to play a dot sound
// Create a function to play a sound with a given frequency and duration
function playAudio(frequency, duration) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

// Create a function to play a dot sound
function playDot() {
    playAudio(600, 0.45); // Frequency 1200 Hz, Duration 0.3 seconds
}

// Create a function to play a dash sound
function playDash() {
    playAudio(600, 0.5); // Frequency 800 Hz, Duration 0.6 seconds
}

// function playFDot() {
//     playAudio(500, 0.5); // Custom Frequency and Duration for "F" dot
// }
console.log("hint images are displayed")
// // Define the playFDash function for letter "F"
// function playFDash() {
//     playAudio(700, 0.5); // Custom Frequency and Duration for "F" dash
// }


}

// Define Morse code sequences for each alphabet
function getMorseCodeForAlphabet(alphabet) {
	const morseCodes = {
		A: '.-',     // Morse code for A
		B: '-...',   // Morse code for B
		C: '-.-.',   // Morse code for C
		D: '-..',    // Morse code for D
		E: '.',      // Morse code for E
		F: '..-.',   // Morse code for F
		G: '--.',    // Morse code for G
		H: '....',   // Morse code for H
		I: '..',      // Morse code for I
		J: '.---',   // Morse code for J
		K: '-.-',    // Morse code for K
		L: '.-..',   // Morse code for L
		M: '--',     // Morse code for M
		N: '-.',     // Morse code for N
		O: '---',    // Morse code for O
		P: '.--.',   // Morse code for P
		Q: '--.-',   // Morse code for Q
		R: '.-.',    // Morse code for R
		S: '...',    // Morse code for S
		T: '-',      // Morse code for T
		U: '..-',    // Morse code for U
		V: '...-',   // Morse code for V
		W: '.--',    // Morse code for W
		X: '-..-',   // Morse code for X
		Y: '-.--',   // Morse code for Y
		Z: '--..'    // Morse code for Z
	};
	

    return morseCodes[alphabet] || '';
}












// Function to display images after clicking the "Hint to remember" button
function getOption9() {
    const selectElement = document.querySelector('#alphabetInput');
    const output = selectElement.value.toUpperCase();
    const imageContainer = document.querySelector('.outputImg');
    const nameContainer = document.querySelector('.outputName');
    
	// const playbackRates = {
    //     V: 0.2 // Set a custom playback rate for "V"
    // };

    
}



// Function to reset to Step One
function resetToStepOne() {
	document.getElementById('canvas1').style.visibility = 'visible';
	document.getElementById('canvas2').style.visibility = 'hidden';
	document.getElementById('alphabetInput').value = ''; 
	// Clear the stored user input	
    // clearStepTwo();
	document.getElementById('errorText').textContent = '';

	const selectedAlphabetElement = document.querySelector('.output');
	const morseOutputElement = document.querySelector('.out');
	
	
    selectedAlphabetElement.textContent = '';
	morseOutputElement.textContent='';

	// hideImages();
	console.log("repeat button is clicked")
	hideHintButton();
	clearMorseCode()
	const submitButton = document.getElementById('nextButton1');
    submitButton.disabled = true;
  }


  function hideImages() {
    // Add code here to hide any previously displayed images
    // For example:
    const imageElements = document.querySelectorAll('.outputImg'); // Replace with the actual class used for images
    for (const imageElement of imageElements) {
        imageElement.style.display = 'none';
    }
}

function hideHintButton() {
    const hintButton = document.getElementById('hintButton');
    hintButton.style.display = 'none';

	
}





  function showHintButton() {
    const hintButton = document.getElementById('hintButton');
    hintButton.style.display = 'block';
}

function clearImages() {
    const imageContainer = document.querySelector('.outputImg');
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
}

function clearName() {
	
    const nameContainer = document.querySelector('.outputName');
    nameContainer.textContent = ''; // Clear the text content
}



function clearMorseCode() {
	
    // const morseCodeContainer = document.querySelector('.out2');
    // morseCodeContainer.textContent = ''; // Clear the text content
	document.getElementById("morseOutput").textContent = "";
	console.log("clearMorseCode is clicked")
	
}

  
 // Function to submit Step One

 function submitStepOne() {
	console.log("submitStepOne called");
	clickCount = 0;
	const alphabetInput = document.getElementById('alphabetInput').value;
	clearImages();
	clearName();
	clearMorseCode();

	const restartButton =document.querySelector('#resetButton');
	restartButton.style.display='none';
	
	showHintButton();

	const submitButton = document.getElementById('nextButton1');



	if (alphabetInput.length === 1 && /^[a-zA-Z]+$/.test(alphabetInput)) {
		userInput=alphabetInput;
	  document.getElementById('canvas1').style.visibility = 'hidden';
	  document.getElementById('canvas2').style.visibility = 'visible';

	    // Initialize the audio context here
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
		preloadAudio();
	  morseIndex = 0;
	//   submitButton.disabled = false;
	} else {
	  document.getElementById('errorText').textContent = 'Please enter a single alphabet.';
	  submitButton.disabled = true;
	  return;
	}
	
  }


  

  function initializeAudioContext() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

// Function to preload audio
function preloadAudio() {
    if (!audioContext) {
        initializeAudioContext();
    }

    // Create a silent audio buffer
    const buffer = audioContext.createBuffer(1, 1, audioContext.sampleRate);
    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    source.connect(audioContext.destination);
    source.start();
    source.stop(audioContext.currentTime + 0.001); // Very short silent audio
}
  



// Define your charToMorse dictionary and other variables here
const charToMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..'
};



const audioContext = new (window.AudioContext || window.webkitAudioContext)();



// Define the playAudio function
function playAudio(frequency, duration) {
    const oscillator = audioContext.createOscillator();
	const gainNode = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
	oscillator.connect(gainNode);
    oscillator.connect(audioContext.destination);

	// gainNode.gain.setValueAtTime(0, audioContext.currentTime); // Set initial volume to 0
    oscillator.start();
	// oscillator.start(audioContext.currentTime);
	// gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01); 
	gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}




// Define the playDot function
function playDot() {
    playAudio(600, 0.3); // Frequency 400 Hz, Duration 0.3 seconds for a dot
}

// Define the playDash function
function playDash() {
    playAudio(600, 0.5); // Frequency 400 Hz, Duration 0.6 seconds for a dash
}


function playFDot() {
    playAudio(600, 0.3); // Custom Frequency and Duration for "F" dot
}

// Define the playFDash function for letter "F"
function playFDash() {
    playAudio(600, 0.5); // Custom Frequency and Duration for "F" dash
}



function checkInput() {
	const alphabetInput = document.getElementById('alphabetInput').value;
	const submitButton = document.getElementById('nextButton1');
	
	if (alphabetInput.length === 1 && alphabetInput.match(/[a-zA-Z]/)) {
	  submitButton.disabled = false;
	  
	  
	} else {
	  submitButton.disabled = true;
	}
	
  }
  
  document.addEventListener("DOMContentLoaded", function() {
  var input =document.getElementById("alphabetInput")
  var submitButton = document.getElementById("nextButton1");
  input.addEventListener("keypress",function(event){
	if(event.key === "Enter"){
		event.preventDefault();

		 // Check the content of the input field
		 var alphabetInputValue = input.value;
		 if (alphabetInputValue.length !== 1 || !/^[a-zA-Z]+$/.test(alphabetInputValue)) {
            // Input doesn't meet the criteria, so disable the button
            document.getElementById("nextButton1").disabled = true;
          }
		// document.getElementById("nextButton1").click();
		else {
            // Input meets the criteria, so enable the button
            document.getElementById("nextButton1").disabled = false;
            document.getElementById("nextButton1").click();
          }
	}
  })
  input.addEventListener("input", function() {
	var alphabetInputValue = input.value;
	if (alphabetInputValue.length !== 1 || !/^[a-zA-Z]+$/.test(alphabetInputValue)) {
		// Input doesn't meet the criteria, so disable the button
		document.getElementById("nextButton1").disabled = true;
	  } else {
		document.getElementById("nextButton1").disabled = false;
	}
  });

});

// Define the playMorseSequence function
// let firstCharacter = true;
let isPlaying = false;
let isFirstCharacter = true;
let isAnimationCompleted = true;
let fullMorse = '';
let clickCount = 0; 
let currentCharIndex = 0;
// let isFirstClick = true;
// let isRestarted = false;

async function playMorseSequence() {
	if (isPlaying) return; // Return if Morse code is already playing
    isPlaying = true; // 

    const userInput = document.querySelector('#alphabetInput').value.toUpperCase();
	const morseOutput = document.querySelector('#morseOutput');
	fullMorse = '';
	morseOutput.textContent = '';
	currentCharIndex = 0; // Clear the previous Morse code

	// const firstCharacterDelay = isFirstCharacter ? 600 : 70;
	const characterDelay = isFirstCharacter ? 600 : 600;// Delay for the first character is 600ms or 200ms, then 120ms
	// let fullMorse = ''; 
	let i = currentCharIndex;

	async function animateMorseCode() {
		const char = userInput[i];
		if (char in charToMorse) {
		  const morseChar = charToMorse[char];

        for (let j = 0; j < morseChar.length; j++) {
            const symbol = morseChar[j];
            if (symbol === '.') {

				fullMorse += '.';		
				if (char === 'F' || char === 'f') {
					playFDot(); // Play the custom sound for "F" dot
				} else {
					playDot(); // Play a short sound for dot
				} // Play a short sound for dot with a frequency of 500 Hz
			}	
			
			 else if (symbol === '-') {
					fullMorse += '-'; // Append dash to the Morse code
                    if (char === 'F' || char === 'f') {
                        playFDash(); // Play the custom sound for "F" dash
                    } else {
                        playDash(); // Play a longer sound for dash
                    }
				// Adjust the dash size as needed
           
				 // Play a longer sound for dash with a frequency of 700 Hz
			 }
			 morseOutput.textContent = fullMorse;
			 if (isFirstCharacter) {
				// await sleep(isAnimationCompleted ? 600 : 600);
				// isFirstCharacter = false;
				await sleep(characterDelay);
				
				
			}
			// else {
			// 	await sleep(characterDelay);
			// }
		}
// 			fullMorse += ' '; // Add a space between characters in the full Morse code
//             morseOutput.textContent = fullMorse; // Update the display with the full Morse code
       
//     } else {
//         // Handle invalid characters
//         morseOutput.textContent += 'Invalid character: ' + char;
// 		await sleep(characterDelay);
//     }
		console.log("morsecode playbutton is called")
// }
// isRestarted = true;
// isPlaying = false;
// isAnimationCompleted = true;
// // isFirstCharacter = true;

// }

currentCharIndex = i + 1;
      i++;
      fullMorse += ' '; // Add a space between characters in the full Morse code
      morseOutput.textContent = fullMorse;

      if (i < userInput.length) {
        setTimeout(animateMorseCode, 0); // Start the next character immediately
      } else {
        // Reset the flags and stop playing
        isFirstCharacter = true;
        isPlaying = false;
        currentCharIndex = 0;
		document.getElementById("playButton").disabled = false;
      }
    }
  
	}
  if (clickCount >= 1 ) {
	
	document.getElementById("playButton").disabled = true;

    setTimeout(() => {
      isFirstCharacter = true; // Reset isFirstCharacter after a 100ms delay
      isAnimationCompleted = false;
      morseOutput.innerHTML = `<span class="morse-char-initial">${fullMorse.charAt(0)}</span>${fullMorse.substring(1)}`;
      setTimeout(() => {
        morseOutput.innerHTML = fullMorse;
        document.getElementById("playButton").disabled = false; // Re-enable the play button after 100ms
      }, 32);
    }, 100);
  }
  clickCount++;
  animateMorseCode();
}

// Add an event listener to the Play Morse Code button
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("playButton").addEventListener("click", () => {
  if (!isPlaying) {
    document.getElementById("playButton").disabled = true;
    playMorseSequence();
  }
});
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


