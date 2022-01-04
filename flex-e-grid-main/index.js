const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {      //sempre que clicarem no botão menu
    menu.classList.toggle('menu-lateral--ativo')  //o toggle faz com que abra e feche na lateral
})