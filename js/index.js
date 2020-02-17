// Your code goes here



// Greensock Animations

gsap.from('img', {
    opacity: 0,
    x: 200,
    duration: 1, 
})

gsap.from('h2', {
    opacity: 0,
    x: -200,
    duration: 1,
    stagger: 0.25,
    
})

gsap.from('p', {
    opacity: 0,
    x: -200,
    duration: 1,
    stagger: 0.25,
})

// gsap.from('header', {
//     opacity: 0,
//     y: -200,
//     duration: 1,
// })

// Creating Propagation events

let introClass = document.querySelector(".intro")
introClass.addEventListener("click", () => introClass.style.opacity = 0.2)

introP = introClass.children[2];

introP.addEventListener("click", (event) => 
 event.stopPropagation(introP.style.opacity = "0"),)




// Click Images for gif replacement

document.querySelectorAll('img').forEach(
    x => {
        x.addEventListener('click', () => x.src = 'https://i.giphy.com/media/xSM46ernAUN3y/giphy.mp4')
        
    }
);

// Scroll to change top photo

let imgScroll = document.querySelector('img');
window.addEventListener('scroll', () => imgScroll.src = 'https://i.giphy.com/media/O5NyCibf93upy/giphy.mp4');





// Mouse Enter and Mouse Leave background Gray for P tags

document.querySelectorAll('p').forEach(
    x => {
        x.addEventListener('mouseenter', () => x.style.backgroundColor = "gray");
        x.addEventListener('mouseleave', () => x.style.backgroundColor = "white");
    }
);


// Body change with key press and release

let body = document.querySelector("body");
body.addEventListener("keydown", () => 
body.style.backgroundColor = "lightgray")

body.addEventListener("keyup", () => 
body.style.backgroundColor = "white");


// Window Resize Event

let windowResize = document.querySelector('body');
window.addEventListener("resize", ()=>
windowResize.style.display = "none",
)





// Button DoubleClick Events

let buttonClick = document.querySelectorAll('.btn');
buttonClick.forEach(x => {
    x.addEventListener("dblclick", () => x.style.backgroundColor = "purple"
)})


// H2  Mouse Down and Mouse Up

let h2Mouse = document.querySelectorAll('h2');
h2Mouse.forEach(x => {
    x.addEventListener("mousedown", () => x.style.fontSize = "6rem"),
    x.addEventListener("mouseup", () => x.style.color = "red")
})


// Fix NavBar

let navBar = document.querySelectorAll("nav");

navBar.forEach(x => {
    x.addEventListener("click", (event) => event.preventDefault())
});


