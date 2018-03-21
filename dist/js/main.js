const pages=document.querySelectorAll('header a')
var pageName=document.querySelector('header h3')
const left=document.querySelector('.fa-angle-left')
const right=document.querySelector('.fa-angle-right')
const square=document.querySelectorAll('.square')
const posts=document.querySelectorAll('.latest-portfolio .portfolio-post')
var gallery=document.querySelector('section.main-text')
var body  = document.querySelector('body');

console.log(posts)
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

var photos=["../img/index/index1.jpg", "../img/index/index2.jpg", "../img/index/index3.jpg"]
var current=0;
var current1=2;
square[current].style.background='white'

left.addEventListener('click',function () {
    square[current1].style.background='none'
    current1--;
    if(!photos[current1]) current1=2;
    square[current1].style.background='white';
    gallery.style.backgroundImage=`url(${photos[current1]})`
})



//(left.addEventListener('click', function(){
//circle[current1].style.background='white'
//current1--;
//if(!photos[current1]) current1=2;
//circle[current1].style.background='red'
//gallery.src=photos[current1];
//}))


//posts.forEach(function (post, x) {
    //posts[x].addEventListener('mouseover', function () {
        //post.style.opacity='1';
    //})
//})