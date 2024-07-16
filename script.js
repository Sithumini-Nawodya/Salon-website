document.getElementById('btn').addEventListener("click",function(){
    document.getElementsByClassName("container")[0].classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".container").classList.remove("active");
});

document.getElementById('next-btn').addEventListener("click",function(){
    document.querySelector(".container").classList.remove("active");
    document.getElementsByClassName("time-container")[0].classList.add("active");
    
});




