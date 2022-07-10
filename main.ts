radio.onReceivedNumber(function (receivedNumber) {
    item = receivedNumber
})
let item = 0
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    if (item == 1) {
        RingbitCar.forward()
    } else if (item == 2) {
        RingbitCar.turnleft()
    } else if (item == 3) {
        RingbitCar.turnright()
    } else {
        item = 0
        RingbitCar.brake()
    }
})
