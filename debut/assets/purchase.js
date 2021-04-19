$(".purchase-button").on("click", () => {
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
