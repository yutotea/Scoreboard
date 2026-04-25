let homeTeam = document.getElementById("count-home")
let countHome = Number(homeTeam.textContent)

function add1tohome() {
    countHome += 1
    homeTeam.textContent = countHome
}

function add2tohome() {
    countHome += 2
    homeTeam.textContent = countHome
}

function add3tohome() {
    countHome += 3
    homeTeam.textContent = countHome
}

let guestTeam = document.getElementById("count-guest")
let countGuest = Number(guestTeam.textContent)

function add1toguest() {
    countGuest += 1
    guestTeam.textContent = countGuest
}

function add2toguest() {
    countGuest += 2
    guestTeam.textContent = countGuest
}

function add3toguest() {
    countGuest += 3
    guestTeam.textContent = countGuest
}

