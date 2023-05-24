import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCards from './components/PhrasesCards'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'
import AuthorCard from './components/AuthorCard'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const arrBackground = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function App() {
  const initialPhrase = randomElementFromArray(phrases)
  const initialPath = randomElementFromArray(arrBackground)

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
  const [pathRandom, setPathRandom] = useState(initialPath)

  const objStyle = {
    backgroundImage: `url('/images/fondo${pathRandom}.jpg')`
  }

  return (
    <SwitchTransition>
      <CSSTransition
        classNames='fade'
        key={pathRandom}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
      >

        <div style={objStyle} className='app'>
          <h1 className='app__title'>Galletas de la Fortuna</h1>
          <div className='app__cardButton'>
            <PhrasesCards phraseRandom={phraseRandom}/>
            <ButtonPhrase 
              setPathRandom={setPathRandom}
              setPhraseRandom={setPhraseRandom}
              arrBackground={arrBackground}
            />
          </div>
          <AuthorCard phraseRandom={phraseRandom}/>
        </div>
      </CSSTransition>
    </SwitchTransition>

  )
}

export default App
