var score = 0;
var stage, w, h, loader;
var sky, olivia, ground, hill, hill2, dog, dog2, dog3, dog4, dog5, book, book2, book3, book4, book5;
var randnum = Math.floor(Math.random() * (0 - 13) + 13);

var answer = [
    'http://clicktogive.com/animal_care',
    'http://www.caretoclick.com/pets', 
    'http://theanimalrescuesite.com/',
    'http://www.care2.com/click-to-donate/animal-rescue/',
    'http://www.freekibble.com/',
    'http://barkingmad.co.za/click-to-feed-2016/',
    'http://www.clicanimaux.com/catalog/accueil.php?sites_id=2 ',
    'http://www.freekibble.com/kat/',
    'http://www.freekibble.com/litter/',
    'http://www.care2.com/click-to-donate/big-cats/',
    'http://bigcatrescue.org/get-involved/volunteer/i-care-click-to-feed-a-big-cat/',
    'http://www.care2.com/click-to-donate/primates/',
    'http://www.care2.com/click-to-donate/wolves/',
    'http://www.care2.com/click-to-donate/seals/'    
]



function init() {
    examples.showDistractor();
    stage = new createjs.Stage("animal");

    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    manifest = [
        {src: "okay.png", id: "olivia"},
        {src: "sky.png", id: "sky"},
        {src: "ground.png", id: "ground"},
        {src: "hill1.png", id: "hill"},
        {src: "hill2.png", id: "hill2"},
        {src: "pencil2.png", id: "pencil"},
        {src: "book.png", id: "book"}
    ];

    loader = new createjs.LoadQueue(false);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest, true, "assets/art/");
}

function handleComplete() {
    examples.hideDistractor();

    sky = new createjs.Shape();
    sky.graphics.beginBitmapFill(loader.getResult("sky")).drawRect(0, 0, w, h);

    var groundImg = loader.getResult("ground");
    ground = new createjs.Shape();
    ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, groundImg.height);
    ground.tileW = groundImg.width;
    ground.y = h - groundImg.height;

    hill = new createjs.Bitmap(loader.getResult("hill"));
    hill.setTransform(Math.random() * w, h - hill.image.height * 4 - groundImg.height, 4, 4);
    hill.alpha = 0.5;

    hill2 = new createjs.Bitmap(loader.getResult("hill2"));
    hill2.setTransform(Math.random() * w, h - hill2.image.height * 3 - groundImg.height, 3, 3);

    var spriteSheet = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("olivia")],
            "frames": {"regX": 0, "height": 197, "count": 2, "regY": 0, "width": 150},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

    var spriteSheet2 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("pencil")],
            "frames": {"regX": 0, "height": 36, "count": 1, "regY": 0, "width": 20},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

        var spriteSheet3 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("book")],
            "frames": {"regX": 0, "height": 33, "count": 1, "regY": 0, "width": 50},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

// 		var x = event.clientX;    
// 		var y = event.clientY; 
    olivia = new createjs.Sprite(spriteSheet);
// 		if(2==2){
// 			olivia.y = 10;
// 		}
// 		else{
// 			olivia.y = 35;
// 		}
    olivia.y = 35;


    dog = new createjs.Sprite(spriteSheet2);
    dog.x = Math.random() * (400 - 900) + 900;
    dog.y = Math.random() * (140 - 10) + 10;

    dog2 = new createjs.Sprite(spriteSheet2);
    dog2.x= Math.random() * (400 - 900) + 900;
    dog2.y= Math.random() * (140 - 20) + 20;

    dog3 = new createjs.Sprite(spriteSheet2);
    dog3.x= Math.random() * (400 - 900) + 900;
    dog3.y= Math.random() * (140 - 40) + 30;

    dog4 = new createjs.Sprite(spriteSheet2);
    dog4.x= Math.random() * (400 - 900) + 900;
    dog4.y= Math.random() * (140 - 60) + 40;

    dog5 = new createjs.Sprite(spriteSheet2);
    dog5.x= Math.random() * (400 - 900) + 900;
    dog5.y= Math.random() * (140 - 80) + 50;

    book = new createjs.Sprite(spriteSheet3);
    book.x = 1000;
    book.y = Math.random() * (140 - 10) + 10;

    book2 = new createjs.Sprite(spriteSheet3);
    book2.x = Math.random() * (300 - 1000) + 1000;
    book2.y = Math.random() * (140 - 30) + 10;

    book3 = new createjs.Sprite(spriteSheet3);
    book3.x = Math.random() * (300 - 1000) + 1000;
    book3.y = Math.random() * (140 - 50) + 10;

    book4 = new createjs.Sprite(spriteSheet3);
    book4.x = Math.random() * (300 - 1000) + 1000;
    book4.y = Math.random() * (140 - 70) + 10;

    book5 = new createjs.Sprite(spriteSheet3);
    book5.x = Math.random() * (300 - 1000) + 1000;
    book5.y = Math.random() * (140 - 90) + 10;


    stage.addChild(sky, hill, hill2, ground, olivia, dog, dog2, dog3, dog4, dog5, book, book2, book3, book4, book5);
    stage.addEventListener("stagemousedown", handleJumpStart);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);
}

function handleJumpStart() {
    //olivia.gotoAndPlay("jump");
    olivia.y -=40;
}

function collisionborder() {
	    if (olivia.x<(dog.x+50) && (olivia.y+50)<(dog.y+50)&& olivia.x>(dog.x-50) && (olivia.y+50)>(dog.y-50)){	
        stage.removeChild(dog);
        stage.addChild(dog);
        dog.x = 900;
        score +=1;
    }

    if (olivia.x<(dog2.x+50) && (olivia.y+50)<(dog2.y+50)&& olivia.x>(dog2.x-50) && (olivia.y+50)>(dog2.y-50)){	
        stage.removeChild(dog2);
        stage.addChild(dog2);
        dog2.x = 1000;
        dog2.y= Math.random() * (140 - 20) + 20;
        score +=1;
    }

    if (olivia.x<(dog3.x+50) && (olivia.y+50)<(dog3.y+50)&& olivia.x>(dog3.x-50) && (olivia.y+50)>(dog3.y-50)){	
        stage.removeChild(dog3);
        stage.addChild(dog3);
        dog3.x = 1200;
        dog3.y= Math.random() * (140 - 40) + 40;
        score +=1;
    }

    if (olivia.x<(dog4.x+50) && (olivia.y+50)<(dog4.y+50)&& olivia.x>(dog4.x-50) && (olivia.y+50)>(dog4.y-50)){	
        stage.removeChild(dog4);
        stage.addChild(dog4);
        dog4.x = 1400;
        dog4.y= Math.random() * (140 - 60) + 60;
        score +=1;
    }

    if (olivia.x<(dog5.x+50) && (olivia.y+50)<(dog5.y+50)&& olivia.x>(dog5.x-50) && (olivia.y+50)>(dog5.y-50)){	
        stage.removeChild(dog5);
        stage.addChild(dog5);
        dog5.x = 1600;
        dog5.y= Math.random() * (140 - 80) + 80;
        score +=1;
    }

    if (olivia.x<(book.x+50) && (olivia.y+50)<(book.y+50)&& olivia.x>(book.x-50) && (olivia.y+50)>(book.y-50)){	
        stage.removeChild(book);
        stage.addChild(book);
        book.x = 900;
        score +=1;
    }

    if (olivia.x<(book2.x+50) && (olivia.y+50)<(book2.y+50)&& olivia.x>(book2.x-50) && (olivia.y+50)>(book2.y-50)){	
        stage.removeChild(book2);
        stage.addChild(book2);
        book2.x = 1000;
        book2.y= Math.random() * (140 - 30) + 30;
        score +=1;
    }

    if (olivia.x<(book3.x+50) && (olivia.y+50)<(book3.y+50)&& olivia.x>(book3.x-50) && (olivia.y+50)>(book3.y-50)){	
        stage.removeChild(book3);
        stage.addChild(book3);
        book3.x = 1200;
        book3.y= Math.random() * (140 - 50) + 50;
        score +=1;
    }

    if (olivia.x<(book4.x+50) && (olivia.y+50)<(book4.y+50)&& olivia.x>(book4.x-50) && (olivia.y+50)>(book4.y-50)){	
        stage.removeChild(book4);
        stage.addChild(book4);
        book4.x = 1400;
        book4.y= Math.random() * (140 - 70) + 70;
        score +=1;
    }

    if (olivia.x<(book5.x+50) && (olivia.y+50)<(book5.y+50)&& olivia.x>(book5.x-50) && (olivia.y+50)>(book5.y-50)){	
        stage.removeChild(book5);
        stage.addChild(book5);
        book5.x = 1600;
        book5.y= Math.random() * (140 - 90) + 90;
        score +=1;
    }

    if (dog.x < -50) {
        dog.x = 900;
    }

    if (dog2.x < -50) {
        dog2.x = 1000;
        dog2.y= Math.random() * (140 - 20) + 20;
    }

    if (dog3.x < -50) {
        dog3.x = 1200;
        dog3.y= Math.random() * (140 - 40) + 40;
    }

    if (dog4.x < -50) {
        dog4.x = 1400;
        dog4.y= Math.random() * (140 - 60) + 60;
    }

    if (dog5.x < -50) {
        dog5.x = 1600;
        dog5.y= Math.random() * (140 - 80) + 80;
    }

    if (book.x < -50) {
        book.x = 900;
    }

    if (book2.x < -50) {
        book2.x = 1000;
        book2.y= Math.random() * (140 - 30) + 30;
    }

    if (book3.x < -50) {
        book3.x = 1200;
        book3.y= Math.random() * (140 - 50) + 50;
    }

    if (book4.x < -50) {
        book4.x = 1400;
        book4.y= Math.random() * (140 - 70) + 70;
    }

    if (book5.x < -50) {
        book5.x = 1600;
        book5.y= Math.random() * (140 - 90) + 90;
	}
}



function tick(event) {
    var deltaS = event.delta / 1000;
    var position = olivia.x + 0 * deltaS;

    var oliviaW = olivia.getBounds().width * olivia.scaleX;
    olivia.x = (position >= w + oliviaW) ? -oliviaW : position;


    ground.x = (ground.x - deltaS * 150) % ground.tileW;
    hill.x = (hill.x - deltaS * 30);
    if (hill.x + hill.image.width * hill.scaleX <= 0) {
        hill.x = w;
    }
    hill2.x = (hill2.x - deltaS * 45);
    if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
        hill2.x = w;

    }

	dog.x = (dog.x - deltaS * 100);

    dog2.x =(dog2.x - deltaS * 100);

    dog3.x = (dog3.x - deltaS * 100);

    dog4.x = (dog4.x - deltaS * 100);

    dog5.x = (dog5.x - deltaS * 100);

    book.x = (book.x - deltaS * 100);

    book2.x = (book2.x - deltaS * 100);

    book3.x = (book3.x - deltaS * 100);

    book4.x = (book4.x - deltaS * 100);

    book5.x = (book5.x - deltaS * 100);
    
    if (olivia.y < -50) {
        olivia.y = -40;
    }

    if (olivia.y < 140) {
        olivia.y +=1;
    }

	collisionborder();
	

// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


    if (score >= 20)	{
 		//alert(answer[Math.random() * (0 - 2) + 2] )
 		//document.getElementById("link_content").href = answer[randnum];
 		modal.style.display = "block";
 	    stage.removeChild(sky, hill, hill2, ground, olivia, dog, dog2, dog3, dog4, dog5, book, book2, book3, book4, book5);
    }

    stage.update(event);
    
    $('#score').html(score);
}

document.addEventListener('DOMContentLoaded', init, false);