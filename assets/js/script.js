let video = (()=>{

    function mostrarVideos(url,id){
        let videoIframe = document.getElementById(id);
        videoIframe.innerHTML = `<iframe> src="${url}"</iframe>` 
    }

    return{
        mostrar: function(url,id){
            mostrarVideos(url,id)
        }
    }
})()



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

    }
}

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

    }

    setInicio(){

    }

}