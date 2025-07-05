document.addEventListener("DOMContentLoaded", () => {
    let menu_icon = document.querySelector('img[alt="menu icon"]');
    let navbar = document.getElementsByClassName("navbar")[0];
    let cancel = document.getElementById("cancel");
    let ul = document.querySelector("ul");
    let header = document.querySelector("header");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    let menu = document.getElementsByClassName("menu")[0];
    let blur = document.getElementsByClassName("blur")[0];
    menu_icon.addEventListener("click", () => {
        let VW = document.documentElement.clientWidth;
        if(VW > 1030){
            navbar.style.width = "25vw";
            navbar.style.visibility = "visible";
            navbar.style.transition = "width 300ms ease-out";
            cancel.style.width = "calc(25vw - 20px)";
            cancel.style.visibility = "visible";
            cancel.style.transition = "width 300ms ease-out";
            ul.style.width = "calc(25vw - 20px)";
            ul.style.visibility = "visible";
            ul.style.transition = "width 300ms ease-out";
            header.style.width = "75vw"; 
            header.style.transition = "width 300ms ease-out";
            menu.style.width = "0vw";
            menu.style.transition = "width 300ms ease-out";
            main.style.width = "75vw";
            main.style.transition = "width 300ms ease-out";
            footer.style.width = "75vw";
            footer.style.transition = "width 300ms ease-out";
            menu_icon.style.visibility = "hidden";
            menu_icon.style.transition = "visibility 300ms ease-out, opacity 300ms ease-out";
        }
        else if(VW <= 1030 && VW > 800){
            navbar.style.width = "35vw";
            navbar.style.visibility = "visible";
            navbar.style.transition = "width 300ms ease-out";
            cancel.style.width = "calc(34vw - 10px)";
            cancel.style.visibility = "visible";
            cancel.style.transition = "width 300ms ease-out";
            ul.style.width = "35vw";
            ul.style.visibility = "visible";
            ul.style.transition = "width 300ms ease-out";
            header.style.width = "65vw"; 
            header.style.transition = "width 300ms ease-out";
            menu.style.width = "0vw";
            menu.style.transition = "width 300ms ease-out";
            main.style.width = "65vw";
            main.style.transition = "width 300ms ease-out";
            footer.style.width = "65vw";
            footer.style.transition = "width 300ms ease-out";
            menu_icon.style.visibility = "hidden";
            menu_icon.style.transition = "visibility 300ms ease-out, opacity 300ms ease-out";
        }
        else if(VW <= 800 && VW > 600){
            navbar.style.width = "45vw";
            navbar.style.visibility = "visible";
            navbar.style.transition = "width 300ms ease-out";
            cancel.style.width = "calc(44vw - 10px)";
            cancel.style.visibility = "visible";
            cancel.style.transition = "width 300ms ease-out";
            ul.style.width = "45vw";
            ul.style.visibility = "visible";
            ul.style.transition = "width 300ms ease-out";
            header.style.width = "55vw"; 
            header.style.transition = "width 300ms ease-out";
            menu.style.width = "0vw";
            menu.style.transition = "width 300ms ease-out";
            main.style.width = "55vw";
            main.style.transition = "width 300ms ease-out";
            footer.style.width = "55vw";
            footer.style.transition = "width 300ms ease-out";
            menu_icon.style.visibility = "hidden";
            menu_icon.style.transition = "visibility 300ms ease-out, opacity 300ms ease-out";
        }
        else if (VW <= 600 && VW > 450){
            navbar.style.width = "45vw";
            navbar.style.visibility = "visible";
            navbar.style.transition = "width 300ms ease-out";
            cancel.style.width = "calc(44vw - 10px)";
            cancel.style.visibility = "visible";
            cancel.style.transition = "width 300ms ease-out";
            ul.style.width = "45vw";
            ul.style.visibility = "visible";
            ul.style.transition = "width 300ms ease-out";
            blur.style.filter = "blur(5px)";
            blur.style.transition = "filter 300ms ease";
        }
        else if(VW <= 450 && VW > 0){
            navbar.style.width = "85vw";
            navbar.style.visibility = "visible";
            navbar.style.transition = "width 300ms ease-out";
            cancel.style.width = "calc(84vw - 10px)";
            cancel.style.visibility = "visible";
            cancel.style.transition = "width 300ms ease-out";
            ul.style.width = "85vw";
            ul.style.visibility = "visible";
            ul.style.transition = "width 300ms ease-out";
            blur.style.filter = "blur(5px)";
            blur.style.transition = "filter 300ms ease";
        }
    });
    
    let close_icon = document.querySelector('img[alt="close icon"]');
    close_icon.addEventListener("click", () => {
        let VW = document.documentElement.clientWidth;
        if(VW > 600){
            navbar.style.width = "0vw";
            navbar.style.visibility = "hidden";
            navbar.style.transition = "width 300ms ease-out, visibility ease-out 300ms, opacity ease-out 300ms";
            cancel.style.width = "0vw";
            cancel.style.visibility = "hidden";
            cancel.style.transition = "width 300ms ease-out, visibility ease-out, opacity ease-out 300ms";
            ul.style.width = "0vw";
            ul.style.visibility = "hidden";
            ul.style.transition = "width 300ms ease-out, visibility ease-out, opacity ease-out 300ms";
            header.style.width = "100vw";
            header.style.transition = "width 300ms ease-out";
            main.style.width = "100vw";
            main.style.transition = "width 300ms ease-out";
            footer.style.width = "100vw";
            footer.style.transition = "width 300ms ease-out";
            menu.style.width = "10vw";
            menu.style.transition = "width 300ms ease-out";
            menu_icon.style.visibility = "visible";
            menu_icon.style.transition = "visibility 300ms ease-out, opacity 300ms ease-out";
        }
        else if(VW <= 600 && VW > 0){
            navbar.style.width = "0vw";
            navbar.style.visibility = "hidden";
            navbar.style.transition = "width 300ms ease-out, visibility ease-out 300ms, opacity ease-out 300ms";
            cancel.style.width = "0vw";
            cancel.style.visibility = "hidden";
            cancel.style.transition = "width 300ms ease-out";
            ul.style.width = "0vw";
            ul.style.visibility = "hidden";
            ul.style.transition = "width 300ms ease-out";
            blur.style.filter = "blur(0px)";
            blur.style.transition = "filter 300ms ease";
        }
    });

    let As = document.querySelectorAll("a");
    As.forEach((a) => {
        a.addEventListener("click", () => {
            let VW = document.documentElement.clientWidth;
            if(VW <= 600 && VW > 0){
                navbar.style.width = "0vw";
                navbar.style.visibility = "hidden";
                navbar.style.transition = "width 300ms ease-out, visibility ease-out 300ms, opacity ease-out 300ms";
                cancel.style.width = "0vw";
                cancel.style.visibility = "hidden";
                cancel.style.transition = "width 300ms ease-out";
                ul.style.width = "0vw";
                ul.style.visibility = "hidden";
                ul.style.transition = "width 300ms ease-out";
                blur.style.filter = "blur(0px)";
                blur.style.transition = "filter 300ms ease";
            }
        });
    });
    
    blur.addEventListener("click", () => {
        let width = parseFloat(getComputedStyle(navbar).width);
        let VW = document.documentElement.clientWidth;
        if(VW <= 600 && VW > 0){
            if(width > window.innerWidth*0.20){
                navbar.style.width = "0vw";
                navbar.style.visibility = "hidden";
                navbar.style.transition = "width 300ms ease-out, visibility ease-out 300ms, opacity ease-out 300ms";
                cancel.style.width = "0vw";
                cancel.style.visibility = "hidden";
                cancel.style.transition = "width 300ms ease-out";
                ul.style.width = "0vw";
                ul.style.visibility = "hidden";
                ul.style.transition = "width 300ms ease-out";
                blur.style.filter = "blur(0px)";
                blur.style.transition = "filter 300ms ease";
            }
        }
        else if(VW > 600){
            if(width > window.innerWidth*0.20){
                navbar.style.width = "0vw";
                navbar.style.visibility = "hidden";
                navbar.style.transition = "width 300ms ease-out, visibility ease-out 300ms, opacity ease-out 300ms";
                cancel.style.width = "0vw";
                cancel.style.visibility = "hidden";
                cancel.style.transition = "width 300ms ease-out, visibility ease-out, opacity ease-out 300ms";
                ul.style.width = "0vw";
                ul.style.visibility = "hidden";
                ul.style.transition = "width 300ms ease-out, visibility ease-out, opacity ease-out 300ms";
                header.style.width = "100vw";
                header.style.transition = "width 300ms ease-out";
                main.style.width = "100vw";
                main.style.transition = "width 300ms ease-out";
                footer.style.width = "100vw";
                footer.style.transition = "width 300ms ease-out";
                menu.style.width = "10vw";
                menu.style.transition = "width 300ms ease-out";
                menu_icon.style.visibility = "visible";
                menu_icon.style.transition = "visibility 300ms ease-out, opacity 300ms ease-out";
            }
        }
    });
    
});