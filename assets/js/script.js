"use strict";

export async function getAdvice() {
    try {
        let response = await fetch("https://api.adviceslip.com/advice");
        if(response.status === 200) {
            let object = await response.json();
            return object.slip;
        }
    } catch (error) {
        alert(`Erro ao carregar o conselho: ${error}`);
    }
}

export function setTextAdvice(id, advice) {
    let adviceId = document.querySelector(".advice-id");
    let adviceText = document.querySelector(".advice__text");
    adviceId.innerHTML = id;
    adviceText.innerHTML = advice;
}