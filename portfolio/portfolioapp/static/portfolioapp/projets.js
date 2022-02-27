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
    return(<div class='Wrapper'><Vue /><Html /><Python /><CPP /><Java /></div>)
}

function Vue(){
    return(<div class="vue carte"><ImgVue /><VueContent /></div>)
}

function ImgVue(){
    return(<div class="imgBx"><img src='/static/media/vue.png' alt="Projets VueJS"/></div>)
}

function Vue1(){
    return (<h4>Un Launchpad créé sous le framework Quasar, <a href="https://thomascolin1.github.io/LaunchpadPublish-V2/#/l">que vous pouvez essayer en ligne ici</a></h4>)
}

function Vue2(){
    return(<h4></h4>)
}

function Vue3(){
    return(<h4></h4>)
}

function VueContent(){
    return(<div class="contentBx"><Vue1/><Vue2/><Vue3/></div>)
}

function Java(){
    return(<div class="java carte"><ImgJava /><JavaContent/></div>)
}

function ImgJava(){
    return(<div class="imgBx"><img src='/static/media/java.png' alt="Projets Java"/></div>)
}

function Java1(){
    return (<h4>Mon projet de fin de seconde année : Id'Meal, <a href="https://github.com/ThomasColin1/Id-Meal">téléchargez le fichier ici</a></h4>)
}

function Java2(){
    return(
    <h4>Synchroniser automatiquement une clé et un fichier, <a href="https://github.com/ThomasColin1/USBSync">téléchargez le fichier ici</a>
        <br/>Ou juste deux fichier entre eux, <a href="https://github.com/ThomasColin1/FILESync">téléchargez le fichier ici</a>
    </h4>)
}

function Java3(){
    return(<h4></h4>)
}

function JavaContent(){
    return(<div class="contentBx"><Java1/><Java2/><Java3/></div>)
}

function Html(){
    return(<div class='html carte'><ImgHtml /><div class="contentBx"><Html1 /><Html2 /><Html3 /></div></div>)
}

function ImgHtml(){
    return(<div class="imgBx"><img src="/static/media/web.png" alt="Projets html, css et javascript"/></div>)
}

function Html1(){
    return(<h4><a href="https://dystorr.pythonanywhere.com/portfolioapp/">Ce portfolio avec React</a></h4>)
}

function Html2(){
    return (<h4><a href="https://ThomasColin1.github.io/SnakeJS">Un snake en JS</a></h4>)
}

function Html3(){
    return(<h4></h4>)
}

function Python(){
    return(<div class='python carte'><ImgPy /><div class="contentBx"><Py1 /><Py2 /><Py3 /></div></div>)
}

function ImgPy(){
    return(<div class="imgBx"><img src="/static/media/django.png" alt="Projets Django et Python"/></div>)
}

function Py1(){
    return (<h4><a href="https://dystorr.pythonanywhere.com/portfolioapp/">Ce portfolio avec Django</a></h4>)
}

function Py2(){
    return(<h4>Utilisation dans le cadre de l'association étudiante <a href="https://sia.asso-insa-lyon.fr">SIA</a></h4>)
}

function Py3(){
    return(<h4></h4>)
}

function CPP(){
    return(<div class='cpp carte'><ImgCPP /><div class="contentBx"><CPP1 /><CPP2 /><CPP3 /></div></div>)
}

function ImgCPP(){
    return(<div class="imgBx"><img src="/static/media/c.png" alt="Projets C++"/></div>)
}

function CPP1(){
    return (<h4>Un gestionnaire de trajets, <a href="https://github.com/ThomasColin1/ProjetTrajetsCpp">téléchargez les fichiers ici</a></h4>)
}

function CPP2(){
    return(<h4>Un analyseur de logs Apache, créant un graphe de visualisation du traffic, <a href="https://github.com/ThomasColin1/Log-Analyzer-CPP">téléchargez les fichiers ici</a></h4>)
}

function CPP3(){
    return(<h4></h4>)
}


ReactDOM.render(
    <div><TitreProjets /><Wrapper /></div>,
    document.getElementById('projets')
)