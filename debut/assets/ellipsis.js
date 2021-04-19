$(document).ready(function () {
	$("[data-toggle-ellipsis]").click(function () {
		const before = $($(this).prev());
		$(this).toggleClass("active");
		before.toggleClass("ellipsis");
	});
});
