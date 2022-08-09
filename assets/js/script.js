"use strict";

export async function getAdvice(slipId = -1) {
    let url = '';
    if(slipId === -1) {
        url = `https://api.adviceslip.com/advice`; 
    }else{
        url = `https://api.adviceslip.com/advice/${slipId}`; 
    }
    try {
        let response = await fetch(url, {
            cache: 'no-cache'
        });
        if(response.status === 200) {
            let object = await response.json();
            return object.slip;
        }
    } catch (error) {
        alert(`Erro ao carregar o conselho: ${error}`);
    }
}

export async function startAdvice() {
    getAdvice(71).then((slip) => {
        setTextAdvice(slip.id, slip.advice);
    }).catch((reason) => {
        alert(`Falha ao carregar novo conselho. Por favor tente novamente.`);
    });
}

export function setTextAdvice(id, advice) {
    let adviceId = document.querySelector(".advice-id");
    let adviceText = document.querySelector(".advice__text");
    adviceId.innerHTML = id;
    adviceText.innerHTML = advice;
}