let dolar = 5.1

let usdinput = document.querySelector("#usd")
let brlinput = document.querySelector("#brl")

usdinput.addEventListener("keyup", () => {
    convert("usd-to-brl")

})

brlinput.addEventListener("keyup", () => {
    convert("brl-to-usd")

})

usdinput.addEventListener("blur", () =>{
    usdinput.value = formatCurrency(usdinput.value)
})

brlinput.addEventListener("blur", () =>{
    brlinput.value = formatCurrency(brlinput.value)   
})

usdinput.value = "1000,00"
convert("usd-to-brl")


// funçoes
function formatCurrency(value) {
    // ajustar valor
    let fixedValue = fixValue(value)
    // utilizar funçao de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-Br", options)
    // retornar o valor formatado
    return formatter.format(fixedValue)


}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert (type) {
    if(type == "usd-to-brl"){
                 // ajustar o valor 
    let fixedValue = fixValue(usdinput.value)          
                 //converter o valor 
    let result = fixedValue * dolar 
    result = result.toFixed(2)              
                 // mostra no campo do real 
    brlinput.value = formatCurrency(result)             
    }

        if(type == "brl-to-usd") {
                 // ajustar o valor 
            let fixedValue = fixValue(brlinput.value)
                 //converter o valor 
            let result = fixedValue / dolar
            result =result.toFixed(2)
                 // mostra no campo do dolar 
            usdinput.value = formatCurrency(result)     
        }
}