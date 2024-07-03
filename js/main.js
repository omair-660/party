$(".open").on("click", function () {
    $("aside").show(800);
    $(".open").css({ "left": "245px", "transition": "1s" });
});

$(".close").on("click", function () {
    $("aside").hide(800);
    $(".open").css({ "left": "15px", "transition": "1.2s" });
});


// $(".song h3").eq(0).on("click", function() {
//     $(".song .togle").eq(0).slideDown(200)
//     $(".song .togle").eq(1).slideDown(200)
//     $(".song .togle").eq(2).slideDown(200)
//     $(".song .togle").eq(3).slideDown(200)
// });
// $(".song h3").each(function (index) {
//     $(this).on("click", function () {
//         $(".song .togle").eq(index).slideToggle(800);
//     });
// });

$(".song h3").on("click", function () {
    const $togle = $(this).next(".togle");

    $togle.slideToggle(800);
    $(".song .togle").not($togle).slideUp(800);
});



$(".home").animate({ width: "100%" }, 1000).animate({ height: "74vh" }, 1000, function () {
    $(".landing .text h2").fadeIn(1000, function () {
        $(".landing .text p").slideDown(1000, function () {
            $(".open").show(1000, function () {
                $(".open span").fadeIn(500)
            })
        })
    })
});



$(document).ready(function () {

    $(".load").fadeOut(1000)
    $("body").css("overflow", "visible")

    const songOffset = $(".song").offset().top;
    const countOffset = $(".count").offset().top;
    const landingHeight = $(".home").height();
    // console.log(landingHeight);
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > songOffset) {
            $(".song .container").show(1000);
        } else {
            $(".song .container").hide(1000);

        }
        if ($(window).scrollTop() > countOffset) {
            $(".count .container").fadeIn(1000, function () {
                $(".count .col-md-3").show(1500)
            });
        } else {
            $(".count .container").hide(1000);
            $(".count .col-md-3").hide(1000)

        }
        if ($(window).scrollTop() > landingHeight) {
            $(".scrollTop").fadeIn(500);
            $(".scrollTop").css({ "display": "flex", "transform": "translateY(-20px)" })
        } else {
            $(".scrollTop").fadeOut(500);
            $(".scrollTop").css({ "transform": "translateY(20px)" })
        }
    });


})

$(".scrollTop").on("click", function () {
    $(window).scrollTop(0)
})

const dateStop = new Date("Jul 26,2024 23:59:59").getTime();


const counter = setInterval(function () {

    let dateNow = new Date().getTime();

    const dateBetween = dateStop - dateNow;


    const days = Math.floor(dateBetween / (1000 * 60 * 60 * 24));
    $(".days").html(days + " D");



    const hours = Math.floor(dateBetween % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    $(".hours").html(hours < 10 ? `0${hours} h` : hours + " h");



    const minuts = Math.floor(dateBetween % (1000 * 60 * 60) / (1000 * 60));
    $(".minuts").html(minuts < 10 ? `0${minuts} m` : minuts + " m");



    const seconds = Math.floor(dateBetween % (1000 * 60) / 1000);
    $(".seconds").html(seconds < 10 ? `0${seconds} s` : seconds + " s");

    if (dateBetween <= 0) {
        clearInterval(counter);
        $(".count .row").html("job fair is day")
    }


}, 1000)


$("aside a").on("click", function () {
    console.log("hello");
})


// $("textarea").on("input", function (e) {
//     const i = 100;
//     $(".char span").html(i--)

//     if (i == 0) {
//         $(".char span").html(0) ;

//     } else if (e.key == "Backspace") {
//         $(".char span").html(i++) ;
//     }
// })


let textarea = $("textarea");
let char = $(".char span");
let i = 100

textarea.on("input", function (e) {
    let inputType = e.originalEvent.inputType;
    if (inputType == "deleteContentBackward") {
        i++
        textarea.removeAttr("readonly");
    } else {
        i--
    }
    char.html(i);
    if (i <= 0) {
        char.html(0);
        if(inputType !== "deleteContentBackward"){
            textarea.attr("readonly" , true)
            $(".er").removeClass("d-none")
        }
    }
})



