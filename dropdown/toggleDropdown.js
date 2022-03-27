// container dos itens do menu
const nav = document.querySelector("nav.container-menu");

// icon-menu e icon-close;
const toggle = nav.querySelectorAll(".toggle");

/* 
    Se clicar em um dos icones vai fazer um toggle da classe show-menu na nav
    toggle coloca e tira a classe do elemento, que no nosso caso é a na.

    Ou seja, como o primeiro icone a ser mostrado vai ser o de hamburguer(icon-menu),
    quando clicar nele vai adicionar a classe show-menu na nav, e vai abrir o menu

    Quando o menu estiver aberto, vai aparecer o icone de icon-close, como ele também
    tem o evento do toggle na nav, então clicando nele vai tirar a classe show-menu da nav, que
    foi adicionada quando clicamos no icon-menu
*/

for (const icon of toggle){
    icon.addEventListener("click", ()=>{
        nav.classList.toggle("show-menu");
    })
};


// Quando clicar em um dos links do menu, fecha o dropdown

const links = nav.querySelectorAll('.dropdown-link');
for (const link of links){
    link.addEventListener("click", () => {
        if (nav.classList.contains("show-menu")){
            nav.classList.remove("show-menu");
        }
    })
}
