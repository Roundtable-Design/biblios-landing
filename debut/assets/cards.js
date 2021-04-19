const sleep = async (ms) => await new Promise((res) => setTimeout(res, ms));
const interval = 230;

async function revealExtended() {
	if (window.innerWidth > 1000) {
		const parent = $(this).parent();
		const target = $($(this).attr("data-expand-to"));

		parent.addClass("hide");
		target.attr("style", "");
		target.css({
			left: parent.offset().left,
		});
		target.addClass("show");
	}
}

async function hideExtended() {
	const parent = $(this).parent();
	const cards = $(parent.attr("data-expand-from"));

	parent.removeClass("show");
	await sleep(interval);
	cards.removeClass("hide");
	parent.attr("style", "display: none");
}

$(document).ready(function () {
	$("[data-expand-to]").on("click", revealExtended);
	$(".expanded-card .exit-wrapper").on("click", hideExtended);
});
