require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

        //===================================================================================================
        //Setting up the canvas
        //===================================================================================================

        var paper = new Raphael(document.getElementById("centerDiv"));
        var pWidth = 1131;
        var pHeight = 610;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
        var bgRect = paper.rect(0,0,pWidth, pHeight);
        bgRect.attr({"fill": "black"});

        //===================================================================================================
        //Setting up images and texts to be used
        //===================================================================================================
        
        //===================================================================================================
        //Title screen
        //===================================================================================================

        var startBackground = paper.image("images/title.png", 0, 0, pWidth, pHeight);
        var startButton = paper.image("images/play1.png", 410, 380, 300, 200);

        //===================================================================================================
        //Game menu screen
        //===================================================================================================

        var menuBackground = paper.image("images/background1.png", 0, 0, pWidth, pHeight);
        menuBackground.hide();
        var instructionButton = paper.image("images/instructions.png", 150, 125, 300, 80);
        instructionButton.hide();
        var speedButton = paper.image("images/speed.png", 150, 215, 300, 80);
        speedButton.hide();
        var fuelButton = paper.image("images/fuel.png", 150, 305, 300, 80);
        fuelButton.hide();
        var playButton = paper.image("images/fly.png", 150, 395, 300, 80);
        playButton.hide();
        var difficultyLevel = 0
        var currentSpeed = paper.text(390, 85, difficultyLevel).attr({'font-size':'18px', "font-weight": "bold", "fill":"white"});
        currentSpeed.hide();
        var fuelAmount = 50;
        var currentFuel = paper.text(215, 85, fuelAmount + "%").attr({'font-size':'18px', 'font-weight':'bold', 'fill':'white'});
        currentFuel.hide();
        var flyDistance = 0;
        var lastScore = paper.text(860, 310, flyDistance).attr({'font-size':'20px', 'fill':'white'});
        lastScore.hide();
        var highscore = 0;
        var highScore = paper.text(860, 195, highscore).attr({'font-size':'20px', 'fill':'#32CD32'});
        highScore.hide();
        var totaldistance = 0;
        var numberGame = 0;
        var totalDistance = paper.text(860, 400, totaldistance).attr({'font-size':'20px', 'fill':'white'});
        totalDistance.hide();
        var gameTries = paper.text(815, 432, numberGame).attr({'font-size':'20px', 'fill':'white'});
        gameTries.hide()
        var lives = 3;
        var lifenumber = paper.text(930, 85, lives).attr({'font-size':'25px', 'font-weight':'bold', 'fill':'red'});
        lifenumber.hide();

        //===================================================================================================
        //Gameover screen
        //===================================================================================================

        var gameoverBackground = paper.image("images/gameover.png", 0, 0, pWidth, pHeight);
        gameoverBackground.hide();
        var gameoverButton = paper.image("images/playagain.png", 325, 390, 500, 225);
        gameoverButton.hide();
        var gameoverDistance = paper.text(650, 270, totaldistance).attr({'font-size':'25px', 'font-weight':'bold', 'fill':'white'});
        gameoverDistance.hide();
        var gameoverTries = paper.text(650, 330, numberGame).attr({'font-size':'25px', 'font-weight':'bold', 'fill':'white'});
        gameoverTries.hide();
        var gameoverHigh = paper.text(650, 395, highscore).attr({'font-size':'25px', 'font-weight':'bold', 'fill':'white'});
        gameoverHigh.hide();

        //===================================================================================================
        //Instructions screen
        //===================================================================================================

        var instructionBackground = paper.image("images/instructionstory.png", 0, 0, pWidth, pHeight);
        instructionBackground.hide();
        var instructionfuel = paper.image("images/instructionfuel.png", 0, 0, pWidth, pHeight);
        instructionfuel.hide();
        var instructionflight = paper.image("images/instructionflight.png", 0, 0, pWidth, pHeight);
        instructionflight.hide();
        var storybuttonpressed = paper.image("images/storypressed.png", 855, 100, 200, 50);
        storybuttonpressed.hide();
        var storybuttonunpressed = paper.image("images/storyunpressed.png", 855, 100, 200, 50);
        storybuttonunpressed.hide();
        var fuelbuttonpressed = paper.image("images/fuelpressed.png", 855, 230, 200, 50);
        fuelbuttonpressed.hide();
        var fuelbuttonunpressed = paper.image("images/fuelunpressed.png", 855, 230, 200, 50);
        fuelbuttonunpressed.hide();
        var flightbuttonpressed = paper.image("images/flightpressed.png", 855, 300, 200, 50);
        flightbuttonpressed.hide();
        var flightbuttonunpressed = paper.image("images/flightunpressed.png", 855, 300, 200, 50);
        flightbuttonunpressed.hide();
        var backtomenuButton = paper.image("images/backtomenu.png", 840, 380, 250, 150);
        backtomenuButton.hide();
        var instructionsText = paper.text(570, 300, "In a last ditch effort to save humanity, you've volunteered\nto take control of one of the last few spaceships left on Earth.\nIt is now your mission to travel as far as you can\nin order to find a habitable planet to save mankind.\n \nYou are on a one-person team and will have to collect your own fuel and\nmake your own navigational decisions.\n \nThe command wishes you the best of luck.").attr({'font-size':'15px', 'fill':'white'});
        instructionsText.hide()
        var fuelText = paper.text(570, 300, "In order to replenish your fuel supply,\nyou will have to consume the fuel units that are\nsmaller than your current fuel unit upon which your fuel supply will increase.\nMove your fuel unit around by moving your mouse around the screen\nHowever, if you try to collect a fuel unit that is\nlarger than your unit, a life will be lost.\n \nYou start off with 3 lives, and the game is over once it hits 0.").attr({'font-size':'15px', 'fill':'white'});
        fuelText.hide()
        var flightText = paper.text(570, 330, "Navigating through space, you will have to avoid\nthe meteorites and asteroids in your path.\n \nNavigate your spaceship by moving your mouse around the screen,\navoiding the asteroids and meteorites.\nAny collision with a meteorite or asteroid will result in you\nlosing a life.\n \nYou start off with 3 lives, and the game is over once it hits 0.").attr({'font-size':'15px', 'fill':'white'});
        flightText.hide()

        //===================================================================================================
        //Music and sound
        //===================================================================================================

        var backgroundsound = new Audio("sounds/background.wav");
        backgroundsound.autoplay = true;
        backgroundsound.loop = true
        var flybackground = new Audio("sounds/flybackground.wav");
        var fuelbackground = new Audio("sounds/fuelbackground.wav");
        var fuelcollect = new Audio("sounds/fuel.wav");
        var explosion = new Audio("sounds/explosion.mp3");
        var gameoversound = new Audio("sounds/gameover.wav");

        //===================================================================================================
        //Random variables to be used
        //===================================================================================================

        var mouseX = 0;
        var mouseY = 0;
        var flyTime = 0
        var moveValue = 0

        //===================================================================================================
        //Math equations
        //===================================================================================================

        var randInt = function(lim){
            return Math.floor(lim*Math.random())
        };
        var number = function(x,a,b,m,n){
            return (n-m)*(x-a)/(b-a)+m
        };
        var distance = function(x1,y1,x2,y2){
            return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
        };

        //===================================================================================================
        //Array to create asteroids
        //===================================================================================================

        var dot = [];
        i = 0;
            while (i<300){
                
                dot[i] = paper.image("images/meteorite.png", (number(randInt(100), 0, 100, -100, -2300)), (number(randInt(100), 0, 100, -100, -2300)), 45, 45);
                
                i=i+1
            };  

        //===================================================================================================
        //Image to be used for user's spaceship
        //===================================================================================================

        var spaceship = paper.image("images/spaceship.png", mouseX, mouseY, 50, 50);
        spaceship.hide();

        //===================================================================================================
        //Image to be used for user's fuel unit
        //===================================================================================================

        var mouseDot = paper.image("images/playerfuel.png", (mouseX-50), (mouseY-50), 100, 100);
        mouseDot.hide();

        //===================================================================================================
        //Function to be called to go to main menu when user starts a new game
        //===================================================================================================

        var mainMenu = function(){
            startBackground.hide();
            startButton.hide();
            instructionBackground.hide();
            backtomenuButton.hide();
            continueButton.hide();
            gameoverBackground.hide();
            gameoverButton.hide();
            gameoverDistance.hide();
            gameoverTries.hide();
            gameoverHigh.hide();
            fuelScore.hide();
            flyScore.hide();
            fuelbackground.pause();
            flybackground.pause();
            gamebacktomenuButton.hide();

            backgroundsound.play();
            backgroundsound.loop = true;
            //===================================================================================================
            //Resetting values when user starts a new game
            //===================================================================================================
            totaldistance=0
            numberGame=0
            totalDistance.attr({text: totaldistance})
            gameTries.attr({text: numberGame})
            lives=3
            lifenumber.attr({text: lives})
            fuelAmount=50
            currentFuel.attr({text: fuelAmount + "%"});
            flyDistance=0
            lastScore.attr({text: flyDistance})
            //Keep the highscore value
            highscore=highscore
            highScore.attr({text: highscore})

            menuBackground.show();
            instructionButton.show();
            speedButton.show();
            playButton.show();
            fuelButton.show()
            currentSpeed.show();
            currentFuel.show();
            lastScore.show();
            highScore.show();
            totalDistance.show();
            lifenumber.show();
            gameTries.show()
        }

        //===================================================================================================
        //Function to be called to go to main menu from instruction page
        //===================================================================================================

        var mainMenuInstruction = function(){
            instructionBackground.hide();
            backtomenuButton.hide();
            instructionsText.hide();
            instructionfuel.hide();
            instructionflight.hide();
            storybuttonunpressed.hide();
            storybuttonpressed.hide();
            fuelbuttonunpressed.hide();
            fuelbuttonpressed.hide();
            flightbuttonunpressed.hide();
            flightbuttonpressed.hide();
            fuelText.hide();
            flightText.hide()

            menuBackground.show();
            instructionButton.show();
            speedButton.show();
            playButton.show();
            fuelButton.show()
            currentSpeed.show();
            currentFuel.show();
            lastScore.show();
            highScore.show();
            totalDistance.show();
            lifenumber.show();
            gameTries.show()
        }

        //===================================================================================================
        //Function to be called to go to main menu from game pages
        //===================================================================================================

        var backtomain = function(){
            //Reset position of asteroids and fuel
            i = 0;
            while (i<150){
                fuelDot[i].attr({"y": ((randInt(-5000))-500)});

                i=i+1
            };  
            i = 0;
            while (i<300){
                dot[i].attr({"x": number(randInt(100), 0, 100, -100, -2300), "y": number(randInt(100), 0, 100, -100, -2300)})
                dot[i].xpos=dot[i].attr('x');
                dot[i].ypos=dot[i].attr('y');

                i=i+1
            };
            console.log("clicked");
            continueButton.hide();
            fuelCount.hide()
            fuelfly.hide();
            distanceTravelled.hide();
            fuelScore.hide();
            flyScore.hide();
            fuelfull.hide();
            fuelempty.hide();
            fuelbackground.pause();
            flybackground.pause();
            gamebacktomenuButton.hide();

            backgroundsound.play();
            backgroundsound.loop = true;
            menuBackground.show();
            instructionButton.show();
            speedButton.show();
            playButton.show();
            fuelButton.show()
            currentSpeed.show();
            currentFuel.show();
            lastScore.show();
            highScore.show();
            totalDistance.show();
            lifenumber.show()
            gameTries.show()
        }

        //===================================================================================================
        //Function to be called to go to instruction page
        //===================================================================================================

        var instructionPage = function(){
            menuBackground.hide();
            instructionButton.hide();
            speedButton.hide();
            playButton.hide();
            fuelButton.hide()
            currentSpeed.hide();
            currentFuel.hide()
            lastScore.hide();
            highScore.hide();
            totalDistance.hide();
            lifenumber.hide();
            gameTries.hide();
            instructionfuel.hide();
            fuelbuttonpressed.hide();
            flightbuttonunpressed.hide();
            instructionflight.hide();
            storybuttonunpressed.hide();
            fuelbuttonunpressed.hide();
            flightbuttonpressed.hide();
            fuelText.hide();
            flightText.hide();

            instructionBackground.show();
            backtomenuButton.show();
            instructionsText.show();
            storybuttonpressed.show();
            fuelbuttonunpressed.show();
            flightbuttonunpressed.show();
        }

        //===================================================================================================
        //Function to be called to go to fuel page in instructions
        //===================================================================================================

        var fuelinstruction = function(){
            instructionBackground.hide();
            instructionsText.hide();
            storybuttonpressed.hide();
            fuelbuttonunpressed.hide();
            flightbuttonunpressed.hide();
            instructionflight.hide();
            storybuttonunpressed.hide();
            fuelbuttonunpressed.hide();
            flightbuttonpressed.hide();
            flightText.hide()

            instructionfuel.show();
            storybuttonunpressed.show();
            fuelbuttonpressed.show();
            flightbuttonunpressed.show();
            fuelText.show();
        }

        //===================================================================================================
        //Function to be called to go to flight page in instructions
        //===================================================================================================

        var flightinstruction = function(){
            instructionBackground.hide();
            instructionsText.hide();
            storybuttonpressed.hide();
            fuelbuttonunpressed.hide();
            flightbuttonunpressed.hide();
            instructionfuel.hide();
            fuelbuttonpressed.hide();
            flightbuttonunpressed.hide();
            fuelText.hide();

            instructionflight.show();
            storybuttonunpressed.show();
            fuelbuttonunpressed.show();
            flightbuttonpressed.show();
            flightText.show();
        }

        //===================================================================================================
        //Function to be called when user choose to prematurely end the game
        //===================================================================================================

        var gamebackmenu = function(){
            //Reset position of the asteroids and fuel
            i = 0;
            while (i<150){
                fuelDot[i].attr({"y": ((randInt(-5000))-500)});

                i=i+1
            };  
            i = 0;
            while (i<300){
                dot[i].attr({"x": number(randInt(100), 0, 100, -100, -2300), "y": number(randInt(100), 0, 100, -100, -2300)})
                dot[i].xpos=dot[i].attr('x');
                dot[i].ypos=dot[i].attr('y');

                i=i+1
            };
            console.log("clicked");
            continueButton.hide();
            fuelCount.hide()
            fuelfly.hide();
            distanceTravelled.hide();
            fuelScore.hide();
            flyScore.hide();
            fuelfull.hide();
            fuelempty.hide();
            fuelbackground.pause();
            flybackground.pause();
            gamebacktomenuButton.hide();
            clearInterval(mainInterval);
            clearInterval(mainEmit);
            clearInterval(mainScore);
            clearInterval(mainFuel);
            transpRect.hide();
            spaceship.hide();
            clearInterval(drawInterval);
            clearInterval(repeatInterval);
            transpRect.hide();
            mouseDot.hide();

            backgroundsound.play();
            backgroundsound.loop = true;
            menuBackground.show();
            instructionButton.show();
            speedButton.show();
            playButton.show();
            fuelButton.show()
            currentSpeed.show();
            currentFuel.show();
            lastScore.show();
            highScore.show();
            totalDistance.show();
            lifenumber.show()
            gameTries.show()
        }

        //===================================================================================================
        //Setting the difficulty level of the game
        //===================================================================================================

        var speed;
        var speedLevel = function(){
            speed = prompt("Please set your desired speed:\n\nGear 1: Slow\nGear 2: Normal\nGear 3: Fast\nGear 4: Supersonic\nGear 5: Lightning speed\n\nControl input:", "Enter only either 1, 2, 3, 4, or 5");
            
            if (speed!= null) {
                difficultyLevel = Number(speed);
                console.log("User has inputed difficulty level: " + difficultyLevel);
                    
                    // This checks that the converted string is 1-5, otherwise will inform user it's wrong
                    // and prompt again to enter by calling the function levelInput again
                    // Also change text of currentSpeed object so that users can see the difficulty value on screen
                    if (difficultyLevel>0 && difficultyLevel<6) {
                        alert("Speed set to: "+ difficultyLevel);
                        currentSpeed.attr({text: difficultyLevel});
                    }
                    else {
                        alert("Inappropriate speed selected. Please only select gears 1-5.");
                        levelInput();
                    }
            }
        }

        //===================================================================================================
        //Setting values for initial asteroids
        //===================================================================================================

        i=0
        while(i<300){
            moveValue = randInt(difficultyLevel*2); //Provide a random number based on the difficulty setting selected by user
            dot[i].xpos=dot[i].attr('x'); // Set the value of xpos to be the current position of the dot
            dot[i].ypos=dot[i].attr('y');
            dot[i].xrate=moveValue*2; // Set the rate to be based on the random number generated above
            dot[i].yrate=moveValue*2; 

            i=i+1
        }

        var mouseDotDistance;
        var mainInterval;
        var mainEmit;
        var mainScore;
        var mainFuel;

        //===================================================================================================
        //Move the asteroids and also detect certain game conditions
        //===================================================================================================

        var draw = function(){
            
            i = 0
            while (i<300){

                dot[i].xpos += dot[i].xrate; // Change the xpos and ypos based on the xrate and yrate generated above
                dot[i].ypos += dot[i].yrate;

                dot[i].attr({"x": dot[i].xpos, "y": dot[i].ypos}); // Change the attributes of the dots accordingly
                mouseDotDistance = distance(mouseX, mouseY, dot[i].xpos, dot[i].ypos); // Compute the distance between the cursor and the position of each dot
                //Detect a hit if the distance is smaller than the size of the asteroid and reduce a life
                if(mouseDotDistance<45){
                    console.log("Hit detected");
                    lives=lives-1
                    lifenumber.attr({text: lives})
                    explosion.play();
                    alert("You lost a life!")
                    //Allow the user to go back to menu if the life value is not 0
                    if(lives != 0){
                        clearInterval(mainInterval);
                        clearInterval(mainEmit);
                        clearInterval(mainScore);
                        clearInterval(mainFuel);
                        continueButton.show();
                        transpRect.hide();
                        spaceship.hide();
                        gamebacktomenuButton.hide();
                    } else { //Reset the asteroids and show the gameover page if life value is 0
                        clearInterval(mainInterval);
                        clearInterval(mainEmit);
                        clearInterval(mainScore);
                        clearInterval(mainFuel);
                        transpRect.hide();
                        spaceship.hide();
                        gamebacktomenuButton.hide();
                        i = 0;
                        while (i<300){
                            dot[i].attr({"x": ((randInt(-100))-1)*20, "y": ((randInt(-100))-1)*20})
                            dot[i].xpos=dot[i].attr('x'); // Set the value of xpos to be the current position of the dot
                            dot[i].ypos=dot[i].attr('y');

                            i=i+1
                        };
                        gameoverDistance.attr({text: totaldistance});
                        gameoverTries.attr({text: numberGame});
                        gameoverHigh.attr({text: highscore});
                        gameoverDistance.show();
                        gameoverTries.show();
                        gameoverHigh.show();
                        gameoverBackground.show();
                        gameoverButton.show();
                        fuelCount.hide();
                        fuelfly.hide();
                        fuelScore.hide();
                        flyScore.hide();
                        distanceTravelled.hide();
                        flybackground.pause();
                        gameoversound.play();
                        gamebacktomenuButton.hide();
                    };
                } //Allow user to go back to menu page if fuel value is 0
                if(fuelAmount===0){
                    clearInterval(mainInterval);
                    clearInterval(mainEmit);
                    clearInterval(mainScore);
                    clearInterval(mainFuel);
                    fuelempty.show();
                    transpRect.hide();
                    spaceship.hide();

                }
                

                i=i+1;           
            }
            //Update the position of the spaceship image to be according to the position of the mouse
            spaceship.attr({"x": mouseX, "y": mouseY});
        }

        //===================================================================================================
        //Reposition the asteroids to allow constant supply of units
        //===================================================================================================

        var nexttoemit = 0
        var emit = function(i){
            moveValue = randInt((difficultyLevel*2)+1)
            dot[nexttoemit].xpos = number(randInt(100), 0, 100, -100, -2300);
            dot[nexttoemit].ypos = number(randInt(100), 0, 100, -100, -2300);
            dot[nexttoemit].xrate = moveValue*2;
            dot[nexttoemit].yrate = moveValue*2;
            nexttoemit++;
            if(nexttoemit === 300){
                nexttoemit = 0
            }
        }

        //===================================================================================================
        //Increase the distance travelled to be used as a scoring system
        //===================================================================================================

        var gameScore = function(){
            //Set distance incrementation to be according to the difficulty setting of the user
            flyDistance = flyDistance+(10*speed)
            lastScore.attr({text: flyDistance})
            totaldistance = totaldistance+(10*speed);
            totalDistance.attr({text: totaldistance})
            distanceTravelled.attr({text: flyDistance});
            //Change the longest flight distance if the user had beaten the previous highscore
            if(flyDistance > highscore){
                highscore = flyDistance
                highScore.attr({text: highscore});
            }
        }

        //===================================================================================================
        //Reduce the amount of fuel the user has
        //===================================================================================================

        var gameFuel = function(){
            fuelAmount = fuelAmount-5
            fuelCount.attr({text: fuelAmount + "%"});
            fuelfly.attr({text: fuelAmount + "%"});
            currentFuel.attr({text: fuelAmount + "%"});
        }
        
        //===================================================================================================
        //Function to be called to go into the flying game
        //===================================================================================================

        var gamePage = function(e){
            //Reset position and speed of asteroids
            i=0
            while(i<300){
                moveValue = randInt((difficultyLevel*2)+1); //Provide a random number based on the difficulty setting selected by user
                dot[i].xpos=dot[i].attr('x'); // Set the value of xpos to be the current position of the dot
                dot[i].ypos=dot[i].attr('y');
                dot[i].xrate=moveValue*2; // Set the rate to be based on the random number generated above
                dot[i].yrate=moveValue*2; 

                i=i+1
            }
            //Only allows the user to play the game if fuel is more than 10% and speed setting is between 1-5
            if(fuelAmount > 10 && speed>0 && speed<6){
            menuBackground.hide();
            instructionButton.hide();
            speedButton.hide();
            playButton.hide();
            fuelButton.hide()
            currentSpeed.hide();
            currentFuel.hide();
            continueButton.hide();
            lastScore.hide();
            highScore.hide();
            totalDistance.hide();
            lifenumber.hide();
            gameTries.hide();
            fuelScore.hide();
            fuelCount.hide();
            backgroundsound.pause();

            gamebacktomenuButton.show();
            flybackground.play();
            flybackground.loop = true;
            flyScore.show();
            fuelfly.show();
            distanceTravelled.show();
            numberGame=numberGame+1;
            gameTries.attr({text: numberGame})
            flyDistance = 0;
            //Show the transparent rectangle to allow user to control over the units
            transpRect.show();
            transpRect.attr({"fill": "white", "fill-opacity": 0})
            transpRect.addEventListener("mousemove", function(e){
                mouseX = e.offsetX;
                mouseY = e.offsetY
            });
            transpRect.addEventListener("mouseover", function(e){
                e.currentTarget.style.cursor = "crosshair"
            })
            spaceship.show();
            mainInterval = setInterval(draw, 0); 
            mainEmit = setInterval(emit, 150);
            mainScore = setInterval(gameScore, 10);
            mainFuel = setInterval(gameFuel, 5000);
            } else {
                alert("Your spaceship is not ready for flight!\nPlease check your speed setting or amount of fuel available.")
            } 
        }

            //===================================================================================================
            //Create variables to be used for intervals
            //===================================================================================================

            var drawInterval;
            var repeatInterval;

            //===================================================================================================
            //Initiate the array to create fuel units
            //===================================================================================================

            var fuelDot = [];
            var fuelCreate = function(){
                i = 0;
                while (i<150){
                    //Create a random value to be used for the size of the fuel
                    fuelsize = (randInt(60)+3)*4
                    fuelDot[i] = paper.image("images/fuelicon.png", randInt(1200), ((randInt(-5000))-500), fuelsize, fuelsize); // Specify the size and initial position of the dots
                    fuelDot[i].show()
                    fuelDot[i].xpos=fuelDot[i].attr('x'); // Set the value of xpos to be the current position of the dot
                    fuelDot[i].ypos=fuelDot[i].attr('y');
                    fuelDot[i].xrate=randInt(2); // Set the rate to be using the random value generated above
                    fuelDot[i].yrate=(randInt(5)+1);
                    
                    i=i+1
                };  
            };
            
            //===================================================================================================
            //Move the fuel units as well as to detect certain game conditions
            //===================================================================================================

            var fuelDraw = function(){
            i = 0
            while (i<150){
                var area = function(x,y){
                    return x*y;
                }

                fuelDot[i].xpos += fuelDot[i].xrate; // Change the xpos and ypos based on the xrate and yrate generated above
                fuelDot[i].ypos += fuelDot[i].yrate;

                mouseDotDistance = distance(mouseX, mouseY, (fuelDot[i].xpos+(fuelDot[i].attr("width")*0.75)), (fuelDot[i].ypos+(fuelDot[i].attr("height")*0.75))); // Compute the distance between the cursor and the position of each dot

                fuelDot[i].attr({"x": fuelDot[i].xpos, "y": fuelDot[i].ypos}); // Change the attributes of the dots accordingly

                //If life value is not 0, detect if the fuel unit is smaller than user unit when they touches
                if(lives != 0){
                if(mouseDotDistance <= (mouseDot.attr("width")/2) && mouseDot.attr("width")>=fuelDot[i].attr("width")){
                    //Reposition the fuel unit
                    fuelDot[i].attr({"y": ((randInt(-5000))-500)});
                    fuelDot[i].ypos = fuelDot[i].attr("y");
                    //Increase the size of the user fuel unit
                    mouseDot.attr({"width": mouseDot.attr("width")+10});
                    mouseDot.attr({"height": mouseDot.attr("height")+10});
                    //Increase and update the fuel value
                    fuelAmount = fuelAmount+5;
                    console.log("Fuel is " + fuelAmount)
                    currentFuel.attr({text: fuelAmount + "%"});
                    fuelCount.attr({text: fuelAmount + "%"});
                    fuelfly.attr({text: fuelAmount + "%"});
                    fuelcollect.play();
                }
                //End the session when the user hits 100% fuel
                if(fuelAmount === 100){
                    clearInterval(drawInterval);
                    clearInterval(repeatInterval);
                    fuelfull.show();
                    mouseDot.hide();
                    transpRect.hide();
                };
                //Show the continue screen if the user hits a unit that is larger than the user's unit
                if(mouseDotDistance <= (fuelDot[i].attr("width")/2) && mouseDot.attr("width") < fuelDot[i].attr("width")){
                    explosion.play();
                    clearInterval(drawInterval);
                    clearInterval(repeatInterval);
                    continueButton.show();
                    mouseDot.hide();
                    transpRect.hide();
                    //Reduce a life
                    lives = lives-1;
                    lifenumber.attr({text: lives});
                    alert("You lost a life!")
                };
                } else {
                    //Clear everything and reset fuel position before showing gameover screen if the life is 0
                    clearInterval(drawInterval);
                    clearInterval(repeatInterval);
                    transpRect.hide();
                    mouseDot.hide();
                    continueButton.hide();
                    fuelCount.hide()
                    fuelfly.hide()
                    gamebacktomenuButton.hide();
                    i = 0;
                    while (i<150){
                        fuelDot[i].attr({"x": randInt(1200), "y": ((randInt(-5000))-500)})
                        fuelDot[i].xpos=fuelDot[i].attr('x'); // Set the value of xpos to be the current position of the dot
                        fuelDot[i].ypos=fuelDot[i].attr('y');

                        i=i+1
                    };
                    gameoverDistance.attr({text: totaldistance});
                    gameoverTries.attr({text: numberGame});
                    gameoverHigh.attr({text: highscore});
                    gameoverDistance.show();
                    gameoverTries.show();
                    gameoverHigh.show();
                    gameoverBackground.show();
                    gameoverButton.show();
                    gameoversound.play();
                    fuelbackground.pause();
                    fuelScore.hide();
                    gamebacktomenuButton.hide();
                }

                i=i+1;           
            }
            //Update position of the user fuel unit to be that of the cursor
            mouseDot.attr({"x": (mouseX-(mouseDot.attr("width")/2)), "y": (mouseY-(mouseDot.attr("height")/2))});
            
        }

            //===================================================================================================
            //Reposition the fuel units to create a constant supply of units
            //===================================================================================================

            var nexttoemit = 0
            var fuelemit = function(i){
                moveValue = randInt(4)
                fuelDot[nexttoemit].xpos = randInt(1200);
                fuelDot[nexttoemit].ypos = ((randInt(-5000))-500);
                fuelDot[nexttoemit].xrate = randInt(2);
                fuelDot[nexttoemit].yrate = (randInt(5)+1);
                nexttoemit++;
                if(nexttoemit === 150){
                    nexttoemit = 0
                }

            }

            fuelCreate();

        //===================================================================================================
        //Funtion to be called to enter the screen to play the fuel game
        //===================================================================================================

        var fuelPage = function(e){
            //Reset position of fuel units once this is called
            i=0
            while(i<150){
                fuelDot[i].attr({"y": ((randInt(-5000))-500)});
                fuelDot[i].ypos=fuelDot[i].attr('y');
                i=i+1
            }
            //Only allow the game to be played if fuel is less than 100%
            if(fuelAmount < 100){
            menuBackground.hide();
            instructionButton.hide();
            speedButton.hide();
            playButton.hide();
            fuelButton.hide()
            currentSpeed.hide();
            continueButton.hide();
            currentFuel.hide();
            lastScore.hide();
            highScore.hide();
            totalDistance.hide();
            lifenumber.hide();
            gameTries.hide();
            fuelfull.hide();
            backgroundsound.pause();

            gamebacktomenuButton.show();
            fuelbackground.play();
            fuelbackground.loop = true
            fuelScore.show();
            fuelCount.show();
            //Reset the size of the user fuel unit
            mouseDot.attr({"width": 100, "height": 100});
            nexttoemit=0
            mouseDot.show();
            transpRect.show();
            transpRect.addEventListener("mousemove", function(e){
                mouseX = e.offsetX;
                mouseY = e.offsetY
            });
            transpRect.addEventListener("mouseover", function(e){
                e.currentTarget.style.cursor = "crosshair"
            })
            drawInterval = setInterval(fuelDraw, 20)
            repeatInterval = setInterval(fuelemit, 1500)
            } else {
                alert("You already have max fuel!")
            }
        }

        //===================================================================================================
        //Variables to be shown on top of the other units
        //===================================================================================================

        var fuelScore = paper.image("images/fuelscore.png", 900, 10, 300, 100)
        fuelScore.hide();
        var flyScore = paper.image("images/flyscore.png", 800, 10, 300, 100)
        flyScore.hide();
        var fuelCount = paper.text(1030, 60, fuelAmount + "%").attr({'font-size':'25px', 'font-weight':'bold', 'fill':'white'});
        fuelCount.hide();
        var fuelfly = paper.text(1010, 40, fuelAmount + "%").attr({'font-size':'25px', 'font-weight':'bold', 'fill':'white'});
        fuelfly.hide();
        var distanceTravelled = paper.text(1010, 85, flyDistance).attr({'font-size':'25px', 'font-weight':'bold', 'fill':'white'});
        distanceTravelled.hide();


        var transpRect = paper.rect(0,0,pWidth,pHeight);
        transpRect.attr({"fill": "white", "fill-opacity": 0}) 
        transpRect.hide();
        var continueButton = paper.image("images/lifelost.png", 0, 0, pWidth, pHeight);
        continueButton.hide();
        var fuelempty = paper.image("images/fuelempty.png", 0, 0, pWidth, pHeight);
        fuelempty.hide();
        var fuelfull = paper.image("images/fuelfull.png", 0, 0, pWidth, pHeight);
        fuelfull.hide();
        var gamebacktomenuButton = paper.image("images/backtomenu.png", 950, 520, 150, 75);
        gamebacktomenuButton.hide();

        //===================================================================================================
        //Event listeners for the buttons, calling the various functions accordingly
        //===================================================================================================

        startButton.addEventListener("click", mainMenu);
        instructionButton.addEventListener("click", instructionPage);
        backtomenuButton.addEventListener("click", mainMenuInstruction);
        speedButton.addEventListener("click", speedLevel);
        playButton.addEventListener("click", gamePage);
        fuelButton.addEventListener("click", fuelPage);
        continueButton.addEventListener("click", backtomain);
        gameoverButton.addEventListener("click", mainMenu);
        fuelempty.addEventListener("click", backtomain);
        fuelfull.addEventListener("click", backtomain);
        storybuttonunpressed.addEventListener("click", instructionPage);
        fuelbuttonunpressed.addEventListener("click", fuelinstruction);
        flightbuttonunpressed.addEventListener("click", flightinstruction);
        gamebacktomenuButton.addEventListener("click", gamebackmenu);
});