let click=document.querySelector('.c-content');
let banner=document.querySelector('.banner');
let clickContent=document.querySelector('.click-carousel .c-content');
click.addEventListener('click',function(e){
    let result=e.target.getAttribute("src");
    banner.style.backgroundImage=`url(${result})`;
   
})