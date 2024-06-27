$(document).ready(function(){

    $("*").css({
        "box-sizing":"border-box",
        "padding":"0",
        "margin":"0"
    })

    $(".body").css({
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "flex-direction":"column",
        "background-color":"#e6e1d0",
        "background-repeat": "repeat",
        "background-image": "url(images/grain.png)",
    })

    $(".header").css({
        "width":"90vw",
        "height":"700px",
        "border":"3px solid #000",
        "margin-top":"30px",
        "background-color":"#F68989",
        "background-repeat": "repeat",
        "background-image": "url(images/grain.png)",
        "overflow":"hidden",
        "display":"flex",
        "justify-content":"space-between",
        "align-items":"center",
        "position":"relative"
    })

    var HeaderTags =
        "<div class='hdrtxt_container'></div>" +
        "<img id='hdrwave' src='images/svg.png'>" +
        "<img id='headerImage1' src='images/71b94b4d993eb7c473184d639af16d2e.jpg'>"

    $(".header").append(HeaderTags)

    $(".hdrtxt_container").append(
        "<span id='Hdrtxt1'>RETRO</span>" +
        "<span id='Hdrtxt2'>fashion</span>" +
        "<p id='hdrtxt3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet animi architecto corporis cum ducimus earum est eum excepturi fuga fugit hic id inventore ipsam, laboriosam maiores nesciunt odio porro quae qui repellendus repudiandae sequi tempore veniam voluptate voluptatibus.</p>"+

        "<button id='hdrbtn'>SHOP NOW!</button>")
        .css({
            "display":"flex",
            "flex-direction":"column",
            "align-items":"center",
            "height":"700px",
            "position":"relative",
            "width":"50%",
            "background-color":"#80c3c3"
        })

    $("#Hdrtxt1").css({
        "font-family":"Franchise",
        "font-size":"16rem",
        "transform": "rotate(-7deg)",
        "position":"absolute",
        "top":"50px"
    })

    $("#Hdrtxt2").css({
        "font-family":"Milestone",
        "font-size":"5rem",
        "margin-left":"450px",
        "position":"absolute",
        "bottom":"330px"
    })

    $("#hdrtxt3").css({
        "width":"550px",
        "position":"absolute",
        "bottom":"170px",
        "font-family":"MarketDeco"
    })

    $("#headerbg").css({
        "opacity":"0.8",
        "position":"absolute"
    })

    $("#hdrwave").css({
        "height":"700px",
        "position":"absolute",
        "left":"50%"
    })

    $("#hdrbtn").css({
        "align-items": "center",
        "background-color": "#fcd8d5",
        "border": "2px solid #111",
        "border-radius": "8px",
        "color": "#111",
        "cursor": "pointer",
        "display": "flex",
        "height": "48px",
        "justify-content": "center",
        "line-height": "24px",
        "width": "550px",
        "padding": "0 25px",
        "position": "absolute",
        "text-align": "center",
        "text-decoration": "none",
        "box-shadow": "10px 8px 0px 2px #000000",
        "top":"550px",
        "font-family":"MarketDeco",
        "font-size":"1.5rem"
    })

    $("#hdrbtn").hover(function () {
        $(this).css({"background-color": "#fcb9b6",})
    },function () {
        $(this).css({"background-color": "#fcd8d5",})
    })

    $("#headerImage1").css({
        "width":"420px",
        "height":"550px",
        "border":"3px solid #fee6e3",
        "box-shadow": "10px 8px 0px 2px #000000",
        "margin-right":"120px"
    })

    $("#headerImage2").css({
        "width":"200px",
        "height":"240px"
    })

    $(".navigation").css({
        "width":"90vw",
        "height":"150px",
        "margin-top":"20px",
        "background-color":"#FCE2DB",
        "background-repeat": "repeat",
        "background-image": "url(images/grain.png)",
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "border":"3px solid #000",
    }).append(
        "<ul class='menu' id='m1'></ul>"+
        "<img id='navimg' src='images/578-5781890_fashion-symbol-png-fashion-icon-png-transparent-png-removebg-preview.png'>"+
        "<ul class='menu' id='m2'></ul>"
    )

    for (let i = 0; i < 3; i++) {
        $(".menu").append("<li class='l1'></li>")
    }

    $(".menu").css({
        "display":"flex",
    })

    $(".l1").css({
        "list-style": "none",
        "margin": "0 50px"
    })



    $(".l1").eq(0).append("<a class='link' href='#'>HOME</a>")
    $(".l1").eq(1).append("<a class='link' href='#'>DRESS</a>")
    $(".l1").eq(2).append("<a class='link' href='#'>SUITS</a>")
    $(".l1").eq(3).append("<a class='link' href='#'>ABOUT US</a>")
    $(".l1").eq(4).append("<a class='link' href='#'>CONTACT US</a>")
    $(".l1").eq(5).append("<a class='link' href='#'>INFO</a>")

    $(".link").css({
        "text-decoration": "none",
        "font-family":"MarketDeco",
        "font-size":"1.5rem",
        "color":"#000"
    }).hover(function () {
        $(this).css({"color":"#ff4d7f"})
    },function () {
        $(this).css({"color":"#000"})
    })

    $("#navimg").css({
        "width":"190px",
        "height":"140px",
        "margin":"0 70px 0 150px"
    })

    $(".container").css({
        "display":"flex",
        "width":"90vw"
    })

    $(".sidebar").css({
        "width":"20vw",
        "height":"1700px",
        "border":"3px solid #D63447",
        "margin-top":"20px",
        "position":"relative",
        "background-color":"#FCE2DB",
        "background-repeat": "repeat",
        "background-image": "url(images/grain.png)"
    })

    $(".sidebar").append("<div id='asidehdr'>FASHION</div>"+"<div class='asidecontainer'></div>")

    $(".asidecontainer").css({
        "display":"flex",
        "flex-direction":"column",
        "justify-content":"space-around",
        "align-items":"center",
        "padding-top":"150px"
    }).append(
        "<img src='images/Screenshot%202022-10-14%20at%2021-36-27%20fashion-and-beauty-logo-collection-free-vector.jpg%20(JPEG%20Image%202500%20×%201600%20pixels)%20—%20Scaled%20(57%25).png' id='logo'>"+
        "<form action='' id='form'></form>"+
        "<p id='asidetxt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis delectus!</p>"
    )

    $("#form").css({
        "position":"relative"
    }).append(
        "<textarea placeholder='Search...' id='asidesearch'></textarea>"+
        "<i class='fa-sharp fa-solid fa-magnifying-glass'></i>"
    )

    $("#logo").css({
        "width":"200px",
        "height":"200px",
        "border-radius":"50%",
        "border":"3px solid #D63447",
    })

    $("#asidesearch").css({
        "width":"300px",
        "border":"3px solid #D63447",
        "background-color":"#FAEEE7",
        "margin-top":"40px",
        "border-radius":"25px",
        "resize": "none",
        "font-size": "20px",
        "padding": "20px 10px 0",
        "outline": "none",
        "font-family":"MarketDeco",
    })

    $(".fa-magnifying-glass").css({
        "font-size":"1.5rem",
        "opacity":"0.5",
        "cursor":"pointer",
        "position":"absolute",
        "top":"64px",
        "left":"280px"
    }).hover(function () {
        $(this).css({"opacity":"1"})
    },function () {
        $(this).css({"opacity":"0.7"})
    })

    $("#asidetxt").css({
      "padding":"20px",
      "width":"280px",
      "height":"150px",
      "border-radius":"25px",
      "font-size":"1.2rem",
      "margin-top":"50px",
      "font-family":"MarketDeco",
      "text-align":"center",
      "line-height":"40px",
      "border":"3px solid #D63447",
      "background-color":"#FAEEE7",
    })

    for (let i = 0; i < 4; i++) {
        $(".asidecontainer").append("<div class='asidemenu'>Lorem ipsum dolor.</div>")
    }

    $(".asidemenu").css({
        "width":"320px",
        "height":"70px",
        "border-radius":"25px",
        "margin-top":"50px",
        "font-family":"MarketDeco",
        "padding-left":"20px",
        "line-height":"70px",
        "font-size":"1.2rem",
        "border":"3px solid #D63447",
        "background-color":"#FAEEE7",
        "cursor":"pointer"
    }).append("<i class='fa-solid fa-tag'></i>").hover(function () {
        $(this).css({"color":"#F8485E"})
    },function (){
        $(this).css({"color":"#000000"})
    })

    $(".fa-tag").css({
        "margin-left":"100px",
        "font-size":"1.4rem"
    })

    $(".asidecontainer").append("<img id='logo2' src='images/f4f874ac00896351.png'>")
    $("#logo2").css({
        "margin-top":"100px",
    })

    $("#asidehdr").css({
        "width":"100%",
        "background-color":"#24A19C",
        "height":"100px",
        "top":"0",
        "font-family":"VintageWarehouse",
        "font-size":"3rem",
        "text-align":"center",
        "line-height":"100px",
        "color":"#1a1818",
        "border-bottom": "3px solid #D63447",
        "position":"absolute",
    })


    $(".content").css({
        "width":"70vw",
        "height":"1700px",
        "border":"3px solid #D63447",
        "margin-top":"20px",
        "margin-left":"15px",
        "display":"flex",
        "background-color":"#FCE2DB",
        "background-repeat": "repeat",
        "background-image": "url(images/grain.png)",
        "position":"relative"
        })

    $(".footer").css({
        "width":"90vw",
        "height":"350px",
        "border":"3px solid #B270A2",
        "margin-top":"20px",
        "margin-bottom":"15px",
        "background-color":"#FCE2DB",
        "background-repeat": "repeat",
        "background-image": "url(images/grain.png)",
        "display":"flex",
        "justify-content":"space-between",
        "align-items":"center"
    }).append("<div class='footercontainer'></div>"+
        "<img id='footerlogo' src='images/logo3.png'>"

    )

    $(".footercontainer").css({
        "height":"350px",
        "display":"flex",
        "flex-direction":"column",
        "align-items":"center",
        "margin-left":"140px",
        "margin-top":"40px"
    }).append("<p id='newsletter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci consectetur consequuntur, dolorem dolorum enim et fuga harum id inventore, itaque magni maxime nesciunt nihil provident rem repellendus unde voluptatum.</p>"+
        "<input type='Email' name='e-mail' placeholder='Enter your E-mail address' class='email'>" +
        "<button class='subscribebtn'>Subscribe!</button>"
    )

    $("#newsletter").css({
        "width":"700px",
        "font-size":"1rem",
        "font-family":"MarketDeco",
        "color":"#171715",
        "line-height":"40px",
    })

    $(".email").css({
        "width":"700px",
        "height":"50px"
    })

    $(".subscribebtn").css({
    "width":"708px",
    "height":"50px",
    "font-size": "1.2rem",
    "font-weight": "200",
    "padding": "13px 20px 13px",
    "outline": "0",
    "border": "1px solid black",
    "cursor": "pointer",
    "position": "relative",
    "background-color": "rgba(0, 0, 0, 0)",
    "margin-top":"20px",
    "transition":".5s",
    "font-family":"MarketDeco"
    }).hover(function () {
        $(this).css({"background-color":"#B270A2","color":"white"})
    },function (){
        $(this).css({"background-color":"transparent","color":"black"})
    })

    $("#footerlogo").css({
        "width":"300px",
        "height":"300px",
        "border-radius":"50%",
        "border":"3px solid #000",
        "margin-right":"100px"
    })

    $(".content").append("<div id='contenthdr'>BEST OF FASHION</div>"+"<div class='contentcontainer'></div>")

    $(".contentcontainer").css({
        "display":"flex",
        "justify-content":"space-around",
        "align-items":"center",
        "flex-wrap":"wrap",
        "padding":"150px 100px 40px 100px"
    })

    $("#contenthdr").css({
        "width":"100%",
        "background-color":"#24A19C",
        "height":"100px",
        "top":"0",
        "position":"absolute",
        "font-family":"VintageWarehouse",
        "font-size":"3rem",
        "text-align":"center",
        "line-height":"100px",
        "color":"#1a1818",
        "border-bottom": "3px solid #D63447"
    })

    for (let i = 0; i < 3; i++) {
        for(let j=0; j<3; j++){
            $(".contentcontainer").append("<div class='box'></div>")
            $(".box").css({
                "width":"350px",
                "height":"450px",
                "border":"3px solid #D63447",
                "position":"relative",
                "overflow":"hidden"
            })
        }
    }

    for (let i = 0; i <9; i++) {
        $(".box").eq(i).append("<img class='contentimg' src='images/content"+i+".jpg'/>"+
            "<div class='imgheader'>fashion</div>"+
            "<div class='imgDescription'></div>")

        $(".contentimg").css({
            "width":"350px",
            "height":"450px"
        })

        $(".imgheader").css({
            "width":"350px",
            "height":"50px",
            "background-color":"#24A19C",
            "position":"absolute",
            "bottom":"0px",
            "text-align":"center",
            "line-height":"50px",
            "font-size":"1.5rem",
            "font-family":"MarketDeco",
            "color":"#FAEEE7"
        })

        $(".imgDescription").css({
            "width":"350px",
            "height":"400px",
            "background-color":"rgba(0,0,0,0.37)",
            "position":"absolute",
            "display":"flex",
            "justify-content":"space-around",
            "align-items":"center",
            "flex-direction":"column",
            "transition":".5s",
            "left":"350px",
            "top":"0"
        })
    }

    $(".imgDescription").append(
        "<p class='contenttxt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, fuga fugiat itaque maiores mollitia nulla sed? Ad fugiat placeat repellat sint?</p>"+
        "<button class='contentbtn'>Click for More!</button>"
    )

    $(".contenttxt").css({
        "font-size":"1rem",
        "font-family":"MarketDeco",
        "color":"#FAEEE7",
        "line-height":"40px",
        "text-align":"center",
        "width":"250px"
    })

    $(".contentbtn").css({
    "margin-bottom":"50px",
    "background-color": "#FFA0A0",
    "border": "2px solid #000",
    "border-radius": "30px",
    "box-shadow": "#F8485E 4px 4px 0 0",
    "color": "#F8485E",
    "cursor": "pointer",
    "display": "inline-block",
    "font-size": "18px",
    "padding": "0 18px",
    "line-height": "50px",
    "text-align": "center",
    "text-decoration": "none",
    "font-family":"MarketDeco"
    })

    $(".box").hover(function () {
        $(this).children().eq(2).css({"left":"0"})
    },function () {
        $(this).children().eq(2).css({"left":"350px"})
    })
    $(".contentbtn").hover(function () {
        $(this).css({"background-color": "#ffd2d2",})
    },function () {
        $(this).css({"background-color": "#FFA0A0",})
    })

})