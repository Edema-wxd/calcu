function add(a,b) {
    return a + b
}

function sub(a,b) {
    return a - b
}

function multi(a,b) {
    return a * b
}

function div(a,b) {
    return a / b
}

function mod(a,b) {
    return a / b
}

function sign(box) {    
    if (box > 0) {
        box = '-'+ box
    } else {
        box
    }
    
    a = parseInt(box)
    return a
}

let pres = document.getElementById('output')

function changeDisp(num) {
    let equ = pres.innerText
    let signs = ['*', "/", '-', '+', '%', "="]

    if (equ == "0"){
        pres.innerText = num
    }
    else {
        equ =+ num
    }
}



function zero() {
    console.log('clear clicked')
    pres.textContent = 0

}




export default zero