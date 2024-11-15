const option = document.querySelector(".option");
const profile = document.querySelector(".profile");
const cursor = document.querySelector(".cursor");


profile.addEventListener("click" , () => {
    if(option.style.display == "flex"){
        option.style.display = "none";
    }else{
        option.style.display = "flex";
    }
});

document.addEventListener("mousemove" , (e) => {
    cursor.style.left = e.x  + 11  + "px";
    cursor.style.top = e.y + 3 +  "px";
});



const search = document.querySelector(".search");
const search2 = document.querySelector(".search2");
const stay = document.querySelector(".stay");
const exp = document.querySelector(".exp");

exp.addEventListener("click" , () => {
    search.style.display = "none";
    search2.style.display = "flex";
    stay.style.color = "gray";
    exp.style.color = "black";
});

stay.addEventListener("click" , () => {
    search.style.display = "flex";
    search2.style.display = "none";
    stay.style.color = "black";
    exp.style.color = "gray";
});

// night mode

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const head = document.querySelector(".head");
const h = document.querySelector("h1");
const white = document.querySelector("#whi");

sun.addEventListener("click" , () => {
    document.body.style.backgroundColor = "black";
    sun.style.display = "none";
    moon.style.display = "block";
    head.style.color = "white";
    opt.style.color =  "white";
    opt1.style.color = "white";    
    opt2.style.color = "white";
    opt3.style.color = "white";
    opt4.style.color = "white";
    opt5.style.color = "white";
    opt6.style.color = "white";
    opt7.style.color = "white";
});

moon.addEventListener("click" , () => {
    document.body.style.backgroundColor = "white";
    sun.style.display = "block";
    moon.style.display = "none";
    moon.style.color = "white";
    head.style.color = "black";
    opt.style.color = "black";
    opt1.style.color = "black";    
    opt2.style.color = "black";
    opt3.style.color = "black";
    opt4.style.color = "black";
    opt5.style.color = "black";
    opt6.style.color = "black";
    opt7.style.color = "black";
});

// night mode

//images

const con = document.querySelector(".con");
const con1 = document.querySelector(".con1");
const con2 = document.querySelector(".con2");
const con3 = document.querySelector(".con3");
const con4 = document.querySelector(".con4");
const con5 = document.querySelector(".con5");
const con6 = document.querySelector(".con6");
const con7 = document.querySelector(".con7");

const opt = document.querySelector(".opt");
const opt1 = document.querySelector(".opt1");
const opt2 = document.querySelector(".opt2");
const opt3 = document.querySelector(".opt3");
const opt4 = document.querySelector(".opt4");
const opt5 = document.querySelector(".opt5");
const opt6 = document.querySelector(".opt6");
const opt7 = document.querySelector(".opt7");

opt.addEventListener("click" , () => {
    con.style.display = "flex";
    con1.style.display = "none";
    con2.style.display = "none";
    con3.style.display = "none";
    con4.style.display = "none";
    con5.style.display = "none";
    con6.style.display = "none";
    con7.style.display = "none";
    opt.style.color = "gray";
    opt1.style.color = "black";
    opt2.style.color = "black";
    opt3.style.color = "black";
    opt4.style.color = "black";
    opt5.style.color = "black";
    opt6.style.color = "black";
    opt7.style.color = "black";
    opt.style.textDecoration = "underline";
});

opt1.addEventListener("click" , () => {
    con.style.display = "none";
    con1.style.display = "flex";
    con2.style.display = "none";
    con3.style.display = "none";
    con4.style.display = "none";
    con5.style.display = "none";
    con6.style.display = "none";
    con7.style.display = "none";
    opt.style.color = "black";
    opt1.style.color = "gray";    
    opt2.style.color = "black";
    opt3.style.color = "black";
    opt4.style.color = "black";
    opt5.style.color = "black";
    opt6.style.color = "black";
    opt7.style.color = "black";
    opt1.style.textDecoration = "underline";

});

opt2.addEventListener("click" , () => {
    con.style.display = "none";
    con1.style.display = "none";
    con2.style.display = "flex";    
    con3.style.display = "none";
    con4.style.display = "none";
    con5.style.display = "none";    
    con6.style.display = "none";
    con7.style.display = "none";
    opt.style.color = "black";
    opt1.style.color = "black";
    opt2.style.color = "gray";
    opt3.style.color = "black";
    opt4.style.color = "black";
    opt5.style.color = "black";
    opt6.style.color = "black";
    opt7.style.color = "black";
    opt2.style.textDecoration = "underline";

});

opt3.addEventListener("click" , () => {
    con.style.display = "none";
    con1.style.display = "none";
    con2.style.display = "none";    
    con3.style.display = "flex";
    con4.style.display = "none";
    con5.style.display = "none";    
    con6.style.display = "none";
    con7.style.display = "none";
    opt.style.color = "black";
    opt1.style.color = "black";
    opt2.style.color = "black";
    opt3.style.color = "gray";
    opt4.style.color = "black";
    opt5.style.color = "black";
    opt6.style.color = "black";
    opt7.style.color = "black";
    opt3.style.textDecoration = "underline";

});

opt4.addEventListener("click" , () => {
    con.style.display = "none";
    con1.style.display = "none";
    con2.style.display = "none";    
    con3.style.display = "none";
    con4.style.display = "flex";
    con5.style.display = "none";    
    con6.style.display = "none";
    con7.style.display = "none";
    opt.style.color = "black";
    opt1.style.color = "black";
    opt2.style.color = "black";
    opt3.style.color = "black";
    opt4.style.color = "gray";
    opt5.style.color = "black";
    opt6.style.color = "black";
    opt7.style.color = "black";
    opt4.style.textDecoration = "underline";

});

opt5.addEventListener("click" , () => {
    con.style.display = "none";
    con1.style.display = "none";
    con2.style.display = "none";    
    con3.style.display = "none";
    con4.style.display = "none";
    con5.style.display = "flex";    
    con6.style.display = "none";
    con7.style.display = "none";
    opt.style.color = "black";
    opt1.style.color = "black";
    opt2.style.color = "black";
    opt3.style.color = "black";
    opt4.style.color = "black";
    opt5.style.color = "gray";
    opt6.style.color = "black";
    opt7.style.color = "black";
    opt5.style.textDecoration = "underline";

});

opt6.addEventListener("click" , () => {
    con.style.display = "none";
    con1.style.display = "none";
    con2.style.display = "none";    
    con3.style.display = "none";
    con4.style.display = "none";
    con5.style.display = "none";    
    con6.style.display = "flex";
    con7.style.display = "none";
    opt.style.color = "black";
    opt1.style.color = "black";
    opt2.style.color = "black";
    opt3.style.color = "black";
    opt4.style.color = "black";
    opt5.style.color = "black";
    opt6.style.color = "gray";
    opt7.style.color = "black";
    opt6.style.textDecoration = "underline";

});

opt7.addEventListener("click" , () => {
    con.style.display = "none";
    con1.style.display = "none";
    con2.style.display = "none";
    con3.style.display = "none";
    con4.style.display = "none";
    con5.style.display = "none";    
    con6.style.display = "none";
    con7.style.display = "flex";
    opt.style.color = "black";
    opt1.style.color = "black";
    opt2.style.color = "black";
    opt3.style.color = "black";
    opt4.style.color = "black";
    opt5.style.color = "black";
    opt6.style.color = "black";
    opt7.style.color = "gray";
    opt7.style.textDecoration = "underline";

});

//images

const log = document.querySelector(".log");
const box = document.querySelector("#login-box");
const welc = document.querySelector(".welc");
const resume = document.querySelector(".resume");
const sign = document.querySelector(".sign");

log.addEventListener("click" , () => {
   if(log.innerHTML = "LogIn"){
       box.style.display = "initial";
       sign.innerHTML = "SignIn";

   }
   else if (log.innerHTML = "Logout"){
       log.innerHTML = "LogIn";
       log.style.display = "none";
       sign.style.display = "initial";
       welc.style.display = "none";
       sign.innerHTML = "SignIn";
   }
});

const conti = document.querySelector(".conti");

conti.addEventListener("click" , () => {
    box.style.display = "none";
    welc.style.display = "initial";
});

resume.addEventListener("click" , () => {
    welc.style.display = "none";
    log.innerHTML = "Logout";
    sign.innerHTML = "User1234777";
});








