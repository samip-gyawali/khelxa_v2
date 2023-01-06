const reminderButtons = document.querySelectorAll('.controls .reminder i');
const userProfile = document.querySelector('.user .user-profile');
var settingsHidden = true;

reminderButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        button.classList.toggle('fa-regular');
        button.classList.toggle('fa-solid');
    });
});


// Responsive design user-settings
var screenSize = window.visualViewport.width;
var translateX = 0;
if(screenSize >=1300 && screenSize <= 1440){
    translateX = -0.5
}else if(screenSize <=1300 ){
    translateX = -2
}


anime({
    targets : '.user .user-settings',
    translateX : '5vw',
    opacity : 0,
    duration : 0,
});

userProfile.addEventListener('click',()=>{
    if(settingsHidden){
        anime({
            targets : '.user .user-profile img',
            rotateZ : -360,
            duration : 1200,
            easing: 'easeInOutExpo'
        });

        anime({
            targets : '.user .user-settings',
            translateX : `${translateX}vw`,
            opacity : 1,
            duration : 1200,
            easing: 'easeInOutExpo'
        });

        anime({
            targets : '.user .user-details',
            opacity : 0,
            duration : 1200,
            easing : 'easeInOutExpo'
        });

        settingsHidden = false;

    }else{
        anime({
            targets : '.user .user-profile img',
            rotateZ : 360,
            duration : 1200,
            easing: 'easeInOutExpo'
        });

        anime({
            targets : '.user .user-settings',
            translateX : '5vw',
            opacity : 0,
            duration : 1200,
            easing: 'easeInOutExpo'
        });

        anime({
            targets : '.user .user-details',
            opacity : 1,
            duration : 1200,
            easing : 'easeInOutExpo'
        });

        settingsHidden = true;
    }
    
});
