
		// Get the end time from local storage or set a new one
		let storedEndTime = localStorage.getItem('endTime');
		if (!storedEndTime) {
			// If no end time is stored, set a new one 60 days from now
			storedEndTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
			localStorage.setItem('endTime', storedEndTime);
		}




		// function changeTheme() {
		// 	var themeName = document.getElementById('themeSelect').value;
		// 	document.body.className = themeName;
		// 	document.getElementById('container').className = themeName;
		//   }
		  
		  
		  function changeTheme() {
			var themeName = document.getElementById('themeSelect').value;
			document.body.className = themeName;
			// document.getElementById('container').className = themeName;
			
			var image = document.getElementById('top-img');
			switch(themeName) {
			  case 'theme1':
				image.src = ' ece4.jpg';
				break;
			  case 'theme2':
				image.src = 'ece 5.jpeg';
				break;
			  case 'theme3':
				image.src = ' ece8.jpg';
				break;
			  case 'theme4':
				image.src = 'ece00.jpg';
				break;
			  case 'theme5':
				image.src = 'edc7.jpg';
				break;
			  default:
				image.src = 'ece4.jpg';
			}
		  }



// Get a reference to the search wrapper element
const searchWrapper = document.querySelector('.search-container');

// Add a click event listener to the document object
document.addEventListener('click', function(event) {
  // Check if the click occurred inside or outside the search wrapper
  if (!searchWrapper.contains(event.target)) {
    // If the click occurred outside the search wrapper, hide the suggestion list
    const suggestionList = searchWrapper.querySelector('.suggestions');
    suggestionList.style.display = 'none';
  }
});






		  const searchInput = document.getElementById('search-input');
		  const suggestions = document.getElementById('suggestions');
		  
		   
		  const suggestionData = [
			{ name: 'probability theory and stochastic processes', link: 'ptsp-p.html' },

			{ name: 'electronic device and circuits', link: 'edc-p.html' },

			{ name: 'digital system design', link: 'dsd-p.html'},

			{ name: 'network analysis and transmission lines', link: 'natl-p.html' },

			{ name: 'signals and systems', link: 'ss-p.html' },

			{ name: 'basic simulation lab', link: 'bs-lab-p.html' },

			{ name: 'digital system design lab', link: 'dsd-lab-p.html' },

			{ name: 'electronic device and circuits lab', link: 'edc-lab-p.html' },





			{ name: 'probability and random variable notes ', link: 'ptspu1notes/ptsp-u1-notes.html' },
			{ name: 'probability and random variable numerical problems ', link: '#' },
			{ name: 'probability and random variable PAQ ', link: 'ptsppyq/ptsp-u1-paq.html' },

			{ name: 'Operations On Single & Multiple Random Variables – Expectations notes ', link: 'PTSP unit 2 notes/ptsp-u2-notes.html' },
			{ name: 'Operations On Single & Multiple Random Variables – Expectations numerical problems ', link: '#' },
			{ name: 'Operations On Single & Multiple Random Variables – Expectations PAQ ', link: 'ptsppyq/ptsp-u1-paq.html' },

			{ name: 'Random Processes - Temporal Characteristics notes ', link: 'PTSP unit 3 notes/ptsp-u3-notes.html' },
			{ name: 'Random Processes - Temporal Characteristics numerical problems ', link: '#' },
			{ name: 'Random Processes - Temporal Characteristics PAQ ', link: 'ptsppyq/ptsp-u1-paq.html' },

			{ name: 'Random Processes – Spectral Characteristics notes ', link: 'ptspu4notes/ptsp-u4-notes.html' },
			{ name: 'Random Processes – Spectral Characteristics numerical problems ', link: '#' },
			{ name: 'Random Processes – Spectral Characteristics PAQ ', link: 'ptsppyq/ptsp-u1-paq.html' },

			{ name: 'Noise Sources & Information Theory notes ', link: 'ptspu5notes/ptsp-u5-notes.html' },
			{ name: 'Noise Sources & Information Theory numerical problems ', link: '#' },
			{ name: 'Noise Sources & Information Theory PAQ ', link: 'ptsppyq/ptsp-u1-paq.html' },





			{ name: 'Diode and Applications notes ', link: 'edcu1notes/edc-u1-notes.html' },
			{ name: 'Diode and Applications numerical problems ', link: '#' },
			{ name: 'Diode and Applications PAQ ', link: 'edcpyq/edc-u1-paq.html' },

			{ name: 'Bipolar Junction Transistor (BJT) notes ', link: 'edcu2notes/edc-u2-notes.html' },
			{ name: 'Bipolar Junction Transistor (BJT) numerical problems ', link: '#' },
			{ name: 'Bipolar Junction Transistor (BJT) PAQ ', link: 'edcpyq/edc-u1-paq.html' },

			{ name: 'Junction Field Effect Transistor (FET) notes ', link: 'edcu3notes/edc-u3-notes.html' },
			{ name: 'Junction Field Effect Transistor (FET) numerical problems ', link: '#' },
			{ name: 'Junction Field Effect Transistor (FET) PAQ ', link: 'edcpyq/edc-u1-paq.html' },

			{ name: 'Analysis and Design of Small Signal Low Frequency BJT Amplifiers notes ', link: 'edcu4notes/edc-u4-notes.html' },
			{ name: 'Analysis and Design of Small Signal Low Frequency BJT Amplifiers numerical problems ', link: '#' },
			{ name: 'Analysis and Design of Small Signal Low Frequency BJT Amplifiers PAQ ', link: 'edcpyq/edc-u1-paq.html' },

			{ name: 'FET Amplifiers notes ', link: 'edcu5notes/edc-u5-notes.html' },
			{ name: 'FET Amplifiers numerical problems ', link: '#' },
			{ name: 'FET Amplifiers PAQ ', link: 'edcpyq/edc-u1-paq.html' },



			{ name: 'number systems notes ', link: 'dsd material/dsd unit 1 notes/dsd-u1-notes.html' },
			{ name: 'number systems numerical problems ', link: '#' },
			{ name: 'number systems PAQ ', link: 'dsdpyq/dsd-u1-paq.html' },

			{ name: 'Minimization of Boolean functions notes ', link: 'dsdu2notes/dsd-u2-notes.html' },
			{ name: 'Minimization of Boolean functions numerical problems ', link: '#' },
			{ name: 'Minimization of Boolean functions PAQ ', link: 'dsdpyq/dsd-u1-paq.html' },

			{ name: 'Sequential Circuits Fundamentals notes ', link: 'dsdu3notes/dsd-u3-notes.html' },
			{ name: 'Sequential Circuits Fundamentals numerical problems ', link: '#' },
			{ name: 'Sequential Circuits Fundamentals PAQ ', link: 'dsdpyq/dsd-u1-paq.html' },

			{ name: 'Sequential Machines notes ', link: 'dsdu4notes/dsd-u4-notes.html' },
			{ name: 'Sequential Machines numerical problems ', link: '#' },
			{ name: 'Sequential Machines PAQ ', link: 'dsdpyq/dsd-u1-paq.html' },

			{ name: 'Realization of Logic Gates Using Diodes & Transistors notes ', link: 'dsdu5notes/dsd-u5-notes.html' },
			{ name: 'Realization of Logic Gates Using Diodes & Transistors numerical problems ', link: '#' },
			{ name: 'Realization of Logic Gates Using Diodes & Transistors PAQ ', link: 'dsdpyq/dsd-u1-paq.html' },



			{ name: 'Signal Analysis notes ', link: 'ssu1notes/ss-u1-notes.html' },
			{ name: 'Signal Analysis numerical problems ', link: '#' },
			{ name: 'Signal Analysis PAQ ', link: 'sspyq/ss-u1-paq.html' },

			{ name: 'Fourier Series notes ', link: 'ssu2notes/ss-u2-notes.html' },
			{ name: 'Fourier Series numerical problems ', link: '#' },
			{ name: 'Fourier Series PAQ ', link: 'sspyq/ss-u1-paq.html' },

			{ name: 'Signal Transmission through Linear Systems notes ', link: 'ssu3notes/ss-u3-notes.html' },
			{ name: 'Signal Transmission through Linear Systems numerical problems ', link: '#' },
			{ name: 'Signal Transmission through Linear Systems PAQ ', link: 'sspyq/ss-u1-paq.html' },

			{ name: 'Laplace Transforms notes ', link: 'ssu4notes/ss-u4-notes.html' },
			{ name: 'Laplace Transforms numerical problems ', link: '#' },
			{ name: 'Laplace Transforms PAQ ', link: 'sspyq/ss-u1-paq.html' },

			{ name: 'Sampling theorem notes ', link: 'ssu5notes/ss-u5-notes.html' },
			{ name: 'Sampling theorem numerical problems ', link: '#' },
			{ name: 'Sampling theorem PAQ ', link: 'sspyq/ss-u1-paq.html' },



			{ name: 'Network Topology notes ', link: 'natl material/natl unit 1 notes/natl-u1-notes.html' },
			{ name: 'Network Topology numerical problems ', link: '#' },
			{ name: 'Network Topology PAQ ', link: 'natlpyq/natl-u1-paq.html' },

			{ name: 'Transient analysis of RLC Circuits notes ', link: 'natl material/natl unit2 notes/natl-u2-notes.html' },
			{ name: 'Transient analysis of RLC Circuits numerical problems ', link: '#' },
			{ name: 'Transient analysis of RLC Circuits PAQ ', link: 'natlpyq/natl-u1-paq.html' },

			{ name: 'Two Port Network notes ', link: 'natl material/natl u3 notes/natl-u3-notes.html' },
			{ name: 'Two Port Network numerical problems ', link: '#' },
			{ name: 'Two Port Network PAQ ', link: 'natlpyq/natl-u1-paq.html' },

			{ name: 'Transmission lines I notes ', link: 'natl material/NATLU4NOTES/natl-u4-notes.html' },
			{ name: 'Transmission lines I numerical problems ', link: '#' },
			{ name: 'Transmission lines I PAQ ', link: 'natlpyq/natl-u1-paq.html' },

			{ name: 'Transmission lines II notes ', link: 'natl material/natlu5notes/natl-u5-notes.html' },
			{ name: 'Transmission lines II numerical problems ', link: '#' },
			{ name: 'Transmission lines II PAQ ', link: 'natlpyq/natl-u1-paq.html' },



			{ name: 'Basic Simulation lab experiment 1 ', link: 'bs lab material/bs lab 1/bs-exp1.html' },
			{ name: 'Basic Simulation lab experiment 2 ', link: 'bs lab material/bs lab 2/bs-exp2.html' },
			{ name: 'Basic Simulation lab experiment 3 ', link: 'bs lab material/bs lab 3/bs-exp3.html' },
			{ name: 'Basic Simulation lab experiment 4 ', link: 'bs lab material/bs lab 4/bs-exp4.html' },
			{ name: 'Basic Simulation lab experiment 5 ', link: 'bs lab material/bs lab 5/bs-exp5.html' },
			{ name: 'Basic Simulation lab experiment 6 ', link: 'bs lab material/bs lab 6/bs-exp6.html' },
			{ name: 'Basic Simulation lab experiment 7 ', link: 'bs lab material/bs lab 7/bs-exp7.html' },
			{ name: 'Basic Simulation lab experiment 8 ', link: 'bs lab material/bs lab 8/bs-exp8.html' },
			{ name: 'Basic Simulation lab experiment 9 ', link: 'bs lab material/bs lab 9/bs-exp9.html' },
			{ name: 'Basic Simulation lab experiment 10 ', link: 'bs lab material/bs lab 10/bs-exp10.html' },
			{ name: 'Basic Simulation lab experiment 11 ', link: 'bs lab material/bs lab 11/bs-exp11.html' },
			{ name: 'Basic Simulation lab experiment 12 ', link: 'bs lab material/bs lab 12/bs-exp12.html' },
			{ name: 'Basic Simulation lab experiment 13 ', link: 'bs lab material/bs lab 13/bs-exp13.html' },
			{ name: 'Basic Simulation lab experiment 14 ', link: 'bs lab material/bs lab 14/bs-exp14.html' },
			{ name: 'Basic Simulation lab experiment 15 ', link: 'bs lab material/bs lab 15/bs-exp15.html' },



			{ name: 'digital system design lab experiment 1 ', link: 'exp 1/dsd-exp1.html' },
			{ name: 'digital system design lab experiment 2 ', link: 'exp 2/dsd-exp2.html' },
			{ name: 'digital system design lab experiment 3 ', link: 'exp 3/dsd-exp3.html' },
			{ name: 'digital system design lab experiment 4 ', link: 'exp 4/dsd-exp4.html' },
			{ name: 'digital system design lab experiment 5 ', link: 'exp 5/dsd-exp5.html' },
			{ name: 'digital system design lab experiment 6 ', link: 'exp 6/dsd-exp6.html' },
			{ name: 'digital system design lab experiment 7 ', link: 'exp 7/dsd-exp7.html' },
			{ name: 'digital system design lab experiment 8 ', link: 'exp 8/dsd-exp8.html' },
			{ name: 'digital system design lab experiment 9 ', link: 'exp 9/dsd-exp9.html' },
			{ name: 'digital system design lab experiment 10 ', link: 'exp 10/dsd-exp10.html' },
			{ name: 'digital system design lab experiment 11 ', link: 'exp 11/dsd-exp11.html' },
			{ name: 'digital system design lab experiment 12 ', link: 'exp 12/dsd-exp12.html' },
			{ name: 'digital system design lab experiment 13 ', link: 'exp 13/dsd-exp-13.html' },
			{ name: 'digital system design lab experiment 14 ', link: 'exp 14/dsd-exp14.html' },



			{ name: 'electronic device and circuits lab experiment 1', link: 'edc lab material/edc-1st exp/edc-exp1.html' },
			{ name: 'electronic device and circuits lab experiment 2', link: 'edc lab material/edc-2nd-exp/edc-exp2.html' },
			{ name: 'electronic device and circuits lab experiment 3', link: 'edc lab material/edc-3rd-exp/edc-exp3.html' },
			{ name: 'electronic device and circuits lab experiment 4', link: 'edc lab material/edc-4th-exp/edc-exp4.html' },
			{ name: 'electronic device and circuits lab experiment 5', link: 'edc lab material/edc-5th-exp/edc-exp5.html' },
			{ name: 'electronic device and circuits lab experiment 6', link: 'edc lab material/edc-6th-exp/edc-exp6.html' },
			{ name: 'electronic device and circuits lab experiment 7', link: 'edc lab material/edc-7th-exp/edc-exp7.html' },
			{ name: 'electronic device and circuits lab experiment 8', link: 'edc lab material/edc-8th-exp/edc-exp8.html' },
			{ name: 'electronic device and circuits lab experiment 9', link: 'edc lab material/edc-9th-exp/edc-exp9.html' },
			{ name: 'electronic device and circuits lab experiment 10', link: 'edc lab material/edc-10th-exp/edc-exp10.html' },



			 			


			 
             
		  ];
		  
		  // Function to display suggestions
		  function showSuggestions() {
			// Clear any previous suggestions
			suggestions.innerHTML = '';
			
			// Get search query
			const query = searchInput.value.toLowerCase();
			
			// Filter suggestion data based on query
			const filteredData = suggestionData.filter((item) => {
			  return item.name.toLowerCase().includes(query);
			});
			
			// Create suggestion list items and add to suggestions ul
			filteredData.forEach((item) => {
			  const li = document.createElement('li');
			  li.textContent = item.name;
			  li.addEventListener('click', () => {
				window.location.href = item.link;
			  });
			  suggestions.appendChild(li);
			});
			
			// Show suggestions if any
			if (filteredData.length > 0) {
			  suggestions.style.display = 'block';
			} else {
			  suggestions.style.display = 'none';
			}
		  }
		  
		  // Event listener for search input
		  searchInput.addEventListener('input', showSuggestions);
		  













		// Update the timer every second
		// let timerDiv = document.getElementById('timer');
		let day = document.getElementById('days');
		let hour = document.getElementById('hour');
		let min = document.getElementById('min');
		let sec = document.getElementById('sec');
		let intervalId = setInterval(function() {
			// Calculate the remaining time
			let timeRemaining = storedEndTime - new Date().getTime();

			// If the timer has expired, stop the timer and display a message
			if (timeRemaining <= 0) {
				clearInterval(intervalId);
				timerDiv.innerHTML = "All the Best for your Exam!!!";
				return;
			}

			// Calculate the days, hours, minutes, and seconds remaining
			let days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
			let hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
			let minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
			let seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

			// Build the time remaining string
			// let timeRemainingStr = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
            day.innerHTML = days;
            hour.innerHTML = hours;
            min.innerHTML = minutes;
            sec.innerHTML = seconds;
			// Display the time remaining
			// timerDiv.innerHTML = "Time remaining: " + timeRemainingStr;
		}, 1000);
		setInterval(() => {
			const blink  = document.getElementById('scd');
			blink.style.visibility = "visible";
			 
		}, 1000);
		setInterval(() => {
			const blink  = document.getElementById('scd');
			blink.style.visibility = "hidden";
		}, 2000);
		 
	 
