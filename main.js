// capturamos el input
let filtro = document.getElementById('filtro')

filtro.addEventListener('keyup', filtrar)

function filtrar(){
    let valorFiltro = document.getElementById('filtro').value.toUpperCase()

    let ul = document.getElementById('nombres')
    let li = ul.querySelectorAll('li.collection-item')

    for(let i=0; i< li.length;i++){
        let a = li[i].getElementsByTagName('a')[0]

        if(a.innerHTML.toUpperCase().indexOf(valorFiltro) > -1){
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }
    }
    console.log(valorFiltro)
}