const theVoid = document.querySelector('.the-void');



/**
	 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	 */
function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

/**
 * Get a random one of the 16 color pallette.
 * @return string A hex code for a color.
 */
function getRandom16Color(){
	const colorPallette = [];
	// colorPallette.push("#000000");
	colorPallette.push("#FFFFFF");
	colorPallette.push("#C0C0C0");
	colorPallette.push("#808080");
	colorPallette.push("#FF0000");
	colorPallette.push("#00FF00");
	colorPallette.push("#0000FF");
	colorPallette.push("#00FFFF");
	colorPallette.push("#FF00FF");
	colorPallette.push("#FFFF00");
	colorPallette.push("#008080");
	colorPallette.push("#800080");
	colorPallette.push("#808000");
	colorPallette.push("#800000");
	colorPallette.push("#008000");
	colorPallette.push("#000080");

	const randomIndex = getRandomIntInclusive(0,14);

	return colorPallette[randomIndex];
}

/**
 * Get a random integer that is at most 75% of the screen width.
 * 
 * @return int Random integer used for X or left position.
 */
function initX(){
	const x_max = (.75 * window.innerWidth) / 2; // The max distance from the starting point where the star will appear.
	const x_min = 0 - x_max;
	const x = getRandomIntInclusive(x_min , x_max);
	return x;
}

/**
 * Get a random integer that is at most 75% of the screen height.
 * 
 * @return int Random integer used for Y or top position.
 */
function initY(){
	const y_max = (.75 * window.innerHeight) / 2;
	const y_min = 0 - y_max;
	const y = getRandomIntInclusive(y_min, y_max);
	return y;
}

/**
 * Create the <div>s to represent stars and populate the stars array.
 * 
 * @return [] Array of new star <div>s.
 */
function initStars(){
	let new_stars = [];
	const starpoint = document.querySelector('.starpoint');

	starpoint.style.perspective = perspective;

	for( let i=0; i<star_count; i++ ){
		let new_star = document.createElement('div');

		new_star.classList.add('star');
		new_star.innerHTML = `<svg viewBox="0 0 173 142" xmlns="http://www.w3.org/2000/svg"><path style="display:inline;fill:${getRandom16Color()};stroke-width:0" d="M194-32.5c-14 .1-28 3.5-39 9v16.9c9-4.5 16-7.9 28-8.9v40.2c-11 0-20 3-28 7v68c22-13 48-17 83 0V-22.2c-15-7.2-29-10.3-43-10.3zm5 16.1c8 0 14 .8 21 4.5v39.6c-10-4-18-5-27-4v-40c2-.1 4-.1 6-.1zm-16 51.1v39c-10 1-21 4-28 9v-40c9-5 16-7 28-8zm10 0c10 0 18 0 28 4v39c-9-4-18-5-28-4zM152-22.2v14.3L138 .6V-15ZM152-4.7V9.6l-14 8.9v-16zM152 13.5v14l-15 9 1-16zM152 30.5v15l-14 8v-15zM152 48.5v14l-15 8 1-15zM152 66.5v14l-14 8v-15zM152 84.5v14l-14 8.5V91.5ZM134-16.9v13.8l-14 7.4v-14zM134 1.1v13.4l-14 8V8.4ZM134 18.5v13l-14 8v-14zM134 36.5v14l-14 7v-14zM134 53.5v14l-14 8v-14zM134 70.5v14l-14 7v-14zM134 87.5V102l-14 8V95.5ZM117-16.1v12.5l-12 5.8v-12.5ZM117 2v12.5l-12 6V7.8ZM117 18.5v13l-12 6v-13zM117 36.5v12l-12 6v-12zM117 54.5v13l-12 5v-12zM117 71.5v12l-12 6v-12zM117 88.5V102l-12 6V94.5ZM100-14.2V-5l-9.4 4v-8.5zM100 3.6v8.9l-9.5 4V8.3ZM100 20.5v9l-9.4 4v-8zM100 38.5v9l-9.5 4v-9zM100 56.5v9l-9.5 4v-8zM100 73.5v9l-9.4 4v-8zM101 91.5v9.5l-10.3 4v-8.5zM84.2-19.5v7.1l-7.1 4.3v-7.5zM84.3-1.7v7.1l-7.1 4.3V2.2ZM84.3 15.5v7l-7.1 4v-7zM84.3 33.5v7l-7.1 4v-7zM84.3 51.5v7l-7.1 4v-8zM84.5 67.5v8l-7.1 4v-8zM84.4 85.5v7l-7.1 4v-7zM64.9 91.5l-.1-5 5.5-3 .1 5zM65.2 73.5l-.1-5 5.5-3 .1 5zM65 56.5l-.1-5 5.5-3 .1 5zM64.9 38.5l-.1-5 5.5-3 .1 5zM65.1 20.5l-.2-5 5.5-3 .2 5zM65.1 3.4l-.1-5 5.5-3 .1 5zM65-14.7l-.1-5 5.5-3 .1 5z" transform="translate(-64.8 32.5)"/></svg>`;

		document.querySelector('.starpoint').appendChild(new_star);

		new_stars.push(new_star);
	}

	return new_stars;
}

/**
 * Trigger movement on a star by setting CSS values. Will start an infinite setTimeout loop with resetStarPosition().
 * 
 * @param object HTML div element for one of the stars.
 * 
 * @return object Star HTML element with updated CSS properties.
 */
function moveStar(star){
	// Set a random time (in seconds) for the transition, so some stars will be fast and others slow.
	// TODO: Work the value of input.controls-slide--quantity into the transition number(s) here.
	const multiplier = parseInt( document.querySelector('.controls-slide--quantity').value ) * .01;
	const transition_min = 7 * multiplier;
	const transition_max = 30 * multiplier;
	transition_seconds = getRandomIntInclusive(transition_min, transition_max);
	star.style.transition = `transform ${transition_seconds}s linear, opacity ${transition_seconds / 2}s linear`;

	// Replace the Z transform value and set the opacity to triger the transition animation.
	star.style.transform = star.style.transform.replace(', 0px)', `, ${star_z_distance})`);
	star.style.opacity = '1';

	// Reset the star position after a timeout that is delayed for the same time as the above transition.
	setTimeout( () => {
		star = resetStarPosition(star);
	}, transition_seconds*1000 );

	return star;
}

/**
 * Reset a star to the starting CSS values. Will start an infinite setTimeout loop with moveStar().
 * 
 * @param object HTML div element for one of the stars.
 * 
 * @return object Star HTML element with updated CSS properties.
 */
function resetStarPosition(star){
	// Get randomized X and Y position values.
	let x = initX();
	let y = initY();

	// Set the styles to reset this star's position, opacity, and transition state.
	star.style.left = `${x}px`;
	star.style.top = `${y}px`;
	star.style.transform = 'translate3d(0px, 0px, 0px)';
	star.style.opacity = '0'; // '0.5'
	star.style.transition = 'none';

	// Get a random number of miliseconds to delay triggering the movement on this star.
	let star_appear_timeout = getRandomIntInclusive(10, 4000);

	// Move the star after the random delay.
	setTimeout( () => {
		moveStar(star);
	}, star_appear_timeout);

	return star;
}



// Set some starting values.
const star_count = 100; // The number of stars.
const perspective = '15in'; // The perspective distance (for CSS).
const star_z_distance = '16in'; // The distance for the stars to move (for CSS).

// Create the star <div>s.
let stars = initStars();
// console.log('stars = ', stars);

// For each star, set its initial position with resetStarPosition(), which will trigger the inifinite loop with moveStar().
stars.map( (star) => {
	star = resetStarPosition(star);
	return star;
});





/**
 * Controls
 */

const graphicTogglesOnChange = (e) => {
	const radioEl = e.target;
	console.log('radioEl = ', radioEl);
	const acceptableValues = [
		'windows',
		'stars',
	];
	
	if ( acceptableValues.indexOf( radioEl.value ) > -1 ) {
		theVoid.classList.remove( 'graphic--windows', 'graphic--stars' );
		theVoid.classList.add( `graphic--${radioEl.value}` );
	}
};

const graphicToggles = document.querySelectorAll('.controls-radio--graphic');

graphicToggles.forEach( (el) => {
	el.addEventListener('change', graphicTogglesOnChange );
} );



const warpSpeedOnChange = (e) => {
	console.log(e.target.value);

	const multiplier = parseInt( e.target.value ) * 0.01;

	stars.map( (star) => {
		// star = resetStarPosition(star);

		// console.log(star.style.transitionDuration);
		let transitionValues = star.style.transitionDuration.split(', ');
		console.log('transitionValues = ', transitionValues);

		// If the star is currently in motion, it will have 2 items in the transitionValues array. One value for transition duration and one value for transition delay. Otherwise it just has one item with a value of '0s'.
		if ( transitionValues.length > 1 ) {
			transitionValues = transitionValues.map( (timeString) => {
				// console.log('timeString = ', timeString);
				const time = parseInt( timeString.split('s')[0] ) * multiplier;
				// console.log('time = ', time);
				return `${time}s`;
			});
			console.log('new transitionValues = ', transitionValues);
	
			star.style.transitionDuration = transitionValues.join(', ');

			// if ( star.style.opacity === 1 ) {
			// 	star.style.opacity = 0.99;
			// } else {
			// 	star.style.opacity = 1;
			// }

			if ( star.style.transform.indexOf(`, ${star_z_distance})`) > -1 ){
				console.log('update transform');
				star.style.transform = star.style.transform.replace(`, ${star_z_distance})`, `, ${star_z_distance+1})`);
			} else {
				star.style.transform = star.style.transform.replace(`, ${star_z_distance+1})`, `, ${star_z_distance})`);
			}
			

		}

		return star;
	});

};

const warpSpeedSlider = document.querySelector('.controls-slide--quantity');

warpSpeedSlider.addEventListener( 'change', warpSpeedOnChange );
