function abrirPokebola() {

    let topo = document.querySelector('#topo')
    let pokemon = document.querySelector('#img')
    let classe = document.querySelector('.pokebola')
    let btn = document.querySelector('#botao3')

    btn.id = "botaoAbrir"
    classe.className = "pokebolarolar"

    setTimeout(abrir => {

        topo.id = "abrirTopo"

        let numero = Math.floor((Math.random() * 3) + 1)
        console.log(numero)

        if (numero === 1) {

            pokemon.src = "pokemons/pikachu.png"
            alertify.message("Você ganhou um Pikachu!")

        } else if (numero === 2) {

            pokemon.src = "pokemons/squirtle.png"
            alertify.message("Você ganhou um Squirtle!")

        } else {

            pokemon.src = "pokemons/charmander.png"
            alertify.message("Você ganhou um Charmander!")

        }

        pokemon.id = "imgPokemon"

        setTimeout(fechar => {

            topo.id = "topo"
            pokemon.id = "img"
            btn.id = "botao3"
            classe.className = "pokebola"


        }, 3000)

    }, 3000);


}