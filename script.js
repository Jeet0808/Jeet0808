// methode 1
// let modebtn = document.querySelector("#mode");
// let currentmode = "light";

// modebtn.addEventListener("click", () => {
//     if (currentmode === "light") {
//         currentmode = "dark";
//         document.querySelector("body").style.backgroundColor = "rgb(71, 5, 5)";
//     }
//     else{
//         currentmode = "light";
//         document.querySelector("body").style.backgroundColor = "rgb(238, 198, 198)";
//     }
//     console.log(currentmode);
// });
// methode 2
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let photo = document.querySelector("#photo");



let currentmode = "light";

modebtn.addEventListener("click", () => {
    if (currentmode === "light") {
        currentmode = "dark";
       body.classList.add("dark");
       photo.classList.add("dark");
       container.classList.add("dark");
       
       body.classList.remove('light');
     
       photo.classList.remove('light');
       container.classList.remove('light');
       document.querySelector("#id2").style.color = "bisque";
       
    }
    else{
        currentmode = "light";
        body.classList.add("light");
        photo.classList.add("light");
        container.classList.add("light");
        
        body.classList.remove('dark');
       
        photo.classList.remove('dark');
        container.classList.remove('dark');
        document.querySelector("#id2").style.color = "";

       
    }
    console.log(currentmode);
});