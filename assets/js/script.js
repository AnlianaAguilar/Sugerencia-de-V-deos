let video = (()=>{

    function mostrarVideos(url,id){
        let videoIframe = document.getElementById(id);
        videoIframe.setAttribute("src", url)   
        //videoIframe.innerHTML = `<iframe> src="${url}"</iframe>` 
    }

    return{
        mostrar: function(url,id){
            mostrarVideos(url,id)
        }
    }
})()


//Establecer una clase padre denominada Multimedia
class Multimedia {
    constructor(url){
        this._url = ()=>url
    }
    
    get url(){
        return this._url()
    }

    set url(new_url){
        return this._url = ()=>new_url
    }

    setInicio(){
        return `Este método es para realizar un cambio en la URL del video.`
    }
}

//Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia
class Reproductor extends Multimedia {
    constructor(url, id){
        super(url)
        this._id = ()=>id
    }
    
    get id(){
        return this._id()
    }

    set id(new_id){
        return this._id =()=>new_id
    }

    playMultimedia(){
        video.mostrar(this.url,this.id)
    }

    setInicio(tiempo){ //se requiere un parametro
        this.url= this.url+`?start=${tiempo}`; //se llama al set para modificae la url 
    }

}

//Instanciar la clase hija pasando como argumento la URL y el id
let musica = new Reproductor ("https://www.youtube.com/embed/a6aqKkoCMrA","musica") 
let pelicula = new Reproductor("https://www.youtube.com/embed/Lsglk8dqOJI","peliculas")
let serie = new Reproductor ("https://www.youtube.com/embed/xu4K6NHt3g8","series")//<iframe width="677" height="381" src="https://www.youtube.com/embed/xu4K6NHt3g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


musica.setInicio(60)
pelicula.setInicio(120)
serie.setInicio(30) 
//Invocar al método “playMultimedia” para cada instancia
musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

