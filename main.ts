//variables for led positions and score
let spriteposx = 0;
let spriteposy = 0;
let appleposx = randint(0, 4);
let appleposy = randint(0, 4);
let restart = 1;
let score = 0;
//you are what you eat v1.1
//cleaned up code and made some stuff less annoying


//pre-run settings
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
music.playTone(Note.E, 100)
game.startCountdown(40000)
led.plot(spriteposx, spriteposy)
led.plot(appleposx, appleposy)

//functions for button presses
//function for button a
function buttona() {
    basic.clearScreen()
    led.plot(appleposx, appleposy)
    spriteposy += 1;
    if (spriteposy > 4) { spriteposy = 0 }
    led.plot(spriteposx, spriteposy)
    music.playTone(Note.C, 10)
    if (spriteposx == appleposx && spriteposy == appleposy) {


        score += 1
        game.setScore(score)
        basic.clearScreen()
        appleposx = randint(0, 4);
        appleposy = randint(0, 4);
        led.plot(appleposx, appleposy)
        led.plot(spriteposx, spriteposy)

    }
}

//function for button b
function buttonb() {
    basic.clearScreen()
    led.plot(appleposx, appleposy)
    spriteposx += 1;
    if (spriteposx > 4) { spriteposx = 0 }
    led.plot(spriteposx, spriteposy)
    music.playTone(Note.C, 10)
    if (spriteposx == appleposx && spriteposy == appleposy) {

        score += 1
        game.setScore(score)
        basic.clearScreen()
        appleposx = randint(0, 4);
        appleposy = randint(0, 4);
        led.plot(appleposx, appleposy)
        led.plot(spriteposx, spriteposy)


    }
}

    //end of functions

    //function to start the game
startgame();

function startgame() {
    
    //button press listeners
    input.onButtonPressed(Button.A, () => {
      buttona();
    })
    input.onButtonPressed(Button.B, () => {
      buttonb();
    })
}
input.onButtonPressed(Button.AB, () => {
    input.onButtonPressed(Button.B, () => {
        buttonb();
        startgame();
    })
    input.onButtonPressed(Button.A, () => {
        input.onButtonPressed(Button.A, () => {
            buttona()
            startgame();

        })
        input.onButtonPressed(Button.B, () => {
            input.onButtonPressed(Button.A, () => {
               buttona()
                startgame();
            })
            input.onButtonPressed(Button.B, () => {
                input.onButtonPressed(Button.B, () => {
                    buttonb()
                    startgame();
                })
                input.onButtonPressed(Button.A, () => {

                    basic.clearScreen()
                    basic.showString('MADE BY CRISSCROSS#5701')
                    buttona();
                    startgame();

                })
            })
        })
    })
})

