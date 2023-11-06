let price = document.getElementById("price")
let person = document.getElementById("person")

let tax_value = document.getElementById('tax-value')
let total = document.getElementById('total')
let every_person = document.getElementById('every-person')
let person_out = document.getElementById('person-out')
let V_price = 0, tax = 0.15, V_tax=0, V_perPerson=0;
// every_person

price.addEventListener('change', () => {
    tax_value.innerHTML = V_tax = tax*price.value;
    total.innerHTML = V_price =V_tax+parseInt(price.value);
    
})
person.addEventListener('change', () => {
    person_out.style.cssText = "display: block;"
    every_person.innerHTML = V_perPerson = V_price/parseInt(person.value);
})