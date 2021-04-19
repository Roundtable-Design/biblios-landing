$(document).ready(function () {
	// He called you out of darkness into his marvellous light. 1 Peter 2:9

	const navbar = $("#main-navbar");
	const mainDrawer = $("#main-drawer");
	const trigger = $("[data-trigger]");

	function scrollCheck() {
		const navbarHeight = parseInt(navbar.css("height"));

		mainDrawer.css({
			top: navbarHeight,
			bottom: "0",
			overflowY: "scroll",
			position: "absolute",
		});
	}

	function toggleDrawer(event) {
		event.stopPropagation();

		console.log(event);

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

	const shouldClose = (target) => {
		console.log(
			!$("nav").has(target).length,
			$(target).is(".nav-icon-wrap"),
			$(".nav-icon-wrap").has(target).length
		);

		return (
			!$("nav").has(target).length ||
			$(target).is(".nav-icon-wrap") ||
			$(".nav-icon-wrap").has(target).length
		);
	};

	function closeDrawer(event) {
		event.stopPropagation();

		const { target } = event;

		if (shouldClose(target)) {
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
