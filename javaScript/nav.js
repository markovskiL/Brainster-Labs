// Hamburger menu in navigation

const navElements = document.querySelector("#navigation-elements")
const navToggle = document.querySelector(".menu-icon")
const navToggleClose = document.querySelector(".menu-icon-close")

navToggle.addEventListener("click", () =>{
     const visibility = navElements.getAttribute("data-visible")
     console.log(visibility)
     if(visibility === "false"){
         navElements.setAttribute("data-visible", true)
     }
})

navToggleClose.addEventListener("click", () =>{
    const visibility = navElements.getAttribute("data-visible")
    console.log(visibility)
    if(visibility === "true"){
        navElements.setAttribute("data-visible", false)
    }
})
