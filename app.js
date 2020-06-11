var imgArray = ["netcore", "csharp", "css", "python", "django", "js", "node", "react", "html", "unity"];
var desArray = ["csharpDes", "pythonDes", "jsDes", "unityDes", "langDes"];
var elements = {};
var des = {};
var i = 0;
(imgArray).forEach(element => {
    var ele = document.getElementById(element);  
    elements[element] = ele;
});

desArray.forEach(element => {
    var ele = document.getElementById(element);
    ele.classList.add("hide");
    des[element] = ele;
});


elements["netcore"].addEventListener("mouseenter", function (e) {
    handleHide(elements, "netcore", "csharp");
})

elements["netcore"].addEventListener("mouseleave", function (e) {
    handleShow(elements, "netcore", "csharp");
})

//js icon
elements["js"].addEventListener("mouseenter", function () {
    handleHide(elements, "node", "js", "react");
})
elements["js"].addEventListener("mouseleave", function () {
    handleShow(elements, "node", "js", "react");
})

//unity icon
elements["unity"].addEventListener("mouseenter", function () {
    handleHide(elements, "unity", "csharp");
})
elements["unity"].addEventListener("mouseleave", function () {
    handleShow(elements, "unity", "csharp");
})

//python
elements["python"].addEventListener("mouseenter", function () {
    handleHide(elements, "django", "python");
})
elements["python"].addEventListener("mouseleave", function () {
    handleShow(elements, "django", "python");
})
//django
elements["django"].addEventListener("mouseenter", function () {
    handleHide(elements, "django", "python");
})
elements["django"].addEventListener("mouseleave", function () {
    handleShow(elements, "django", "python");
})
//css
elements["css"].addEventListener("mouseenter", function () {
    handleHide(elements, "html", "css", "js");
})
elements["css"].addEventListener("mouseleave", function () {
    handleShow(elements, "html", "css", "js");
})
//html
elements["html"].addEventListener("mouseenter", function () {
    handleHide(elements, "html", "css", 'js');
})
elements["html"].addEventListener("mouseleave", function () {
    handleShow(elements, "html", "css", "js");
})


//csharp
elements["csharp"].addEventListener("mouseenter", function () {
    handleHide(elements, "csharp", "netcore", "unity");
})
elements["csharp"].addEventListener("mouseleave", function () {
    handleShow(elements, "csharp", "netcore", "unity");
})

function handleHide(elements, ...params) {
    showHideDes("show", params[0]);
    if (params[2] === "" || params[2] == null) {
        for (var key in elements) {
            if (key !== params[0] && key !== params[1]) {
                var tempEle = elements[key];
                tempEle.classList.remove("show");
                tempEle.classList.add("hide");
            }
        }
    } else {
        for (var key in elements) {
            if (key !== params[0] && key !== params[1] && key !== params[2]) {
                var tempEle = elements[key];
                tempEle.classList.remove("show");
                tempEle.classList.add("hide");
            }
        }
    }
}
function handleShow(elements, ...params) {
    showHideDes("hide", params[0]);
    if (params[2] === "" || params[2] == null) {
        for (var key in elements) {
            if (key !== params[0] && key !== params[1]) {
                var tempEle = elements[key];
                tempEle.classList.remove("hide");
                tempEle.classList.add("show");
            }
        }
    } else {
        for (var key in elements) {
            if (key !== params[0] && key !== params[1] && key !== params[2]) {
                var tempEle = elements[key];
                tempEle.classList.remove("hide");
                tempEle.classList.add("show");
            }
        }
    }
}

function showHideDes(state, key) {
    switch (key) {
        case "csharp":
            if (state === "show") {
                des["csharpDes"].classList.remove("hide");
                des["csharpDes"].classList.add("show");
            } else {                
                des["csharpDes"].classList.remove("show");
                des["csharpDes"].classList.add("hide");
            }

            break;
        case "netcore":
            if (state === "show") {
                des["csharpDes"].classList.remove("hide");
                des["csharpDes"].classList.add("show");
            } else {                
                des["csharpDes"].classList.remove("show");
                des["csharpDes"].classList.add("hide");
            }
            break;
        case "unity":
            if (state === "show") {
                des["unityDes"].classList.remove("hide");
                des["unityDes"].classList.add("show");
            } else {                
                des["unityDes"].classList.remove("show");
                des["unityDes"].classList.add("hide");
            }
            break;
        case "css":
            if (state === "show") {
                des["langDes"].classList.remove("hide");
                des["langDes"].classList.add("show");
            } else {                
                des["langDes"].classList.remove("show");
                des["langDes"].classList.add("hide");
            }
            break;
        case "python":
            if (state === "show") {
                des["csharpDes"].classList.remove("hide");
                des["csharpDes"].classList.add("show");
            } else {                
                des["pythonDes"].classList.remove("show");
                des["pythonDes"].classList.add("hide");
            }
            break;
        case "django":
            if (state === "show") {
                des["pythonDes"].classList.remove("hide");
                des["pythonDes"].classList.add("show");
            } else {                
                des["pythonDes"].classList.remove("show");
                des["pythonDes"].classList.add("hide");
            }
            break;
        case "html":
            if (state === "show") {
                des["langDes"].classList.remove("hide");
                des["langDes"].classList.add("show");
            } else {                
                des["langDes"].classList.remove("show");
                des["langDes"].classList.add("hide");
            }
            break;
        case "js":
            if (state === "show") {
                des["jsDes"].classList.remove("hide");
                des["jsDes"].classList.add("show");
            } else {                
                des["jsDes"].classList.remove("show");
                des["jsDes"].classList.add("hide");
            }
            break;
        case "react":
            if (state === "show") {
                des["jsDes"].classList.remove("hide");
                des["jsDes"].classList.add("show");
            } else {                
                des["jsDes"].classList.remove("show");
                des["jsDes"].classList.add("hide");
            }
            break;
        case "node":
            if (state === "show") {
                des["jsDes"].classList.remove("hide");
                des["jsDes"].classList.add("show");
            } else {                
                des["jsDes"].classList.remove("show");
                des["jsDes"].classList.add("hide");
            }
            break;
    }
}

var prjAsp = document.getElementById("prjAsp");
var prjUnity = document.getElementById("prjUnity");
var prjDjango = document.getElementById("prjDjango");
var aspPrjDes = document.getElementById("aspCorePrjDes");
var unityPrjDes = document.getElementById("unityPrjDes");
var djangoPrjDes = document.getElementById("djangoPrjDes");

prjAsp.addEventListener("mouseenter", function(e){
    prjAsp.src = "./Assets/Images/tellmore.gif";
    prjAsp.style.backgroundColor = "black";
    handleDesShow(aspPrjDes); 
    handleEleHide(prjUnity, prjDjango);
    scaleDown(prjUnity, prjDjango);
})
prjAsp.addEventListener("mouseleave", function(e){
    prjAsp.src = "./Assets/Images/aspnetcore.PNG";
    prjAsp.style.backgroundColor = "white";
    handleDesHide(aspPrjDes);
    handleEleShow(prjUnity, prjDjango);
    scaleUp(prjUnity, prjDjango);
})
prjUnity.addEventListener("mouseenter", function(e){
    prjUnity.src = "./Assets/Images/unityapp.gif";
    prjUnity.style.backgroundColor = "black";
    handleDesShow(unityPrjDes);
    handleEleHide(prjAsp, prjDjango);
    scaleDown(prjAsp, prjDjango);
})
prjUnity.addEventListener("mouseleave", function(e){
    prjUnity.src = "./Assets/Images/unity.png";
    prjUnity.style.backgroundColor = "white";
    handleDesHide(unityPrjDes);
    handleEleShow(prjAsp, prjDjango);
    scaleUp(prjAsp, prjDjango);
})
prjDjango.addEventListener("mouseenter", function(e){
    prjDjango.src = "./Assets/Images/djangoprj.gif";
    prjDjango.style.backgroundColor = "black";

    handleDesShow(djangoPrjDes);
    handleEleHide(prjUnity, prjAsp);
    scaleDown(prjAsp, prjUnity);
})
prjDjango.addEventListener("mouseleave", function(e){
    prjDjango.src = "./Assets/Images/django.jpg";
    prjDjango.style.backgroundColor = "white";
    prjDjango.style.position = "relative";   
    handleDesHide(djangoPrjDes);
    handleEleShow(prjUnity, prjAsp);
    scaleUp(prjAsp, prjUnity);
})

function handleDesShow(ele){
    ele.classList.remove("hide");
    ele.classList.add("show");
}
function handleDesHide(ele){
    ele.classList.remove("show");
    ele.classList.add("hide");
}
function handleEleHide(...params)
{
    params.forEach((e)=>{
        e.style.opacity = "0";
    })
}
function handleEleShow(...params){
    params.forEach((e)=>{
        e.style.opacity = "1";
    })
}
function scaleDown(...params)
{
    params[0].style.transform =  "scale(0.5,0.5)";
    params[1].style.transform =  "scale(0.5,0.5)";
}
function scaleUp(...params)
{
    params[0].style.transform =  "scale(1,1)";
    params[1].style.transform =  "scale(1,1)";
}

var about = document.getElementById("about");
function showAbout()
{
    about.style.opacity = "1";
}
window.onscroll = function(e){
    
    if(window.scrollY > 40)
    {
        about.style.opacity = "0";
    }    
}