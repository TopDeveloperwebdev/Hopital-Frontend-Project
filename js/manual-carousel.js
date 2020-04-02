function manualCarousel(containerIndex, itemWidth) {
    console.log('container', containerIndex);
    const slider = $('.carousel-container').eq(containerIndex);
    var manualCarousel = $('.manual-carousel').eq(containerIndex);
    var manualCarouselItems = $('.manual-carousel').eq(containerIndex).children();
    var prev = $('.prev');
    var next = $('.next');
    var ItemsN = manualCarouselItems.length;
    manualCarousel.css('width', itemWidth * manualCarouselItems.length);
    prev.click(function() {
        const walk = itemWidth;
        slider.scrollLeft(slider.scrollLeft() - walk);
    })
    next.click(function() {
        const walk = itemWidth;
        slider.scrollLeft(slider.scrollLeft() + walk);
    })
}

function manualCarouselResponsived(itemWidth) {
    const slider = $('.carousel-container');
    var manualCarousel = $('.manual-carousel');
    var manualCarouselItems = $('.manual-carousel > div');
    var prev = $('.prev');
    var next = $('.carousel-next');
    var ItemsN = manualCarouselItems.length;

    manualCarousel.css('width', itemWidth * manualCarouselItems.length);
    var walk = itemWidth;
    prev.click(function() {
        slider.scrollLeft(slider.scrollLeft() - walk);
    })
    next.click(function() {
        slider.scrollLeft(slider.scrollLeft() + walk);
    })
    window.addEventListener("resize", function() {
        var currentWidth = window.innerWidth;
        walk = currentWidth;
        if (currentWidth <= 768) {
            manualCarouselItems.css('width', currentWidth);
            manualCarousel.attr('style', 'width:' + currentWidth * manualCarouselItems.length + 'px !important;');
            prev.click(function() {
                slider.scrollLeft(slider.scrollLeft() - currentWidth);
            })
            next.click(function() {
                slider.scrollLeft(slider.scrollLeft() + currentWidth);
            })
        } else {
            manualCarousel.attr('style', 'width:' + itemWidth * manualCarouselItems.length + 'px !important;');
        }
    })
    var currentWidth = window.innerWidth;
    walk = currentWidth;
    if (currentWidth <= 768) {
        itemWidth = currentWidth;
        manualCarouselItems.css('width', itemWidth);
        manualCarousel.attr('style', 'width:' + itemWidth * manualCarouselItems.length + 'px !important;');
        prev.click(function() {
            slider.scrollLeft(slider.scrollLeft() - currentWidth);
        })
        next.click(function() {
            slider.scrollLeft(slider.scrollLeft() + currentWidth);
        })
    }
}