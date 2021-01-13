let ㅇ = 0
input.onButtonPressed(Button.A, function () {
    ㅇ += 1
    basic.showNumber(ㅇ)
})
input.onButtonPressed(Button.AB, function () {
    ㅇ = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    ㅇ += -1
    basic.showNumber(ㅇ)
})
basic.forever(function () {
    if (ㅇ > 10) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        ㅇ = 0
    } else {
        music.stopAllSounds()
    }
})
