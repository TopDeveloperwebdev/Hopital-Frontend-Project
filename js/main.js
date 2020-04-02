var manyShow = 10;
const Inc = 10;
$(document).ready(function() {

    /// nav button on header 
    $('.open-nav-btn').click(function() {
        $('.header-marker').addClass('expand-header-marker');
        $('.close-nav-btn').css("display", "block");
        $('.open-nav-btn').css("display", "none");
    });
    $('.close-nav-btn').click(function() {
        $('.header-marker').removeClass('expand-header-marker');
        $('.close-nav-btn').css("display", "none");
        $('.open-nav-btn').css("display", "block");
    });

    // image Zoon button 
    $('.zoomin').click(function() {
        var myImg = document.getElementsByClassName("news-paper")[0];
        var currWidth = myImg.clientWidth;
        if (currWidth == 2500) return false;
        else {
            myImg.style.width = (currWidth + 100) + "px";
        }
    })

    $('.zoomout').click(function() {
        var myImg = document.getElementsByClassName("news-paper")[0];
        var currWidth = myImg.clientWidth;
        if (currWidth == 100) return false;
        else {
            myImg.style.width = (currWidth - 100) + "px";
        }
    })

    /* overflow-x scroll script */

    const slider = document.querySelector('.overflow-x');
    if (slider) {
        slider.addEventListener('touchmove', (e) => {
            startX = e.changedTouches[0].pageX;
            slider.scrollLeft = startX;
        });
    }


    /* Maual Carousel script section */

    var carouselContainer = document.querySelector('.active-carousel .carousel-container');

    let isDown = false;
    let startX;
    let scrollLeft;

    carouselContainer.addEventListener('mousedown', (e) => {

        isDown = true;
        carouselContainer.classList.add('active');
        startX = e.pageX - carouselContainer.offsetLeft;
        scrollLeft = carouselContainer.scrollLeft;
    });
    carouselContainer.addEventListener('mouseleave', () => {
        isDown = false;
        carouselContainer.classList.remove('active');
    });
    carouselContainer.addEventListener('mouseup', () => {
        isDown = false;
        carouselContainer.classList.remove('active');
    });
    carouselContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselContainer.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carouselContainer.scrollLeft = scrollLeft - walk;
    });

    /* Multi-carousel-TV-item action script */
    $('.manual-carousel .TV-item').eq(2).find('div').css('box-shadow', 'none');
    $('.manual-carousel .TV-item div').click(function() {
            $('.manual-carousel .TV-item div').removeAttr('style');
            $(this).css('box-shadow', 'none');

        })
        /* More Load Script section */
    var manyShow = 10;
    const Inc = 10;
    var activeCarousel = $('.active-carousel .manual-carousel');
    var carouselItems = activeCarousel.children();
    var moreLoad = $('.active-carousel .moreLoad');
    var upMove = $('.active-carousel .UpMove');
    moreLoad.click(function() {
        if (carouselItems.length > manyShow + Inc) {
            for (let i = manyShow; i < manyShow + Inc; i++) {
                carouselItems.eq(i).css("display", "flex");
            }
            manyShow += Inc;
            window.scroll({
                top: $(document).height(),
                behavior: 'smooth'
            });
        } else {
            carouselItems.css({
                "display": "flex",
            });

            upMove.css("display", "block");
            moreLoad.css("display", "none");
            window.scroll({
                top: $(document).height(),
                behavior: 'smooth'
            });
            manyShow = carouselItems.length;
        }
    })
    upMove.click(function() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        manyShow = Inc;
    })
    var currentWidth = window.innerWidth;
    if (currentWidth <= 768 && $('.active-carousel .moreLoad').length) {
        carouselItems.css("display", "none");
        for (let i = 0; i < 10; i++) {
            carouselItems.eq(i).css("display", "flex");
        }
    }
    window.addEventListener("resize", function() {
        var currentWidth = window.innerWidth;
        if (currentWidth <= 768 && moreLoad.length) {
            carouselItems.css("display", "none");
            for (let i = 0; i < manyShow; i++) {
                carouselItems.eq(i).css("display", "flex");
            }

        } else {
            carouselItems.removeAttr("style");
            upMove.removeAttr("style");
            moreLoad.css("display", "none");
        }
    })
})

function CarouselScroll() {
    var carouselContainer = document.querySelector('.active-carousel .carousel-container');
    let isDown = false;
    let startX;
    let scrollLeft;
    console.log('mouseDown', carouselContainer)
    carouselContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        carouselContainer.classList.add('active');
        startX = e.pageX - carouselContainer.offsetLeft;
        scrollLeft = carouselContainer.scrollLeft;
    });
    carouselContainer.addEventListener('mouseleave', () => {
        isDown = false;
        carouselContainer.classList.remove('active');
    });
    carouselContainer.addEventListener('mouseup', () => {
        isDown = false;
        carouselContainer.classList.remove('active');
    });
    carouselContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselContainer.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carouselContainer.scrollLeft = scrollLeft - walk;
    });
}

function LoadMore() {
    /* More Load Script section */
    var manyShow = 10;
    const Inc = 10;
    var activeCarousel = $('.active-carousel .manual-carousel');
    var carouselItems = activeCarousel.children();
    var moreLoad = $('.active-carousel .moreLoad');
    var upMove = $('.active-carousel .UpMove');
    moreLoad.click(function() {
        if (carouselItems.length > manyShow + Inc) {
            for (let i = manyShow; i < manyShow + Inc; i++) {
                carouselItems.eq(i).css("display", "flex");
            }
            manyShow += Inc;
            window.scroll({
                top: $(document).height(),
                behavior: 'smooth'
            });
        } else {
            carouselItems.css({
                "display": "flex",
            });

            upMove.css("display", "block");
            moreLoad.css("display", "none");
            window.scroll({
                top: $(document).height(),
                behavior: 'smooth'
            });
            manyShow = carouselItems.length;
        }
    })
    upMove.click(function() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        manyShow = Inc;
    })
    var currentWidth = window.innerWidth;
    if (currentWidth <= 768 && $('.active-carousel .moreLoad').length) {
        carouselItems.css("display", "none");
        for (let i = 0; i < 10; i++) {
            carouselItems.eq(i).css("display", "flex");
        }
    }
    window.addEventListener("resize", function() {
        var currentWidth = window.innerWidth;
        if (currentWidth <= 768 && moreLoad.length) {
            carouselItems.css("display", "none");
            for (let i = 0; i < manyShow; i++) {
                carouselItems.eq(i).css("display", "flex");
            }

        } else {
            carouselItems.removeAttr("style");
            upMove.removeAttr("style");
            moreLoad.css("display", "none");
        }
    })
}