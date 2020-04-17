import { Howl } from 'howler';

// https://freesound.org/people/Robinhood76/sounds/335188/
const doneSound = new Howl({
	src: '/assets/done.mp3',
	autoplay: false,
});

export function done() {
	doneSound.play();
}
