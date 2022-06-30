//Botão para iniciar o Quiz

function iniciarQuiz () {
    let menu = document.getElementById("menu");
    let pergunta01 = document.getElementById("pergunta-01");
    menu.classList.add("fadeOut");
    setTimeout( function(){
        menu.classList.add("invisible");
        menu.classList.remove("visible");
    },1400);

    setTimeout( function(){
        pergunta01.classList.remove("invisible");
        pergunta01.classList.add("fadeIn");
        pergunta01.classList.add("visible");
    }, 1500);
}

//Botão da primeira pergunta

function respostaQuest01() {
    let selected = document.querySelector("input[name='quest']:checked"); //Váriavel para captar qual 'radio' está selecionado

    if (selected.value === "n") { //Fazendo a validação se o 'radio' selecionado tem o valor 'n' que corresponde a incorreto
        alert("Resposta errada! Tente novamente."); 
        
    } else if (selected.value === "s") { //Fazendo a validação se o 'radio' selecionado tem o valor 's' que corresponde a correto
        let pergunta01 = document.getElementById("pergunta-01"); //Até o final do bloco 'else if' são as trocas de classes para efetuar as animações e remover/colocar elementos na tela no tempo certo
        let pergunta02 = document.getElementById("pergunta-02");
        pergunta01.classList.add("fadeOut");
        setTimeout( function(){
            pergunta01.classList.add("invisible");
            pergunta01.classList.remove("visible");
            document.getElementById("pergunta-01").remove();
        }, 1400);

        setTimeout( function(){
            pergunta02.classList.remove("invisible");
            pergunta02.classList.add("visible");
            pergunta02.classList.add("fadeIn");
        },1500);
    }
}

//As explicações de cima servem para as outras duas funções seguintes

//Botão da segunda pergunta

function respostaQuest02 (){
    let selected = document.querySelector("input[name='quest']:checked");

    if (selected.value === "n") {
        alert("Resposta errada! Tente novamente.")
    } else if  (selected.value === "s") {
        let pergunta02 = document.getElementById("pergunta-02");
        let pergunta03 = document.getElementById("pergunta-03");
        pergunta02.classList.add("fadeOut");
        setTimeout(function(){
            pergunta02.classList.add("invisible");
            pergunta02.classList.remove("visible");
            document.getElementById("pergunta-02").remove();
        },1400);

        setTimeout(function(){
            pergunta03.classList.remove("invisible");
            pergunta03.classList.add("visible");
            pergunta03.classList.add("fadeIn");
        },1500);
    }
}

//Botão da terceira pergunta

function respostaQuest03 (){
    let selected = document.querySelector("input[name='quest']:checked");

    if (selected.value === "n") {
        alert("Resposta errada! Tente novamente.")
    } else if  (selected.value === "s") {
        let pergunta03 = document.getElementById("pergunta-03");
        let fim = document.getElementById("fim");
        pergunta03.classList.add("fadeOut");
        setTimeout(function(){
            pergunta03.classList.add("invisible");
            pergunta03.classList.remove("visible");
            document.getElementById("pergunta-03").remove();
        },1400);

        setTimeout(function(){
            fim.classList.remove("invisible");
            fim.classList.add("visible");
            fim.classList.add("fadeIn");
        },1500);
    }
}