// reset scroll position
window.onbeforeunload = function(){
    window.scrollTo(0,0);
}

// All the rest
document.addEventListener('DOMContentLoaded', function(){

    // Fetch and then rest the content of the logo
    var logo = document.querySelector('.logo');

    // Array contenente
    var titoli = [ 'Rhino', 'SketchUp'];
    var titolo = titoli[Math.floor(Math.random()*titoli.length)];

    // Inizializzo il typewriter
    var typewriter = require('typewriter');
    var tw = typewriter(document.querySelector('.logo')).withAccuracy(100)
                                                        .withMinimumSpeed(13)
                                                        .withMaximumSpeed(18)
                                                        .build();

    tw.wait(500)//.type(' ',function(){
    //    document.querySelector('#sutd').classList.add('active');
    //}).wait(1000)
        .type('Hacken Li | ')
        .wait(200)
        .type(' Architect at Woods Bagot ')
        .wait(900)
        .type(' | ' + titolo  , function(){
            document.querySelector('body').classList.add('active');
            document.querySelector('.content').classList.add('active');
        });

});

