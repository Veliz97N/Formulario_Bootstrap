const formulario = document.getElementById("formulario"); //Se define constante formulario
const card = document.getElementById("inputCard"); //Se define constante card
const invalidCard=document.getElementById("invalid-card"); //Se define la constante invalidCard para el caso que no se complete la info
const cvc = document.getElementById("inputCVC");
const invalidCvc=document.getElementById("invalid-cvc");
const amount = document.getElementById("inputAmount");
const invalidAmount=document.getElementById("invalid-amount");
const firstName = document.getElementById("inputFirstName");
const invalidFirstName=document.getElementById("invalid-FirstName");
const lastName = document.getElementById("inputLastName");
const invalidLastName= document.getElementById("invalid-LastName");
const city = document.getElementById("inputCity");
const invalidCity=document.getElementById("invalid-City");
const state = document.getElementById("inputState");
const invalidState=document.getElementById("invalid-State");
const postalCode = document.getElementById("inputPostalCode");
const invalidPostcalCode=document.getElementById("invalid-PostalCode");

const message = document.getElementById("inputMessage");
const invalidMessage=document.getElementById("invalid-Message");

formulario.addEventListener("submit", (e) => {
    if (card.value == "" || card.value == null || card.value.length < 16) {
        e.preventDefault();
        card.style.backgroundColor = "red";
        invalidCard.style.visibility="visible";    
    }
    if (cvc.value == "" || cvc.value == null || cvc.value.length < 3) {
        e.preventDefault();
        cvc.style.backgroundColor = "red";
        invalidCvc.style.visibility="visible";   

    }
    if (amount.value == "" || amount.value == null) {
        e.preventDefault();
        amount.style.backgroundColor = "red";
        invalidAmount.style.visibility="visible";
    }
    if (firstName.value == "" || firstName.value == null) {
        e.preventDefault();
        firstName.style.backgroundColor = "red";
        invalidFirstName.style.visibility="visible";
    }
    if (lastName.value == "" || lastName.value == null) {
        e.preventDefault();
        lastName.style.backgroundColor = "red";
        invalidLastName.style.visibility="visible";
    }
    if (city.value == "" || city.value == null) {
        e.preventDefault();
        city.style.backgroundColor = "red";
        invalidCity.style.visibility="visible";
    }
    if(state.value=="" || state.value==null){
        e.preventDefault();
        state.style.backgroundColor="red";
        invalidState.style.visibility="visible";
    }  
    if(postalCode.value=="" ||postalCode.value==null){
        e.preventDefault();
        postalCode.style.backgroundColor="red";
        invalidPostcalCode.style.visibility="visible";
    }
    if(message.value==""||message.value==null){
        e.preventDefault();
        message.style.backgroundColor="red";
        invalidMessage.style.visibility="visible";
    }    
})