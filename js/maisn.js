! function (t) {
	"use strict";
	jQuery(document).on("ready", function () {
		t(window).on("scroll", function () {
			t(this).scrollTop() > 100 ? t(".navbar-light").addClass("menu-shrink") : t(".navbar-light").removeClass("menu-shrink")
		}), t(".navbar-nav li a, .navbar-brand a, footer a, .meni_icons a").on("click", function (e) {
			var i = t(this);
			t("html, body").stop().animate({
				scrollTop: t(i.attr("href")).offset().top - 60
			}, 900), e.preventDefault()
		});
	})
}(jQuery);