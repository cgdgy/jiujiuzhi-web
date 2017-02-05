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
/*toggle点开后后续元素下滑效果*/
var slideSwitcher=false;/*下滑切换标记*/
$(function(){
    $(".navbar-toggle").click(function(){
        if(slideSwitcher==false){
            collapseUpDown($(".jiujiuItem"),true,$(".collapse"));
            slideSwitcher=true;
        }
        else{
            collapseUpDown($(".jiujiuItem"),false,$(".collapse"));
            slideSwitcher=false;
        }
    })
});
function collapseUpDown(Item,updown,heightEle){
    var slideHeight=$(heightEle).height();
    if(updown==true){
        $(Item).stop().animate({marginTop:"+="+slideHeight},200);
    }
    else{
        $(Item).stop().animate({marginTop:"+="+(-slideHeight)},200);
    }
}


