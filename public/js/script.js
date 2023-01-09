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
    translateX = -2.6
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


// Menu-bar hover effect
var hoverEffectPositionX, hoverEffectPositionY;
var pageName;

const menubar = document.querySelectorAll('.menu-bar')[0];
var menuHover;

menubar.addEventListener('mouseover',()=>{
    menuHover = true;
});

menubar.addEventListener('mouseout',()=>{
    menuHover = false;
})

document.querySelectorAll('.menu-bar a').forEach((item)=>{        
    if(item.classList[0] == 'active'){ //only for the menu bar item whose page it is
        pageName = item.dataset.name;
        switch(pageName){
            case 'home':
                hoverEffectPositionY = 6;
                hoverEffectPositionX = 0.55;
                break;
            
            case 'sports':
                hoverEffectPositionY = 10.45;
                hoverEffectPositionX = 0.5;
                break;
            
            case 'games':
                hoverEffectPositionY = 14.9;
                hoverEffectPositionX = 0.58;
                break;
            
            case 'khelxa':
                hoverEffectPositionY = 19.3;
                hoverEffectPositionX = 0.55;
                break;
            
            case 'shop':
                hoverEffectPositionY = 24.6;
                hoverEffectPositionX = 0.6;
                break;
            
            case 'bookmark':
                hoverEffectPositionY = 27.8;
                hoverEffectPositionX = 0.55;
                break;
    
        }

        document.querySelectorAll('.menu-bar .menu-hover')[0].style.top = `${hoverEffectPositionY}em`;
        document.querySelectorAll('.menu-bar .menu-hover')[0].style.left = `${hoverEffectPositionX}em`;
    }

    item.addEventListener('mouseover',()=>{
        changeHoverer(item);
    });

    item.addEventListener('mouseout',()=>{
       setTimeout(()=>{
        if(!menuHover){ 
            repositionHoverer();  
        }
       }, 100) ;
             
    });
});

function changeHoverer(item){ // when different item hovered over, change the position of menu-hoverer
    pageName = item.dataset.name;
    switch(pageName){
        case 'home':
            hoverEffectPositionY = 6;
            hoverEffectPositionX = 0.55;
            break;
        
        case 'sports':
            hoverEffectPositionY = 10.45;
            hoverEffectPositionX = 0.5;
            break;
        
        case 'games':
            hoverEffectPositionY = 14.9;
            hoverEffectPositionX = 0.58;
            break;
        
        case 'khelxa':
            hoverEffectPositionY = 19.3;
            hoverEffectPositionX = 0.55;
            break;
        
        case 'shop':
            hoverEffectPositionY = 24.6;
            hoverEffectPositionX = 0.6;
            break;
        
        case 'bookmark':
            hoverEffectPositionY = 27.8;
            hoverEffectPositionX = 0.55;
            break;

    }

    document.querySelectorAll('.menu-bar .menu-hover')[0].style.top = `${hoverEffectPositionY}em`;
    document.querySelectorAll('.menu-bar .menu-hover')[0].style.left = `${hoverEffectPositionX}em`;
}


function repositionHoverer(){
    document.querySelectorAll('.menu-bar a').forEach((item)=>{        
        if(item.classList[0] == 'active'){ //only for the menu bar item whose page it is
            pageName = item.dataset.name;
            switch(pageName){
                case 'home':
                    hoverEffectPositionY = 6;
                    hoverEffectPositionX = 0.55;
                    break;
                
                case 'sports':
                    hoverEffectPositionY = 10.45;
                    hoverEffectPositionX = 0.5;
                    break;
                
                case 'games':
                    hoverEffectPositionY = 14.9;
                    hoverEffectPositionX = 0.58;
                    break;
                
                case 'khelxa':
                    hoverEffectPositionY = 19.3;
                    hoverEffectPositionX = 0.55;
                    break;
                
                case 'shop':
                    hoverEffectPositionY = 24.6;
                    hoverEffectPositionX = 0.6;
                    break;
                
                case 'bookmark':
                    hoverEffectPositionY = 27.8;
                    hoverEffectPositionX = 0.55;
                    break;
    
            }
    
            document.querySelectorAll('.menu-bar .menu-hover')[0].style.top = `${hoverEffectPositionY}em`;
            document.querySelectorAll('.menu-bar .menu-hover')[0].style.left = `${hoverEffectPositionX}em`;
        }
    
});
}
