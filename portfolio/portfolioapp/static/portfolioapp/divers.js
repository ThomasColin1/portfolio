    
function TitreMusique(){
    return(<h2>En dehors de l'informatique...</h2>)
}

function Musique(){
    return(<div class="wrapper2"><Partitions /><Soundcloud /></div>)
}

function Partitions(){
    return(<div><h3>Mes partitions :</h3><div class="carte2">
        <div class="img1"><img src="/static/media/musescreen.jpg" alt="Lien vers mon musescore" id="musescore" width="85"/><img src="/static/media/score.png" alt="Lien vers mon musescore" id="musescore" width="85"/></div>
        <div class="details">
        <div class="content">
        <a href="https://musescore.com/user/21039521"><img src="/static/media/musescoretrans.png" alt="Lien vers mon musescore" id="musescore" width="100"/></a><br/><br/></div>
        </div></div><br/></div>
        )
}

function Soundcloud(){
    return(<div><h3>Mes enregistrements :</h3><div class="carte2">
    <div class="img1"><img src="/static/media/soundscreen.jpg" alt="Lien vers mon soundcloud" id="soundcloud" width="85"/><img src="/static/media/soundback.jpg" alt="Lien vers mon soundcloud" id="soundcloud" width="85"/></div>
    <div class="details">
    <div class="content">
    <a href="https://soundcloud.com/colin-thomas-620797489"><img src="/static/media/soundcloud.png" alt="Lien vers mon Soundcloud" id="soundcloud" with="100"/></a></div>
    </div></div><br/></div>
     )
}



ReactDOM.render(
    <div><TitreMusique /><Musique /></div>,
    document.getElementById("divers")
)