const boton = document.querySelector('#botonInput');
const titulo = document.querySelector('.titulo');

function writeDespedida(data){
    document.querySelector('.titulo').innerHTML = `Bienvenido ${data}!`
}

fetch('/user')
    .then(response => response.json())
    .then(data => writeDespedida(data));
 



boton.addEventListener('click', async (e) => {
    e.preventDefault()
    fetch('api/logout')
        .then(resultado => {
            return resultado.json
        })
    window.location.href = './login'

})


