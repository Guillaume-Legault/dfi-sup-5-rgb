function bleu_4 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 1000)
    pins.analogWritePin(AnalogPin.P8, 1000)
}
function vert_2 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 500)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function rouge_2 () {
    pins.analogWritePin(AnalogPin.P1, 500)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function rouge_1 () {
    pins.analogWritePin(AnalogPin.P1, 250)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function bleu_2 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 1000)
    pins.analogWritePin(AnalogPin.P8, 500)
}
function vert_3 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 750)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function bleu_3 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 1000)
    pins.analogWritePin(AnalogPin.P8, 750)
}
function bleu_1 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 1000)
    pins.analogWritePin(AnalogPin.P8, 250)
}
function rouge_4 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function vert_1 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 250)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function rouge_3 () {
    pins.analogWritePin(AnalogPin.P1, 750)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
}
function vert_4 () {
    pins.analogWritePin(AnalogPin.P1, 1000)
    pins.analogWritePin(AnalogPin.P2, 1000)
    pins.analogWritePin(AnalogPin.P8, 0)
}
let etatactuel = 0
let etatpasse = 0
let nombre = 0
basic.forever(function () {
    etatactuel = pins.digitalReadPin(DigitalPin.P16)
    if (etatactuel != etatpasse) {
        if (etatactuel == 1) {
            nombre += 1
        }
    }
    etatpasse = etatactuel
    if (nombre == 1) {
        rouge_1()
    } else if (nombre == 2) {
        rouge_2()
    } else if (nombre == 3) {
        rouge_3()
    } else if (nombre == 4) {
        rouge_4()
    } else if (nombre == 5) {
        vert_1()
    } else if (nombre == 6) {
        vert_2()
    } else if (nombre == 7) {
        vert_3()
    } else if (nombre == 8) {
        vert_4()
    } else if (nombre == 9) {
        bleu_1()
    } else if (nombre == 10) {
        bleu_2()
    } else if (nombre == 11) {
        bleu_3()
    } else if (nombre == 12) {
        bleu_4()
    } else {
    	
    }
    basic.showNumber(nombre)
})
