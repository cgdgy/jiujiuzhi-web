(function(doc,win){
    var docEI=doc.documentElement;
    resizeEvt='orientationchange'in window?'orientationchange':'resize';
    recalc=function(){
        var clientWidth=docEI.clientWidth;
        if(!clientWidth) return;
        if(clientWidth<420)
        docEI.style.fontSize=20*(clientWidth/375)+'px';
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
}
)(document,window);

(function(){
    $('.carousel').carousel({
        interval:10
    });
})
