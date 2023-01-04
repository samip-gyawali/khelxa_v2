const express = require('express');

// express-app
const app = express();

//middle-ware
app.use(express.static('./public'));


app.set('view engine','ejs');

const items = [

    {
        home : 'Chelsea',
        away : 'Real Madrid',
        src : '/images/match-images/chevrma.jpg',
        comp : 'UEFA Champions League',
        type : 'Live',
        date : 'Jul 31',
        time : '01:45 AM'
    },

    {
        home : 'Manchester City',
        away : 'Bayern Munich',
        src : '/images/match-images/mcivbay.webp',
        comp : 'UEFA Champions League',
        type : 'replay',
        date : 'Aug 03',
        time : '07:45 PM'
    },
    
    {
        home : 'Roman Reigns',
        away : 'Brock Lesnar',
        src : 'https://i.imgur.com/hyZeGOi.jpg',
        comp : 'SummerSlam 2022',
        type : 'scheduled',
        date : 'Jul 30',
        time : '05:45 PM'
    },
    
    {
        home : 'Nepal',
        away : 'Oman',
        src : 'https://i.imgur.com/2XCsHgI.png',
        comp : 'Oman tour of Nepal',
        type : 'scheduled',
        date : 'August 10',
        time : '11:00 AM'
    },

    {
        home : 'Chennai Super Kings',
        away : 'Mumbai Indians',
        src : '/images/match-images/cskvmi.webp',
        comp : 'Indian Premier League',
        type : 'scheduled',
        date : 'Aug 18',
        time : '08:00 PM'
    }
];

const users = [
    {
        name : 'Cristiano Ronaldo',
        src : '/images/user-images/cristiano.jpg',
        subType : 'platinum'
    },

    {
        name : 'Kevin De Bruyne',
        src : '/images/user-images/debruyne.jpg',
        subType : 'premium'
    },

    {
        name : 'Erling Haaland',
        src : '/images/user-images/haaland.jpg',
        subType : 'standard'
    },

    {
        name : 'Kylian Mbappe',
        src : '/images/user-images/mbappe.jpg',
        subType : 'basic'
    },

    {
        name : 'Lionel Messi',
        src : '/images/user-images/messi.jpg',
        subType : 'platinum'
    },

    {
        name : 'Mohammed Salah',
        src : '/images/user-images/mosalah.jpg',
        subType : 'standard'
    }
];



app.get('/',(req,res)=>{
    var thisUser = Math.floor(Math.random() * users.length)
    res.render('index', { title : "Home", items, user : users[thisUser] });
});

app.listen(process.env.PORT || '8080', ()=>{
    console.log("Listening to requests at port 8080");
});
