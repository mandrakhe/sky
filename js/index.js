const apiRickandmorty =async (pagina)=>{
    let URL= `https://rickandmortyapi.com/api/character/?page=`+pagina;
    const api= await fetch (URL);
    const data =await api.json();
    divRes = document.querySelector('#resultado');


    divRes.innerHTML="";


    data.results.map((personaje) =>{
        console.log(personaje);
        divItem = document.createComment('div');
        divItem = `
        <div class="card" style='width:19rem'>
        <div class="card-body">
        <img class="card-img-top" src="${personaje.image}" alt="card image cap">
        <h5 class"card-title">${personaje.name}</h5>
        <h4 class="car-text">${personaje.gender} </h4>
            <p class="car-text">${personaje.status} </p>
            <p class="car-text">${personaje.species} </p>
            </div>
        </div>
        
        
        `
        divRes.innerHTML+=divItem
    });
    
    
}
apiRickandmorty(1)