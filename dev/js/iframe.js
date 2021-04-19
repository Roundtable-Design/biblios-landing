$(window).on("resize load", () => {
	$("iframe").each(function () {
		const parent = $(this).parent();
		parent.height(parent.width() / (16 / 9));
	});
});
