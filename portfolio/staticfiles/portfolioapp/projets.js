/*
<div><h2>Mes projets informatiques</h2>
            <div class="wrapper">
            <div class="java">
                <img src="{% static 'media/java.png' %}" alt="Projets Java">
                <h4>Mon projet de fin de seconde année : Id'Meal, <a href="https://github.com/ThomasColin1/Id-Meal">téléchargez le fichier ici</a></h4>
                <h4>Synchroniser automatiquement une clé et un fichier, <a href="https://github.com/ThomasColin1/USBSync">téléchargez le fichier ici</a>
                    </br>Ou juste deux fichier entre eux, <a href="https://github.com/ThomasColin1/FILESync">téléchargez le fichier ici</a>
                </h4>
                <h4>En cours : un jeu de gestion dans un froid polaire</h4>
            </div>
            <!--<div class="arduino">
                <img src={% static "media/arduino.png" %} alt="Projets Arduino">
                <h4><br><br><br>Une serre autonome lors d'un projet de Terminale S</h4>
                </div>
                <div class="matlab">
                <img src={% static "media/matlab.png" %} alt="Projets Matlab">
                <h4>Etude de la formation des anneaux de Saturne et des forces de marée</h4>
                <video width="200" height="150" controls>s
                    <source src={% static "media/matlab.mp4" %} type="video/mp4">
                Your browser does not support the video tag.
                </video>
                </div>-->
            <div class="html">
                <img src={% static "media/html.png" %} alt="Projets html, css et javascript">
                <h4><a href="https://thomascolin1.github.io/REACT">Cette version du portfolio en React</a></h4>
                <h4><a href="https://thomascolin1.github.io/SnakeJS/">Un snake en JS</a></h4>
            </div>
            <div class="python">
                <img src={% static "media/djangopython.png" %} alt="Projets Django et Python">
                <h4>Ce portfolio</h4>
                <h4>Utilisation dans le cadre de l'association étudiante <a href="https://sia.asso-insa-lyon.fr">SIA</a></h4>
            </div>
            <div class="cpp">
                <img src={% static "media/cpp.png" %} alt="Projets C++">
                <h4>Un gestionnaire de trajets, <a href="https://github.com/ThomasColin1/ProjetTrajetsCpp">téléchargez les fichiers ici</a></h4>
            </div>
            </div>
        </div> */

function TitreProjets(){
    return(<h2>Mes projets informatiques</h2>)
}

function Wrapper(){
    return(<div class='Wrapper'><Java /><Html /><Python /><CPP /></div>)
}

function Java(){
    return(<div class="java"><ImgJava /><Java1 /><Java2 /><Java3 /></div>)
}

function ImgJava(){
    return(<img src='/static/media/java.png' alt="Projets Java"/>)
}

function Java1(){
    return (<h4>Mon projet de fi de seconde année : Id'Meal, <a href="https://github.com/ThomasColin1/Id-Meal">téléchargez le fichier ici</a></h4>)
}

function Java2(){
    return(
    <h4>Synchroniser automatiquement une clé et un fichier, <a href="https://github.com/ThomasColin1/USBSync">téléchargez le fichier ici</a>
        <br/>Ou juste deux fichier entre eux, <a href="https://github.com/ThomasColin1/FILESync">téléchargez le fichier ici</a>
    </h4>)
}

function Java3(){
    return(<h4>En cours : un jeu de gestion dans un froid polaire</h4>)
}

function Html(){
    return(<div class='html'><ImgHtml /><Html1 /><Html2 /><Html3 /></div>)
}

function ImgHtml(){
    return(<img src="/static/media/html.png" alt="Projets html, css et javascript"/>)
}

function Html1(){
    return (<h4><a href="https://thomascolin1.github.io/SnakeJS/">Un snake en JS</a></h4>)
}

function Html2(){
    return(<h4><a href="https://thomascolin1.github.io/portfolio">Ce portfolio avec React</a></h4>)
}

function Html3(){
    return(<h4></h4>)
}

function Python(){
    return(<div class='python'><ImgPy /><Py1 /><Py2 /><Py3 /></div>)
}

function ImgPy(){
    return(<img src="/static/media/djangopython.png" alt="Projets Django et Python"/>)
}

function Py1(){
    return (<h4><a href="https://thomascolin1.github.io/portfolio/">Ce portfolio avec Django</a></h4>)
}

function Py2(){
    return(<h4>Utilisation dans le cadre de l'association étudiante <a href="https://sia.asso-insa-lyon.fr">SIA</a></h4>)
}

function Py3(){
    return(<h4></h4>)
}

function CPP(){
    return(<div class='cpp'><ImgCPP /><CPP1 /><CPP2 /><CPP3 /></div>)
}

function ImgCPP(){
    return(<img src="/static/media/cpp.png" alt="Projets C++"/>)
}

function CPP1(){
    return (<h4>Un gestionnaire de trajets, <a href="https://github.com/ThomasColin1/ProjetTrajetsCpp">téléchargez les fichiers ici</a></h4>)
}

function CPP2(){
    return(<h4></h4>)
}

function CPP3(){
    return(<h4></h4>)
}


ReactDOM.render(
    <div><TitreProjets /><Wrapper /></div>,
    document.getElementById('projets')
)