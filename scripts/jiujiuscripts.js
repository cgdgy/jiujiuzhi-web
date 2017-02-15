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
/*dropdown下滑效果*/
var dropdownMark = false;
$(function(){
    $(".jiujiuDropdown-toggle").click(function(){
        if(dropdownMark==false){
            $(this).next().stop().show(200);
            dropdownMark = true;
        }
        else{
            $(this).next().stop().hide(200);
            dropdownMark = false;
        }
    })
});
