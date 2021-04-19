const sleep = async (ms) => await new Promise((res) => setTimeout(res, ms));
const interval = 230;

async function revealExtended() {
	const outer = $(this).parent().parent();

	outer.addClass("hide-cards");
	await sleep(interval);
	outer.addClass("extend-container");
	await sleep(interval);
	outer.addClass("show-extended");
}

async function hideExtended() {
	const outer = $(this).parent().parent().parent().parent();

	outer.removeClass("show-extended");
	await sleep(interval);
	outer.removeClass("extend-container");
	await sleep(interval);
	outer.removeClass("hide-cards");
}

$(document).ready(function () {
	$("[data-role='many'] .card").on("click", revealExtended);
	$("[data-role='one'] .exit-wrapper").on("click", hideExtended);
});
