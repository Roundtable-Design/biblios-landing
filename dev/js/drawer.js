$(document).ready(function () {
	// He called you out of darkness into his marvellous light. 1 Peter 2:9

	const navbar = $("#main-navbar");
	const mainDrawer = $("#main-drawer");
	const trigger = $("[data-trigger]");

	function scrollCheck() {
		const navbarHeight = parseInt(navbar.css("height"));
		const drawerHeight = parseInt(mainDrawer.css("height"));

		if (drawerHeight + navbarHeight > window.innerHeight)
			mainDrawer.css("bottom", "0");
		else mainDrawer.css("bottom", "auto");
	}

	function toggleDrawer(event) {
		event.stopPropagation();

		const id = $(this).data("trigger");
		const isActive = $(id).hasClass("active");

		if (id === "#main-drawer") {
			$(".nav-icon-wrap").attr(
				"data-state",
				isActive ? "closed" : "open"
			);
		}

		if (!$(id).hasClass("active")) $(window).on("pointerup", closeDrawer);

		$(id).toggleClass("active");

		scrollCheck();
	}

	function closeDrawer(event) {
		event.stopPropagation();

		const { target } = event;

		if (
			!$("nav").has(target).length ||
			$(target).is(".nav-icon-wrap") ||
			$(target).has(".nav-icon-wrap") ||
			$(target).is("[data-trigger]")
		) {
			$("#main-drawer").removeClass("active");
			$(".nav-icon-wrap").attr("data-state", "closed");
			$(window).off("pointerup", closeDrawer);
		}

		scrollCheck();
	}

	trigger.on("pointerup", toggleDrawer);

	$(window).on("scroll", function () {
		if (mainDrawer.css("position") === "fixed") {
			const navbarHeight = parseInt(navbar.css("height")),
				y = scrollY < navbarHeight ? navbarHeight - scrollY : 0;

			mainDrawer.css("top", y);
		} else mainDrawer.attr("style", "");
	});
});
