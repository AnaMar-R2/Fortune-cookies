
const PhrasesCards = ({phraseRandom}) => {
    
    return (
        <div className="card">
            <img className="card-img" src="../images/cuadro-dialogo.svg" alt="fondo" />
            <p className="card-p">{phraseRandom.phrase}</p>
        </div>
    )
}

export default PhrasesCards