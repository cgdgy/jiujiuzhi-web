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
var toggleSwitcher=false;/*toggle点击后下滑切换标记*/
var dropdownSwitcher=false;/*dropdown点击后下滑切换标记*/
$(function(){
    $(".navbar-toggle").click(function(){
        var refHeight=($(".navbar-toggle").height())/2;/*获取页面基础网格高度1rem*/
        if(toggleSwitcher==false){
            slideHeight=5*refHeight;
            collapseUpDown($(".jiujiuItem"),true,slideHeight);
            toggleSwitcher=true;
        }
        else{
            slideHeight=($(".collapse").height())+2*refHeight;
            collapseUpDown($(".jiujiuItem"),false,slideHeight);
            toggleSwitcher=false;
            dropdownSwitcher=false;  
        }
    });
    $(".dropdown-toggle").click(function(){
        var refHeight=($(".navbar-toggle").height())/2;
        var sndmenuNum=$(".dropdown-menu>li").length;
        var sndslideHeight=3*refHeight*sndmenuNum+10+2*refHeight;
        if(dropdownSwitcher==false){
            collapseUpDown($(".jiujiuItem"),true,sndslideHeight);
            dropdownSwitcher=true;
        }
        else{
            collapseUpDown($(".jiujiuItem"),false,sndslideHeight);
            dropdownSwitcher=false;            
        }
    })
});
function collapseUpDown(item,updown,slideDistance){
    if(updown==true){
        $(item).stop().animate({marginTop:"+="+slideDistance},200);
    }
    else{
        $(item).stop().animate({marginTop:"-="+slideDistance},200);
    }
}


