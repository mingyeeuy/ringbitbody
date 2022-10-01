radio.onReceivedNumber(function (receivedNumber) {
    itp = receivedNumber
})
let itp = 0
radio.setGroup(11)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    if (itp == 1) {
        RingbitCar.forward()
    } else if (itp == 2) {
        RingbitCar.turnleft()
    } else if (itp == 3) {
        RingbitCar.turnright()
    } else {
        itp = 0
        RingbitCar.brake()
    }
})
control.inBackground(function () {
    while (true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(100)
    }
})
