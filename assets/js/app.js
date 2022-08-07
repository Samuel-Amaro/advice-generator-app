"use strict";

import {getAdvice, setTextAdvice} from "./script.js";

let btnGenerator = document.querySelector(".btn-generator-advice");

btnGenerator.addEventListener("pointerdown", () => {
    getAdvice().then((slip) => {
        setTextAdvice(slip.id, slip.advice);
    }).catch((reason) => {
        alert(`Falha ao carregar novo conselho. Por favor tente novamente.`);
    });
});