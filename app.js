function abrirPokebola(){

    const topo = document.querySelector('#topo')
    const pokemon = document.querySelector('#img')
    topo.id = "topo"
    topo.id = "abrirTopo"
    pokemon.id = 'img'

    let numero = Math.floor((Math.random()*3)+1)
    console.log(numero)

    if(numero===1){

        pokemon.src = "pokemons/pikachu.png"

    }else if(numero===2){

        pokemon.src = "pokemons/squirtle.png"

    }else{

        pokemon.src = "pokemons/charmander.png"

    }

    pokemon.id = "imgPokemon"


}