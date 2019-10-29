const controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '#section-2', // scene starts when this element is reached
})
    .setClassToggle('#boxer-img', 'fade-in')
    .addTo(controller)
        .addIndicators()


var scene2 = new ScrollMagic.Scene({
    triggerElement: '#section-2'
})
    .setClassToggle('.boxerinfo', 'boxer-fade')
    .addTo(controller)
        .addIndicators({
            indent: 200,
            name: 'test'
        })

        
var scene3 = new ScrollMagic.Scene({
    triggerElement: '#section-3'
})
    .setClassToggle('.classic-heading', 'classic-fade')
    .addTo(controller)
    .addIndicators({
        name: 'yolo'
    })