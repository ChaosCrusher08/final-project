let pressure_sensor = 0
radio.setGroup(1)
basic.forever(function () {
    pressure_sensor = pins.analogReadPin(AnalogPin.P0)
    if (pressure_sensor > 0) {
        radio.sendNumber(1)
        for (let index = 0; index < 10; index++) {
            music.playMelody("C5 A B G A G E F ", 500)
        }
    }
})
