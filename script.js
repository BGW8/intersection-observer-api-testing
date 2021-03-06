const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("show", entry.isIntersecting);
		});
		console.log(entries);
	},
	{
		threshold: 1,
	}
);

cards.forEach((card) => {
	observer.observe(card);
});
