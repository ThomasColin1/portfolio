
function Propos() {
    return (
        <p>Je m'appelle Colin, je suis un élève de troisième année de l'INSA de Lyon. Je m'intéresse beaucoup à la programmation web, mobile, ou autre.
           Sur ce site, je rassemble tous mes projets, informatiques ou autres, disponibles à chacun. D'une pierre deux coups, je profite de la création de ce site
           pour m'entraîner en HTML, CSS, Django et React.<br/><br/> N'hésitez pas à me contacter !
        </p>)
}

function TitrePropos() {
    return (<h2>A propos de moi</h2>)
}


ReactDOM.render(
    <div><TitrePropos /><Propos /></div>,
    document.getElementById('propos')
)