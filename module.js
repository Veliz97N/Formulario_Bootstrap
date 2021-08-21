const formulario = document.getElementById("formulario"); //Se define constante formulario
const card = document.getElementById("inputCard");
const cvc = document.getElementById("inputCVC");
const amount = document.getElementById("inputAmount");
const firstName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const city = document.getElementById("inputCity");
const state = document.getElementById("inputState");
const postalCode = document.getElementById("inputPostalCode");

const message = document.getElementById("inputMessage");
formulario.addEventListener("submit", (e) => {
    if (card.value == "" || card.value == null || card.value.length < 16) {
        e.preventDefault();
        card.style.backgroundColor = "red";
    }
    if (cvc.value == "" || cvc.value == null || cvc.value.length < 3) {
        e.preventDefault();
        cvc.style.backgroundColor = "red";
    }
    if (amount.value == "" || amount.value == null) {
        e.preventDefault();
        amount.style.backgroundColor = "red";
    }
    if (firstName.value == "" || firstName.value == null) {
        e.preventDefault();
        firstName.style.backgroundColor = "red";
    }
    if (lastName.value == "" || lastName.value == null) {
        e.preventDefault();
        lastName.style.backgroundColor = "red";
    }
    if (city.value == "" || city.value == null) {
        e.preventDefault();
        city.style.backgroundColor = "red";
    }
    if(state.value=="" || state.value==null){
        e.preventDefault();
        state.style.backgroundColor="red";
    }  
    if(postalCode.value=="" ||postalCode.value==null){
        e.preventDefault();
        postalCode.style.backgroundColor="red";
    }    
})