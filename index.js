var typingEffect = new Typed(".cool", {
    strings: ["Join us, paint smiles with the art club.","Ignite your creativity-join the art club!","Let's shape your passion,color your world"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500
})



$(document).ready(function() {

    
        document.querySelector(".loader").style.position = "absolute";
        
        //document.body.removeChild(document.querySelector(".loader"));
        

        const navi = document.querySelectorAll("nav ul a");
const out = document.querySelector(".blank");
const home = document.querySelector(".navigation p")


navi.forEach(i => i.addEventListener("mouseover",function(e) {

    for(var i = 0; i < 6; i++) {
        
        if(e.target.innerText == navi[i].innerText)
        {
            navi[i].classList.add("power");
            e.target.style.visibility = "visible";    
            e.target.style.textAlign  = "center";

            document.querySelector(".line").classList.add("power");
            document.querySelector(".line").style.visibility = "visible";
            if(e.target.innerText == "M&V"){
                e.target.innerText = "Mission And Vision"
            }
            e.preventDefault()
            
        } 
        else 
        {
            navi[i].classList.remove("power");
            navi[i].style.visibility = "hidden";
            navi[i].style.position = "absolute";

            e.preventDefault()
        }
    
    }
    e.preventDefault()
}))

out.addEventListener("mouseout",(e) => {

    for(var i = 0; i < 6; i++) {
        
        navi[i].classList.add("power");
        navi[i].style.visibility = "visible";
        document.querySelector(".line").classList.remove("power");
        document.querySelector(".line").style.visibility = "hidden";
        navi[i].style.position = "relative";
        
        
        if(navi[i].innerText == "Mission And Vision"){
            navi[i].innerText = "M&V"
        }
    }
    
    e.preventDefault()
})

home.addEventListener("click",() => {
    
})



const need = document.querySelectorAll(".art img");
const container = document.querySelector(".art");
const first = document.querySelector(".first");
const second= document.querySelector(".second");
const third = document.querySelector(".third");
const contain = document.querySelector(".contain");
const slider = document.querySelector(".slider");
const cancel = document.querySelector(".cancel");
const mainchange = document.querySelector(".main_change");
const forward = document.querySelector(".slider i:nth-of-type(2)");
const backward = document.querySelector(".slider i:first-of-type");
const artists = ["MLily Grace","Liam James","Mia Rose","Jesus Thomas","Emma Kate","Noah Alexander","Tolesol","Lucas Gabriel","Ethan William","Jack Elijah","Akan ji","Mason Henry","Leo Thomas","Sophie Grace","Oliver Max","Benjamin Leo","Ava Claire","Henry Oliver","Zoe Elizabeth","Aiden Michael","Caleb Daniel","Olivia Jane","sheer"];
const sources = [".\\photos\\9975c1b93b41d522ce3d33be685b9598-removebg-preview.png",".\\photos\\f5a4f1f11d700df10cbc86870f8ad6f0-removebg-preview.png",".\\photos\\756beba276ca4dbf79552f3e07c52434-removebg-preview.png"];
const profile = document.querySelector(".wee");

//Ruby
















const infopName = document.querySelector(".infop h5");
console.log(forward)

need.forEach(b => {
    var z = Math.floor(Math.random() * (100 - 0) + 0);
    b.style.transform = `translateZ(${z}px)`;
})

var i= 0;
var current = 0;
need.forEach((i) => i.addEventListener("click",function(e) {
            mainchange.style.visibility = "hidden";
            mainchange.style.display = "none";
            slider.style.visibility = "visible";
            slider.style.display = "block";
                for(var j = 0; j < need.length;j++) {
                    if(e.target == need[j]) {
                        current = j;
                    }
            }
            
            
            document.querySelector(".slider img").src = need[current].src;
            infopName.innerText = artists[current];
            console.log(current)
    }));

    const start = [
        { width: "30px" },
        { width: "250px" },
      ];
      
      const stop = {
        duration: 500,
        iterations: 1,
      };
    
    var  c = 0;
    document.querySelector(".slider img").src = need[current].src;
    infopName.innerText = artists[current];
    profile.src = sources[0];
forward.addEventListener("click",(e) => {
    
    if(current == need.length - 2) {
        forward.style.visibility = "hidden";
    } else {
        current++;
        c++;
        backward.style.visibility = "visible";
            forward.style.visibility = "visible";  
    document.querySelector(".slider img").src = need[current].src;
    document.querySelector(".slider img").animate(start,stop);
    infopName.innerText = artists[current];
    if(c < 3) {
        profile.src = sources[c];
        console.log(current)
    } else {
        c = 0;
        profile.src = sources[c];
    }
    
    }
    
})

backward.addEventListener("click",(e) => {
    
    current--;
    c--;
    if(current == -1) {
        backward.style.visibility = "hidden";
    current = 0;}
        else {
            backward.style.visibility = "visible";
            forward.style.visibility = "visible";
            document.querySelector(".slider img").src = need[current].src;
            document.querySelector(".slider img").animate(start,stop);
            infopName.innerText = artists[current];
            if(c > -1) {
                profile.src = sources[c];
                console.log(current)
            } else {
                c = 2;
                profile.src = sources[c];
            }
        }
    
    
})

    cancel.addEventListener("click",(e) => {
        slider.style.visibility = "hidden";
        slider.style.display = "none";
                mainchange.style.visibility = "visible";
                mainchange.style.display = "block";
               
    
    })

    const mainEve = document.querySelectorAll(".showcase img");
    const mainDip = document.querySelectorAll(".showcase p");


    mainEve.forEach(a => a.addEventListener("mouseover",(e) => {
        for(let i = 0; i < mainEve.length; i++) {
            if(mainEve[i] == e.target) {
                mainDip[i].style.color = "white"
            }
        }
        console.log("hello")
        e.preventDefault();
    }))

   

    /*const showed = document.querySelector(".show_more");
    const parallex = document.querySelector(".parallex");

    showed.addEventListener("click",function() {
            mainchange.style.visibility = "hidden";
            mainchange.style.display = "none";
            parallex.style.visibility = "visible";
            parallex.style.display = "block";
            console.log("ha")
    })*/

    backward.addEventListener("mouseover",function(e) {
        e.target = '<i class="fa-solid fa-circle-chevron-right"></i>';
     })
    });














