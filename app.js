const apiRickandmorty =async (pagina)=>{
    let URL "https://rickandmortyapi.com/api/character/?page=${pagina}"
    const api= await fetch (URL);
    const data =await api.json();
    divRes = document.querySelector(#resultado);


    divRes.innerHTML="";


    data.results.map((personaje) =>{
        console.log(personaje);
        divItem = document.createComment('div');
        divItem = `
        <div class="card" style='width:19rem'>
        <img class="card-img-top" src="${personaje.img}" alt="card image cap">
        <div class="card-body">
            <h5 class"card-title">${personaje.name}</h5>
            <p class="car-text">${personaje.status} </p>
            <p class="car-text">${personaje.species} </p>
            <p class="car-text">${personaje.gender} </p>
            </div>
        </div>
        
        
        `
        divRes.innerHTML+=divItem
    });
    
    apiRickandmorty(1)

}