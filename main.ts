let Current_temperature = 0
// Created_by: Niamh_Keenan
// Created_on: September_27th_2022
// 
// This_program_shows_the_current_temperature_according_to_the_temperature_sensor_on_the_microbit.
basic.forever(function () {
    Current_temperature = input.temperature()
    basic.showNumber(Current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
