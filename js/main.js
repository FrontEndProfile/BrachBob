var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: true,
});


var swiper = new Swiper(".swipper-home", {
    // Default parameters
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        994: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // when window width is >= 640px
        1199: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        // when window width is >= 640px
        1329: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },


});


function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginright = "350px";
    document.getElementById("body").style.overflow = "hidden";
    document.body.style.backgroundColor = "#ffffff";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("body").style.overflow = "scroll";
    document.body.style.backgroundColor = "white";
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});



$(document).ready(function() {
    $(window).on("load scroll", function() {
        var parallaxElement = $(".parallax_scroll"),
            parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function() {
            for (var i = 0; i < parallaxQuantity; i++) {
                var currentElement = parallaxElement.eq(i),
                    windowTop = $(window).scrollTop(),
                    elementTop = currentElement.offset().top,
                    elementHeight = currentElement.height(),
                    viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                    scrolled = windowTop - elementTop + viewPortHeight;
                currentElement.css({
                    transform: "translate3d( 0," + scrolled * -0.15 + "px, 0)"
                });
            }
        });
    });
});