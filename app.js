function abrirPokebola(){

    let topo = document.querySelector('#topo')
    let pokemon = document.querySelector('#img')
    let base = document.querySelector('#base')
    let faixa = document.querySelector('#faixa')
    let classe = document.querySelector('.pokebola')

    classe.className = "pokebolarolar"


    setTimeout(abrir => {
        
        topo.id = "abrirTopo"


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
    
    setTimeout(fechar=>{

        topo.id = "topo"
        pokemon.id = "img"


    },3000)



    }, 3000);

    
}