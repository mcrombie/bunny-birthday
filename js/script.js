console.log("hello");

function animateWave(){
    document.getElementById("arm-left").className = "r-body-part animate-wave";
    
}
function animateSpeak(){
    console.log("Make speaking noise")
    document.getElementById("talk-bubble").className = "animate-speak";
    
}
function animateJump(){
    // Array.prototype.forEach.call(document.getElementsByClassName("r-body-part"), function(element){
    //     element.classList = "r-body-part animate-jump";
    // })
    console.log("jump")
    document.getElementById("r-body").className = "animate-jump";
}

function animateTwitterPate(){
    // Array.prototype.forEach.call(document.getElementsByClassName("r-body-part"), function(element){
    //     element.classList = "r-body-part animate-jump";
    // })
    console.log("twitterpate")
    document.getElementById("eye-left-heart").className = "animate-twitterpate";
}

function resetAnimations(){
    document.getElementById("arm-left").classList.remove("animate-wave");
    document.getElementById("talk-bubble").classList.remove("animate-speak");
    document.getElementById("r-body").classList.remove("animate-jump");
    document.getElementById("eye-left-heart").classList.remove("animate-twitterpate");

    Array.prototype.forEach.call(document.getElementsByClassName("r-body-part"), function(element){
        element.classList = "r-body-part";
    })
}