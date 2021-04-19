// const handleResize = () => {
setInterval(() => {
	$("iframe[data-autoresize]").each(function () {
		const parent = $(this).parent();
		parent.height(parent.width() / (16 / 9));
	});
}, 1000);

// setTimeout(handleResize, 1000);
// };

// $(window).on("resize load ajax-load", handleResize);
// $("iframe").on("load", handleResize);
