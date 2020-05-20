const buyBtn = document.getElementById("buy-btn");
buyBtn.addEventListener("click", () => {
	(async function () {
		const res = await fetch("/cart/add.js", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				items: [
					{
						quantity: 1,
						id: 31462784499735,
					},
				],
			}),
		});
		const { items } = await res.json();
		if (items) {
			window.location.href = "/cart";
		} else {
			console.error("Something went wrong.");
		}
	})();
});

const nav = [
	"About us",
	"Testimonials",
	"How to get one",
	"Let's wrap it up",
].map((title, index) => {
	let b = document.createElement("button");
	b.innerHTML = title;
	b.addEventListener("click", () => {
		$("html, body").animate(
			{
				scrollTop: $(
					document.querySelectorAll(".vb.anchor")[index + 1]
				).offset().top,
			},
			500
		);
	});
	return b;
});

$("#nav-cont").append(nav);
