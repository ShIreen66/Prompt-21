// Countdown timer
const countdown = document.querySelector('.countdown');
const launchDate = new Date('2024-10-25T00:00:00'); 

function updateCountdown() {
	const now = new Date();
	const diff = launchDate.getTime() - now.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);

	document.getElementById('days').textContent = days.toString().padStart(2, '0');
	document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
	document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
	document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

	if (diff <= 0) {
		countdown.textContent = 'Launched!';
	}
}

updateCountdown();
setInterval(updateCountdown, 1000);

const buyBasic = document.querySelector('.buy-basic');
const buyPremium = document.querySelector('.buy-premium');

buyBasic.addEventListener('click', () => {
	alert('Basic plan purchased!');
});

buyPremium.addEventListener('click', () => {
	alert('Premium plan purchased!');
});
