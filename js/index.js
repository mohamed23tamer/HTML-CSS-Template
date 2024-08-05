// check color in localstorage
let maincolor = localStorage.getItem("color")
if(maincolor !== null){
    document.documentElement.style.setProperty("--main-color",maincolor)
    // remove All activ class from color
    document.querySelectorAll(".change-box .color-change ul li.active").forEach(e =>{
    e.classList.remove("active")})
    // to add activ class 
    document.querySelectorAll(".change-box .color-change ul li").forEach(e => {
        if(e.dataset.color == maincolor){
            e.classList.add("active")
        }
    })
}

let randomInterval;
let randomBackgroundValue;
let randomBackgroundcheck = localStorage.getItem("random-background")
if(randomBackgroundcheck !== null){
    if(randomBackgroundcheck == "true"){
        randomBackgroundValue = true;
    }else{
        randomBackgroundValue = false;
    }
}
document.querySelectorAll(".change-box .random-background span").forEach(e =>{
    e.classList.remove("run")
})
if(randomBackgroundcheck == "true"){
    document.querySelector(".change-box .random-background .yes").classList.add("run")
}else{
    document.querySelector(".change-box .random-background .no").classList.add("run")
}

let randomBackground = document.querySelectorAll(".change-box .random-background span")
randomBackground.forEach(e =>{
    e.addEventListener("click" , (ele) => {
        ele.target.parentElement.querySelectorAll(".run").forEach(element =>{
            element.classList.remove("run")
        })
        e.classList.add("run")
        if(e.dataset.back == "yes"){
            randomBackgroundValue = true;
            randomImg()
            localStorage.setItem("random-background",true)
        }else{
            randomBackgroundValue = false;
            clearInterval(randomInterval)
            localStorage.setItem("random-background",false)
        }
    })
})
// loop the iamge in background 
let mybackground = ["01.jpg" ,"02.jpg" ,"03.jpg" ,"04.jpg" ,"05.jpg"]
function randomImg(){
    if(randomBackgroundValue === true){
        randomInterval = setInterval(() =>{
        let randomNumber = Math.floor(Math.random() * mybackground.length)
        document.querySelector(".templete").style.background = `url(image/${mybackground[randomNumber]})`
        },5000)
    }
}
randomImg()

// Show bullets
let showbullet = localStorage.getItem("show-bullet")
let bullet = document.querySelector(".bullets-box")
if(showbullet !== null){
    document.querySelectorAll(".change-box .Show-bullets span").forEach(span =>{
        span.classList.remove("run")
    })
    if(showbullet == "block"){
        bullet.style.display = "block"
        document.querySelector(".change-box .Show-bullets span.yes").classList.add("run")
    }else{
        bullet.style.display = "none"
        document.querySelector(".change-box .Show-bullets span.no").classList.add("run")
    }
}

document.querySelectorAll(".change-box .Show-bullets span").forEach(span =>{
    span.addEventListener("click",(ele) =>{
        ele.target.parentElement.querySelectorAll(".run").forEach(ev =>{
            ev.classList.remove("run")
        })
        ele.target.classList.add("run")
        if(ele.target.dataset.back == "show"){
            bullet.style.display = "block"
            localStorage.setItem("show-bullet","block")
        }else{
            bullet.style.display = "none"
            localStorage.setItem("show-bullet","none")
        }
    })
})

// open the change-box
document.querySelector(".change-box .contaner i").onclick = function (){
    document.querySelector(".change-box").classList.toggle("open")
}


// loop on color-change
document.querySelectorAll(".change-box .color-change ul li").forEach(li => {
    li.addEventListener("click", (element) => {
        document.documentElement.style.setProperty("--main-color",element.target.dataset.color)
        localStorage.setItem("color",element.target.dataset.color)
        // remove active class
        element.target.parentElement.querySelectorAll(".active").forEach(e =>{
            e.classList.remove("active")
        })
        // add activ class to li
        element.target.classList.add("active")
        })
})



// Our Skills Variable
let myskill = document.querySelector(".Our-Skills")

// when reach to our skills section
window.onscroll = function(){
    // determine the top of our skills
    let OurSkillsTop = myskill.offsetTop
     // determine the height of our skills
    let OurSkillsheight = myskill.offsetHeight
    // determine the height of page
    let windowHeight = window.innerHeight
    // determine the space of scrolling
    let spaceofScorll = this.pageYOffset
    // to show our skills
    if(spaceofScorll > (OurSkillsTop + OurSkillsheight - windowHeight)){
        document.querySelectorAll(".Our-Skills .container .skill .value span").forEach(e =>{
            e.style.width = e.dataset.progress
        })
    }
}


// creat popup for galleryt
let myimges = document.querySelectorAll(".Gallery .container img")
myimges.forEach(img =>{
    img.addEventListener("click",(ele) =>{
        // creat popup layout
        let mylayout = document.createElement("div")
        mylayout.className = "popup-layout"
        document.body.appendChild(mylayout)
        // creat popup img 
        let myimg = document.createElement("div")
        let popupImg = document.createElement("img")
        popupImg.src = ele.target.src
        myimg.className = "popup-img"
        // creat the alt of popup img
        let myhead = document.createElement("h3")
        myhead.innerHTML = ele.target.alt
        myimg.appendChild(myhead)
        myimg.appendChild(popupImg)
        // creat button to close popup
        let myspan = document.createElement("span")
        myspan.innerHTML = "X"
        myspan.className = "close-popup"
        myimg.appendChild(myspan)
        document.body.appendChild(myimg)
    })
})
// to close popup massage
document.addEventListener("click",(e) =>{
    if(e.target.className == "close-popup"){
        e.target.parentElement.remove()
        document.querySelector(".popup-layout").remove()
    }
})


// bullets behavior
let mybullets = document.querySelectorAll(".bullets-box .bullets")
let mylinks = document.querySelectorAll(".templete .header ul li a")

function scrollto(element){
    element.forEach(ele =>{
        ele.addEventListener("click", (e) =>{
            e.preventDefault()
            document.querySelector(e.target.dataset.pross).scrollIntoView({
                behavior: "smooth",
            })
        })
    })
}
scrollto(mybullets)
scrollto(mylinks)


// to reset the change box
document.querySelector(".reset").onclick = function(){
    localStorage.clear()
    //localStorage.removeItem("show-bullet")
    //localStorage.removeItem("random-background")
    //localStorage.removeItem("color")
    //Reload Window
    window.location.reload()
}


// toggle switch
let mytoggleSwitch = document.querySelector(".toggle-switch")
let myUl = document.querySelector(".templete .header ul")

myUl.onclick = function(e){
    e.stopPropagation()
}
mytoggleSwitch.onclick = function(e){
    e.stopPropagation()
    this.classList.toggle("active")
    myUl.classList.toggle("viwe")
}

document.addEventListener("click",(e) =>{
    if(e.target != mytoggleSwitch && e.target != myUl){
        if(myUl.classList.contains("viwe")){
            mytoggleSwitch.classList.toggle("active")
            myUl.classList.toggle("viwe")
        }
    }
})