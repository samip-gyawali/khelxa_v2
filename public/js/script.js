const reminderButtons = document.querySelectorAll('.controls .reminder i');
const userProfile = document.querySelector('.user .user-profile');
var settingsHidden = true;

reminderButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        button.classList.toggle('fa-regular');
        button.classList.toggle('fa-solid');
    });
});

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
            translateX : '0vw',
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
