var score = 0;
var stage, w, h, loader;
var sky, Elise, ground, hill, hill2, syringe, syringe2, firstaidkit, firstaidkit2, bandaid, bandaid2, pill, badcell, badcell2;
var randnum = Math.floor(Math.random() * (0 - 13) + 13);

var answer = [
    'http://www.craigresearchlabs.com/cancer.html',
    'http://caretoclick.com//help-fight-cancer/donate-clicks-likes-and-tweets-to-fund-cancer-research', 
    'http://www.care2.com/click-to-donate/breast-cancer/',
    'http://thediabetessite.greatergood.com/clickToGive/dbs/home',
    'http://caretoclick.com//support-childrens-health/donate-clicks-likes-and-tweets-to-fund-medical-assistance-for-children',
    'http://thebreastcancersite.greatergood.com/clickToGive/bcs/home',
    'http://clicktogive.com/impact_kids_cancer',
    'http://www.heart.org/HEARTORG/Giving/Support-Your-Community_UCM_311100_Article.jsp#.V6EG5pMrLVo',
    ]
    
    



function init() {
    examples.showDistractor();
    stage = new createjs.Stage("animal");

    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    manifest = [
        {src: "me.png", id: "Elise"},
        {src: "sky.png", id: "sky"},
        {src: "ground.png", id: "ground"},
        {src: "hill1.png", id: "hill"},
        {src: "hill2.png", id: "hill2"},
        {src: "pill.png", id: "pill"},
        {src: "firstaidkit.png", id: "firstaidkit"},
        {src: "bandaid.png", id: "bandaid"},
        {src: "badcell.png", id: "badcell"},
        {src: "syringe.png", id: "syringe"},
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
            "images": [loader.getResult("Elise")],
            "frames": {"regX": 0, "height": 223, "count": 2, "regY": 10, "width": 150},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

    var spriteSheet2 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("syringe")],
            "frames": {"regX": 0, "height": 66, "count": 1, "regY": 0, "width": 58},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

        var spriteSheet3 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("firstaidkit")],
            "frames": {"regX": 0, "height": 49, "count": 1, "regY": 0, "width": 72},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });
        
        
  		var spriteSheet4 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("pill")],
            "frames": {"regX": 0, "height": 34, "count": 1, "regY": 0, "width": 72},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });
      
      
      	var spriteSheet5 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("bandaid")],
            "frames": {"regX": 0, "height": 61, "count": 1, "regY": 0, "width": 72},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });
        
        
        var spriteSheet6 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("badcell")],
            "frames": {"regX": 0, "height": 66, "count": 1, "regY": 0, "width": 70},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });
        
        
        
        

// 		var x = event.clientX;    
// 		var y = event.clientY; 
    Elise = new createjs.Sprite(spriteSheet);
// 		if(2==2){
// 			Elise.y = 10;
// 		}
// 		else{
// 			Elise.y = 35;
// 		}
    Elise.y = 35;


    syringe = new createjs.Sprite(spriteSheet2);
    syringe.x = Math.random() * (400 - 900) + 900;
    syringe.y = Math.random() * (140 - 10) + 10;

    syringe2 = new createjs.Sprite(spriteSheet2);
    syringe2.x= Math.random() * (400 - 900) + 900;
    syringe2.y= Math.random() * (140 - 20) + 20;

    


    firstaidkit = new createjs.Sprite(spriteSheet3);
    firstaidkit.x = 1000;
    firstaidkit.y = Math.random() * (140 - 10) + 10;

    firstaidkit2 = new createjs.Sprite(spriteSheet3);
    firstaidkit2.x = Math.random() * (300 - 1000) + 1000;
    firstaidkit2.y = Math.random() * (140 - 30) + 10;

    
	bandaid = new createjs.Sprite(spriteSheet5);
    bandaid.x = 1000;
    bandaid.y = Math.random() * (140 - 10) + 10;

    bandaid2 = new createjs.Sprite(spriteSheet5);
    bandaid.x = Math.random() * (300 - 1000) + 1000;
    bandaid2.y = Math.random() * (140 - 30) + 10;

    
    pill = new createjs.Sprite(spriteSheet4);
    pill.x = 1000;
    pill.y = Math.random() * (140 - 10) + 10;
    
    badcell = new createjs.Sprite(spriteSheet6);
    badcell.x = 1000;
    badcell.y = Math.random() * (140 - 10) + 10;

    badcell2 = new createjs.Sprite(spriteSheet6);
    badcell.x = Math.random() * (300 - 1000) + 1000;
    badcell2.y = Math.random() * (140 - 30) + 10;


    



    stage.addChild(sky, hill, hill2, ground, Elise, syringe, syringe2, firstaidkit, firstaidkit2, bandaid, bandaid2, pill, badcell, badcell2);
    stage.addEventListener("stagemousedown", handleJumpStart);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);
}

function handleJumpStart() {
    //Elise.gotoAndPlay("jump");
    Elise.y -=40;
}

function collisionborder() {
	    if (Elise.x<(syringe.x+50) && (Elise.y+50)<(syringe.y+50)&& Elise.x>(syringe.x-50) && (Elise.y+50)>(syringe.y-50)){	
        stage.removeChild(syringe);
        stage.addChild(syringe);
        syringe.x = 900;
        score +=1;
    }

    if (Elise.x<(syringe2.x+50) && (Elise.y+50)<(syringe2.y+50)&& Elise.x>(syringe2.x-50) && (Elise.y+50)>(syringe2.y-50)){	
        stage.removeChild(syringe2);
        stage.addChild(syringe2);
        syringe2.x = 1000;
        syringe2.y= Math.random() * (140 - 20) + 20;
        score +=1;
    }

    
    
    if (Elise.x<(firstaidkit.x+50) && (Elise.y+50)<(firstaidkit.y+50)&& Elise.x>(firstaidkit.x-50) && (Elise.y+50)>(firstaidkit.y-50)){	
        stage.removeChild(firstaidkit);
        stage.addChild(firstaidkit);
        firstaidkit.x = 900;
        score +=1;
    }

    if (Elise.x<(firstaidkit2.x+50) && (Elise.y+50)<(firstaidkit2.y+50)&& Elise.x>(firstaidkit2.x-50) && (Elise.y+50)>(firstaidkit2.y-50)){	
        stage.removeChild(firstaidkit2);
        stage.addChild(firstaidkit2);
        firstaidkit2.x = 1000;
        firstaidkit2.y= Math.random() * (140 - 30) + 30;
        score +=1;
    }

   

	if (Elise.x<(bandaid.x+50) && (Elise.y+50)<(bandaid.y+50)&& Elise.x>(bandaid.x-50) && (Elise.y+50)>(bandaid.y-50)){	
        stage.removeChild(bandaid);
        stage.addChild(bandaid);
        bandaid.x = 900;
        score +=1;
    }

    if (Elise.x<(bandaid2.x+50) && (Elise.y+50)<(bandaid2.y+50)&& Elise.x>(bandaid2.x-50) && (Elise.y+50)>(bandaid2.y-50)){	
        stage.removeChild(bandaid2);
        stage.addChild(bandaid2);
        bandaid2.x = 1000;
        bandaid2.y= Math.random() * (140 - 30) + 30;
        score +=1;
    }

    
    if (Elise.x<(pill.x+50) && (Elise.y+50)<(pill.y+50)&& Elise.x>(pill.x-50) && (Elise.y+50)>(pill.y-50)){	
        stage.removeChild(pill);
        stage.addChild(pill);
        pill.x = 900;
        score +=2;
    }
    
    
    if (Elise.x<(badcell.x+50) && (Elise.y+50)<(badcell.y+50)&& Elise.x>(badcell.x-50) && (Elise.y+50)>(badcell.y-50)){	
        stage.removeChild(badcell);
        stage.addChild(badcell);
        badcell.x = 900;
        score -=1;
    }

    if (Elise.x<(badcell2.x+50) && (Elise.y+50)<(badcell2.y+50)&& Elise.x>(badcell2.x-50) && (Elise.y+50)>(badcell2.y-50)){	
        stage.removeChild(badcell2);
        stage.addChild(badcell2);
        badcell2.x = 1000;
        badcell2.y= Math.random() * (140 - 30) + 30;
        score -=1;
    }


    if (syringe.x < -50) {
        syringe.x = 900;
    }

    if (syringe2.x < -50) {
        syringe2.x = 1000;
        syringe2.y= Math.random() * (140 - 20) + 20;
    }

    if (firstaidkit.x < -50) {
        firstaidkit.x = 900;
    }

    if (firstaidkit2.x < -50) {
        firstaidkit2.x = 1000;
        firstaidkit2.y= Math.random() * (140 - 30) + 30;
    }

    
    if (bandaid.x < -50) {
        bandaid.x = 900;
    }

    if (bandaid2.x < -50) {
        bandaid2.x = 1000;
        bandaid2.y= Math.random() * (140 - 30) + 30;
    }

   
    if (pill.x < -50) {
        pill.x = 900;
    }
    
     if (badcell.x < -50) {
        badcell.x = 900;
    }

    if (badcell2.x < -50) {
        badcell2.x = 1000;
        badcell2.y= Math.random() * (140 - 30) + 30;
    }

   


    
}



function tick(event) {
    var deltaS = event.delta / 1000;
    var position = Elise.x + 0 * deltaS;

    var EliseW = Elise.getBounds().width * Elise.scaleX;
    Elise.x = (position >= w + EliseW) ? -EliseW : position;


    ground.x = (ground.x - deltaS * 150) % ground.tileW;
    hill.x = (hill.x - deltaS * 30);
    if (hill.x + hill.image.width * hill.scaleX <= 0) {
        hill.x = w;
    }
    hill2.x = (hill2.x - deltaS * 45);
    if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
        hill2.x = w;

    }

	syringe.x = (syringe.x - deltaS * 100);

    syringe2.x =(syringe2.x - deltaS * 100);

   

    firstaidkit.x = (firstaidkit.x - deltaS * 100);

    firstaidkit2.x = (firstaidkit2.x - deltaS * 100);

    
    bandaid.x = (bandaid.x - deltaS * 100);

    bandaid2.x = (bandaid2.x - deltaS * 100);

   

	pill.x = (pill.x - deltaS * 100);


	badcell.x = (badcell.x - deltaS * 100);

    badcell2.x = (badcell2.x - deltaS * 100);

    
    if (Elise.y < -50) {
        Elise.y = -40;
    }

    if (Elise.y < 140) {
        Elise.y +=1;
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


    if (score >= 50)	{
 		//alert(answer[Math.random() * (0 - 2) + 2] )
 		document.getElementById("link_content").href = answer[randnum];
 		modal.style.display = "block";
 	    stage.removeChild(sky, hill, hill2, ground, Elise, syringe, syringe2, firstaidkit, firstaidkit2,  bandaid, bandaid2, pill, badcell, badcell2);
    }

    stage.update(event);
    
    $('#score').html(score);
}

document.addEventListener('DOMContentLoaded', init, false);