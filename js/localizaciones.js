const localizacionesrickandmorty =async (pagina)=>{
    let URL= `https://rickandmortyapi.com/api/location/?page=`+pagina;
    const api= await fetch (URL);
    const data =await api.json();
    divRes = document.querySelector('#result');


    divRes.innerHTML="";


    data.results.map((localizaciones) =>{
        console.log(localizaciones);
        divItem = document.createComment('div');
        divItem = `
        <div class="card" style='width:19rem'>
        <div class="card-body">
        <h5 class"card-title">${localizaciones.name}</h5>
        <h4 class="car-text">${localizaciones.type} </h4>
            <p class="car-text">${localizaciones.dimension} </p>
            <p class="car-text">${localizaciones.created} </p>
            </div>
        </div>
        
        
        `
        divRes.innerHTML+=divItem
    });
    
    
}
localizacionesrickandmorty(1)