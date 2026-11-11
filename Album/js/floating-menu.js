(function () {
    "use strict";

    function initializeFloatingMenus() {
        var menus = document.querySelectorAll(".floating-menu");

        Array.prototype.forEach.call(menus, function (menu) {
            if (menu.getAttribute("data-floating-menu-ready") === "true") {
                return;
            }

            var toggle = menu.querySelector(".menu-toggle");
            var goTop = menu.querySelector(".gotop-fixed");

            menu.setAttribute("data-floating-menu-ready", "true");

            if (toggle) {
                toggle.setAttribute("aria-expanded", "false");
                toggle.addEventListener("click", function () {
                    if (window.innerWidth <= 767) {
                        var isActive = menu.classList.toggle("active");
                        toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
                    }
                });
            }

            if (goTop) {
                goTop.addEventListener("click", function (event) {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeFloatingMenus);
    } else {
        initializeFloatingMenus();
    }
}());
