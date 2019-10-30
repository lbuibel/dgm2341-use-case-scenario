// selector string as first argument
var colc = new Colcade( '.grid', {
  columns: '.grid-col',
  items: '.grid-item'
});

/////////////////////////////////////////////

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

var scene4 = new ScrollMagic.Scene({
    triggerElement: '.classic-heading',
        triggerHook: "onLeave",

})
    .setClassToggle('.section4-heading', 'section4-heading-fade')
    .addTo(controller)
    .addIndicators({
        name: 'new'
    })

var scene5 = new ScrollMagic.Scene({
    triggerElement: '.classic-heading',
        triggerHook: "onLeave",
})
    .setClassToggle('.section4-text', 'section4-text-fade')
    .addTo(controller)
    .addIndicators({
        name: 'new new'
    })