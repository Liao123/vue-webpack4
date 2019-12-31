(function (doc, win) {

    var docEl = doc.documentElement,

        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

        recalc = function () {
            var clientWidth = docEl.clientWidth;

            if (!clientWidth) return;

            if(!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
                docEl.style.fontSize = 100 * (750 / 750) + 'px';

            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
      
        };

    if (!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);
    // win.οnresize=recalc;
    doc.addEventListener('DOMContentLoaded', recalc, false);


})(document, window);