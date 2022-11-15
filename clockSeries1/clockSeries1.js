function past(h, m, s) {
    let hoursInMil = h * 3600000
    let minutesInMil = m * 60000
    let secondsInMil = s * 1000
    return hoursInMil + minutesInMil + secondsInMil
}
console.log(past(0,1,1))
