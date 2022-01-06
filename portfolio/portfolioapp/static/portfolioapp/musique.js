    
function TitreMusique(){
    return(<h2>En dehors de l'informatique...</h2>)
}

function Musique(){
    return(<div><Partitions /><Soundcloud /></div>)
}

function Partitions(){
    return(<div><h3>Mes partitions de compos : </h3>
        <a href="https://musescore.com/user/21039521"><img src="/static/media/musescore.png" alt="Lien vers mon musescore" id="musescore" width="85"/></a></div>
    )
}

function Soundcloud(){
    return(<div><h3>Mes compos et reprises de musique : </h3>
        <a href="https://soundcloud.com/colin-thomas-620797489"><img src="/static/media/soundcloud.png" alt="Lien vers mon Soundcloud" id="soundcloud"/></a></div>
     )
}



ReactDOM.render(
    <div><TitreMusique /><Musique /></div>,
    document.getElementById('divers')
)