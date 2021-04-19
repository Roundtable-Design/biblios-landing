$(document).ready(function () {
	$("[data-target]").on("click", function () {
		const target = $(this).attr("data-target");

		$("html, body").animate(
			{
				scrollTop: $(target).offset().top,
			},
			1000
		);
	});
});
