const episodiosRickandmorty =async (pagina)=>{
    let URL= `https://rickandmortyapi.com/api/episode/?page=`+pagina;
    const api= await fetch (URL);
    const data =await api.json();
    divRes = document.querySelector('#resultados');


    divRes.innerHTML="";


    data.results.map((episodios) =>{
        console.log(episodios);
        divItem = document.createComment('div');
        divItem = `
        <div class="card" style='width:19rem'>
        <div class="card-body">
        <div class="info">
        <h2 class"card-title">  ${episodios.name}</h2>
        <h5 class"card-title">  ${episodios.episode}</h5>
        <h6 class="car-text">   ${episodios.air_date} </h6>
        </div>
            </div>
        </div>
        
        
        `
        divRes.innerHTML+=divItem
    });
    
    
}
episodiosRickandmorty(1)