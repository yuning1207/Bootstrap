/*
function slide_down()
{
    if(!document.getElementById("nav-2"))
        return false;
    var nav=document.getElementById("nav-2");
    console.log(nav);
    nav.onclick=function()
    {
        var n=0;
        for(n;n<=500;n++){
            (function(i){
                setTimeout(function(){
                    window.scrollTo(0,i);
                },10*i);
            })(n);  
        }
    }
}
addLoadEvent(slide_down);
*/
function slide_down()
{
    if(!document.getElementById("slide"))
        return false;
    var slide=document.getElementById("slide");
    slide.style.transition_duration="3s";
    slide.style.transition_timing_function="ease-in-out";
}
addLoadEvent(slide_down);
