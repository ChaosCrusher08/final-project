let pressure_sensor = 0
radio.setGroup(1)
basic.forever(function () {
    pressure_sensor = pins.analogReadPin(AnalogPin.P0)
    if (pressure_sensor > 0) {
        radio.sendString("Burger")
    }
})
