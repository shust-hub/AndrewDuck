"use strict";

function validateForm(form) {
    console.log("hi!");
    if ((document.getElementById('check-konf').checked)&&(document.getElementById('check-oferta').checked)){
        console.log("checked!");
        let firstName = document.getElementsByClassName("payment-form__input_first-name")[0].value;
        let secondName = document.getElementsByClassName("payment-form__input_second-name")[0].value;
        let tel = document.getElementsByClassName("tel")[0].value;
        let email = document.getElementsByClassName("email")[0].value;
        
        console.log(firstName);
    }
    else 
    console.log("not checked!");
    // console.log(firstName + secondName+ tel + email);   
};
   
