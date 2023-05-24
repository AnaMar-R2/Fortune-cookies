import randomElementFromArray from '../utils/randomElementFromArray'
import phrases from '../utils/phrases.json'

const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackground}) => {
  const handleRandomPhrase = () => {
    const newRandomPhrase = randomElementFromArray(phrases)
      setPhraseRandom(newRandomPhrase)
    const newPath = randomElementFromArray(arrBackground)
      setPathRandom(newPath)
  }

  return (
    <div >
      <button className='app__btn' onClick={handleRandomPhrase}>
        <span className='span-btn'>Prueba tu suerte</span>   
        <img className='img-btn' src="../images/fortune-cookies.png" alt="fortune_cookies" />
      </button>
    </div>
  )
}

export default ButtonPhrase