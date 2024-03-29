// PP_Neue_Machina_Inktrap_Medium
// PP_Neue_Machina_Plain_Light
// Satoshi_Variable
var text_move_1 = document.querySelectorAll(".review1 h3") 
var text_move_2 = document.querySelectorAll(".review2 h3")
var home_head = document.querySelectorAll(".headingm h1")
var team_list = document.querySelectorAll(".listelem")
var sections = document.querySelectorAll(".section")
var cards = document.querySelectorAll(".card")

// (function () {
//     var scroll = new LocomotiveScroll();
// })();
function pageColorChanger() {
    sections.forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 70%",
            end: "bottom 70%",
            onEnter: function(){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}

function homePageAnimation() {
    gsap.set(".slidesm",{
        scale:5
    })
    gsap.set("headingm h1 span",{
        opacity:0
    })
    
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            scroller: "body",
            start:"top top",
            end:'bottom bottom',
            scrub: 2.5
        },
    })
    tl
    .to(".video-contn", {
        '--clip':"0%",
        ease: Power2,
    }, 'g')
    .to(".slidesm", {
        scale:1,
        ease: Power2,
    }, 'g')
    .to(".lft", {
        xPercent: -30,
        stagger:.03,
        ease: Power4,
    }, 'b')
    .to(".rgt", {
        xPercent: -10,
        stagger:.03,
        ease: Power4,
    }, 'b')
    .to(".headingm h1 span", {
        stagger:0.2,
        opacity:1,
        ease: Power3
    }, 'b')     
}
function home_h(){
    home_head.forEach((elem) => {
        clutter = "";
        h1text = elem.textContent;
        h1textsplit = h1text.split("");
        h1textsplit.forEach((e)=>{
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter;
    });
}    

function craftPageAnimation() {
    gsap.set(cards,{
        backgroundColor:"tansparent",
        color:"black",
        width:"95.5%"
    })

    gsap.utils.toArray(".card").forEach(card => {
        gsap.to(card, {
            width:"105%",
            backgroundColor:"black",
            color:"#AEDEE0",
            ease:Power4.inOut,
            scrollTrigger: {
                trigger: card,
                start: "top 40%",
                end: "bottom 60%",
                scrub:1
            }
        });
    });
}

function realPageAnimation() {
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:4
        },
        xPercent:-313,
        ease:Power4
    })
}

function teamPageAnimation() {
    team_list.forEach(function(el){
        el.addEventListener("mousemove", function(dets){
            let positionX = gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
    
            gsap.to(this.querySelector(".picture"),{
                scale:1,
                x: positionX,
                ease:Power4,
                duration:0.1
            })
        })
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"),{
                scale:0,
                duration:0.1
            })
        })
    })
}

function capsulePageAnimation() {
    var tlc = gsap.timeline({
        scrollTrigger:{
            trigger:".capsule:nth-child(2)",
            scroller: "body",
            start:"top 40%",
            end: "bottom 110%",
            scrub:1,
        }
    })
    tlc.to(".capsule:nth-child(2)",{
        y:-100,
        trigger:".capsules",
        scroller:"body",
    }, 'a')    
}





















var clutter;
var h1text;
var h2text;
var h1textsplit;
var h2textsplit;


function text_move(){
    text_move_1.forEach((elem) => {
        clutter = "";
        h1text = elem.textContent;
        h1textsplit = h1text.split("");
        h1textsplit.forEach((e)=>{
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter;
    });
    text_move_2.forEach((elem) => {
        clutter = "";
        h2text = elem.textContent;
        h2textsplit = h2text.split("");
        h2textsplit.forEach((e)=>{
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter;
    });
}
function text_color_1() {
    gsap.to(".review1 h3 span",{
        color: "#4A64F1",
        opacity:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:".review1 .text",
            scroller:"body",
            // markers:true,
            start:"top 85%",
            end:"top 30%",
            scrub:true
        }
})
}
function text_color_2() {
    gsap.to(".review2 h3 span",{
        color: "#704B98",
        opacity:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:".review2 .text",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 20%",
            scrub:true
        }
})
}



pageColorChanger()
homePageAnimation()
craftPageAnimation()
realPageAnimation()
teamPageAnimation()
capsulePageAnimation()
text_move()
text_color_1()
text_color_2()
home_h()