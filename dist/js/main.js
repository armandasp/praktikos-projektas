const pages=document.querySelectorAll('header a')
var pageName=document.querySelector('header h3')
const left=document.querySelector('.fa-angle-left')
const right=document.querySelector('.fa-angle-right')
const square=document.querySelectorAll('.square')
const posts=document.querySelectorAll('.latest-portfolio .portfolio-post')
var gallery=document.querySelector('section.main-text')
var body  = document.querySelector('body');
const expand=document.querySelectorAll('.response2 .expanded h3')
const arrowUp=document.querySelectorAll('.response2 .expanded h3 span')
const expandedText=document.querySelectorAll('.response2 .expanded p')
const pageUp=document.querySelector('body .lastarrow')
const fullPage=document.querySelector('body')

console.log(fullPage)
pageUp.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
    fullPage.style.transition='0.5s';

})
if(body.classList.contains('blog-page')) {
    pageName.textContent='blog'
} else if(body.classList.contains('contact-page')){
    pageName.textContent='Contact'
} else if(body.classList.contains('aboutUs-page')){
    pageName.textContent='about us'
} else if(body.classList.contains('pages-page')){
    pageName.textContent='pages'
} else if(body.classList.contains('portfolio-page')){
    pageName.textContent='portfolio'
}

console.log(gallery)

var photos=["../dist/img/index/index1.jpg", "../dist/img/index/index2.jpg", "../dist/img/index/index3.jpg"]
var current=0;
var current1=2;
square[current].style.background='white'

left.addEventListener('click',function () {
    square[current1].style.background='none'
    current1--;
    if(!photos[current1]) current1=2;
    square[current1].style.background='white';
    gallery.style.background=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photos[current1]})`
    gallery.style.backgroundPosition='center';
    gallery.style.backgroundSize='cover';
    gallery.style.backgroundRepeat='no-repeat';

})

right.addEventListener('click',function () {
    square[current].style.background='none'
    current++;
    if(!photos[current]) current=0;
    square[current].style.background='white';
    gallery.style.background=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photos[current]})`
    gallery.style.backgroundPosition='center';
    gallery.style.backgroundSize='cover';
    gallery.style.backgroundRepeat='no-repeat';
})


expand.forEach(function (exp, x){
    console.log(x)
    expand[x].addEventListener('click', function () {
        if(expandedText[x].style.display!=='block'){
            expandedText[x].style.display='block'
            arrowUp[x].style.transform='rotate(180deg)'
        } else{
            expandedText[x].style.display='none'
            arrowUp[x].style.transform='rotate(0deg)'
        }
    })
})


function initMap(lat=0, lng=0) {
    var uluru = {lat, lng}; //lat:lat, lng:lng
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}