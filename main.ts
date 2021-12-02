let pressure_sensor = 0
radio.setGroup(1)
basic.forever(function () {
    pins.setAudioPin(AnalogPin.P1)
    pressure_sensor = pins.analogReadPin(AnalogPin.P0)
    if (pressure_sensor > 0) {
        radio.sendString("Burger")
        for (let index = 0; index < 100000000000000000000; index++) {
            music.playMelody("C5 A B G A G E F ", 500)
        }
    }
})
