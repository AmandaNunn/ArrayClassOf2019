var App = (function(d, w) {

    var public = {};

    public.init = function () {
        console.log('App Initialized');
        sizeCanvas();
        drawRuler();
        updateWidth();
        onResize();
    }

    function sizeCanvas() {
        var canvas = d.getElementById('ruler');
            canvas.width = w.innerWidth;;
    }

    function drawRuler() {
        var width = screen.width,
            pointer = 0,
            canvas = d.getElementById('ruler'),
            context = canvas.getContext('2d');

        while (pointer < width) {
            var lineLen = pointer % 100 === 0 ? 10 : 5;
            context.beginPath();
            context.moveTo(pointer, 0);
            context.lineTo(pointer, lineLen);
            context.stroke();
            pointer += 25;
        }
    }

    function updateWidth() {
        d.getElementById('width').innerText = w.innerWidth + 'px';
    }

    function onResize() {
        w.addEventListener('resize', () => {
            sizeCanvas();
            drawRuler();
            updateWidth();
        });
    }

    return public;

}(document, window));

document.addEventListener('DOMContentLoaded', () => App.init());