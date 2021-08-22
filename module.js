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
const paymentMethod= document.getElementById("paymentMethod"); //ACA VA PAYMENT METHOD
const invalidPaymentMethod=document.getElementById("invalid-PaymentMethod");
const cancel=document.getElementById("Cancel");

function Restart(){
    card.style.backgroundColor = "white";
    invalidCard.style.visibility="hidden"; //Fin Card
    cvc.style.backgroundColor = "white";
    invalidCvc.style.visibility="hidden"; // Fin CVC
    amount.style.backgroundColor = "white";
    invalidAmount.style.visibility="hidden";  //Fin Amount
    firstName.style.backgroundColor = "white";
    invalidFirstName.style.visibility="hidden"; //Fin First Name 
    lastName.style.backgroundColor = "white";
    invalidLastName.style.visibility="hidden"; //Fin Last Name
    city.style.backgroundColor = "white";
    invalidCity.style.visibility="hidden"; //Fin City
    state.style.backgroundColor = "white";
    invalidState.style.visibility="hidden"; //Fin State
    postalCode.style.backgroundColor = "white";
    invalidPostcalCode.style.visibility="hidden"; //Fin Postal Code
    message.style.backgroundColor = "white";
    invalidMessage.innerHTML="Add any notes here.";
    invalidMessage.style.color="black"; //Fin Message
    paymentMethod.style.background="#5d6a61";
    invalidPaymentMethod.style.visibility="hidden";
};
function Verificar_RadioButton(){
    let verificar=null;
    const metodos_pago=document.getElementsByName("radio_payment");
    for(let x=0;x<metodos_pago.length;x++){
        if(metodos_pago[x].checked){
            verificar=true;
            break;            
        }
        else{
            verificar=false;
        }
    }
    return verificar;
};


formulario.addEventListener("submit", (e) => {
    
    if (card.value == "" || card.value == null || card.value.length < 16) {
        e.preventDefault();
        card.style.backgroundColor = "red";
        invalidCard.style.visibility="visible";    
    }
    else{
        card.style.backgroundColor = "white";
        invalidCard.style.visibility="hidden"; 
    }
    if (cvc.value == "" || cvc.value == null || cvc.value.length < 3) {
        e.preventDefault();
        cvc.style.backgroundColor = "red";
        invalidCvc.style.visibility="visible";   
    }
    else{
        cvc.style.backgroundColor = "white";
        invalidCvc.style.visibility="hidden"; 
    } 
    if (amount.value == "" || amount.value == null) {
        e.preventDefault();
        amount.style.backgroundColor = "red";
        invalidAmount.style.visibility="visible";
    }
    else{
        amount.style.backgroundColor = "white";
        invalidAmount.style.visibility="hidden"; 
    }
    if (firstName.value == "" || firstName.value == null) {
        e.preventDefault();
        firstName.style.backgroundColor = "red";
        invalidFirstName.style.visibility="visible";
    }
    else{
        firstName.style.backgroundColor = "white";
        invalidFirstName.style.visibility="hidden"; 
    }
    if (lastName.value == "" || lastName.value == null) {
        e.preventDefault();
        lastName.style.backgroundColor = "red";
        invalidLastName.style.visibility="visible";
    }
    else{
        lastName.style.backgroundColor = "white";
        invalidLastName.style.visibility="hidden"; 
    }
    if (city.value == "" || city.value == null) {
        e.preventDefault();
        city.style.backgroundColor = "red";
        invalidCity.style.visibility="visible";
    }
    else{
        city.style.backgroundColor = "white";
        invalidCity.style.visibility="hidden"; 
    }
    if(state.options[0].selected){
        e.preventDefault();
        state.style.backgroundColor="red";
        invalidState.style.visibility="visible";
    }  
    else{
        state.style.backgroundColor = "white";
        invalidState.style.visibility="hidden"; 
    }
    if(postalCode.value=="" ||postalCode.value==null){
        e.preventDefault();
        postalCode.style.backgroundColor="red";
        invalidPostcalCode.style.visibility="visible";
    }
    else{
        postalCode.style.backgroundColor = "white";
        invalidPostcalCode.style.visibility="hidden"; 
    }
    if(message.value==""||message.value==null){
        e.preventDefault();
        message.style.backgroundColor="red";
        invalidMessage.innerHTML="Please provide a valid Message.";
        invalidMessage.style.color="#dc3545";
        invalidMessage.style.visibility="visible";
    }
    else{
        message.style.backgroundColor = "white";
        invalidMessage.innerHTML="Add any notes here.";
        invalidMessage.style.color="black"; //Fin Message
    }    
    if(Verificar_RadioButton()){
        paymentMethod.style.backgroundColor = "white";
        invalidPaymentMethod.style.visibility="hidden";
    }
    else{
        e.preventDefault();
        paymentMethod.style.backgroundColor = "red";
        invalidPaymentMethod.style.visibility="visible";
    }
});

cancel.addEventListener("click",()=>{
    Restart();
});
