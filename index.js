// Algoritmus, který vezme vstup od uživatele a převede si ho na číslo.
// Zjisí, jestli číslo je přestupný rok.

const tlacitko = document.querySelector("button")
tlacitko.addEventListener("click", (e)=>{
    e.preventDefault()
    const rok = Number(document.querySelector(".year").value)
    const zprava = document.querySelector(".zprava")

    let vysledek = "nepřestupný"
    if (rok % 100 === 0 && rok % 400 ===0){
        vysledek ="přestupný"
    } 
    else if (rok % 4 === 0){
        vysledek = "přestupný"
    }
    zprava.innerHTML = `<p>${rok} je ${vysledek}</p>`
    
})

const nahodneRoky = document.querySelector(".nahodneRoky")
const vypisNahodnychRoku = [1212, 1600, 1789, 1989, 1995, 2000, 2021, 2022, 2023, 2099]
nahodneRoky.innerHTML = `<p>${vypisNahodnychRoku}</p>`

let vysledekNahodnychRoku = []

for(let i = 0; i <= vypisNahodnychRoku.length; i++){
    let vysledekDoPole = " - "
    if (vypisNahodnychRoku[i] % 100 === 0 && vypisNahodnychRoku[i] % 400 ===0){
        vysledekDoPole =vypisNahodnychRoku[i]
    } 
    else if (vypisNahodnychRoku[i] % 4 === 0){
        vysledekDoPole = vypisNahodnychRoku[i]
    }
    vysledekNahodnychRoku.push(vysledekDoPole)
}

const prestupneRoky = document.querySelector(".prestupneRoky")
prestupneRoky.innerHTML = `<p>${vysledekNahodnychRoku}</p>`


    


  
