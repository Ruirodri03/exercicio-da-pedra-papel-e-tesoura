let Numero = 0
input.onGesture(Gesture.Shake, function () {
    Numero = randint(1, 3)
    if (Numero == 0) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . # # #
            `)
    } else if (Numero == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else if (Numero == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
