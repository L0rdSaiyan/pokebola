function abrirPokebola() {

    let topo = document.querySelector('#topo')
    let pokemon = document.querySelector('#img')
    let classe = document.querySelector('.pokebola')
    let btn = document.querySelector('#botao3')
    let audio = document.querySelector('#audio')

    btn.id = "botaoAbrir"
    classe.className = "pokebolarolar"

    setTimeout(abrir => {

        topo.id = "abrirTopo"

        let numero = Math.floor((Math.random() * 4) + 1)
        console.log(numero)

        if (numero === 1) {

            pokemon.src = "pokemons/pikachu.png"
            alertify.success("Você ganhou um Pikachu!")
            audio.src = "audios/pikachu.wav"
            audio.play()

        } else if (numero === 2) {

            pokemon.src = "pokemons/squirtle.png"
            alertify.success("Você ganhou um Squirtle!")
            audio.src = "audios/squirtle.wav"
            audio.play()

            setTimeout(parar => {

                audio.pause()

            }, 3000)


        } else if (numero === 3) {

            pokemon.src = "pokemons/charmander.png"
            alertify.success("Você ganhou um Charmander!")
            audio.src = "audios/charmander.wav"
            audio.play()

            setTimeout(parar => {

                audio.pause()

            }, 3000)

        } else {

            pokemon.src = "pokemons/bulbasaur.png"
            alertify.success("Você ganhou um Bulbasaur!")
            audio.src = "audios/bulbasaur.wav"
            audio.play()

            setTimeout(parar => {

                audio.pause()

            }, 3000)


        }

        pokemon.id = "imgPokemon"

        setTimeout(fechar => {

            topo.id = "topo"
            pokemon.id = "img"
            btn.id = "botao3"
            classe.className = "pokebola"
            pokemon.src = ""


        }, 3000)

    }, 3000);


}

