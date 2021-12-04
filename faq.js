const itensPerguntasERespostas = document.querySelectorAll('.item')

itensPerguntasERespostas.forEach( item => {
    item.addEventListener('click', () => {
        const estaAtivo = item.classList.contains('ativo')

        itensPerguntasERespostas.forEach(item => {
            item.classList.remove('ativo')
        })

        if(!estaAtivo) {
            item.classList.add('ativo')
        }
        else {
            item.classList.remove('ativo')
        }
        
    })
})