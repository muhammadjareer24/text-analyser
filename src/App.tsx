import { ChangeEvent, useState } from 'react'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import TopResultBox from './components/TopResultBox'

export const App = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState({
    wordCount: 0,
    characterCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    pronounCount: 0,
  })

  const pronouns = [
    'i',
    'you',
    'he',
    'she',
    'it',
    'we',
    'they',
    'me',
    'him',
    'her',
    'us',
    'them',
  ]

  const TextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value
    setText(inputText)

    const wordCount = inputText.split(/\s+/).filter(Boolean).length

    const characterCount = inputText.length

    const sentenceCount = inputText.split(/[.!?]+/).filter(Boolean).length

    const paragraphCount = inputText.split(/\n\s*\n/).filter(Boolean).length

    const pronounCount = inputText
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => pronouns.includes(word)).length

    setResult({
      wordCount,
      characterCount,
      sentenceCount,
      paragraphCount,
      pronounCount,
    })
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-primary-background font-poppins"
      style={{ backgroundImage: "url('./assets/images/appCover.png')" }}
    >
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl ">
        <div className="flex flex-col justify-center mt-4 md:mb-4">
          <TopResultBox result={result} />
          <TextArea text={text} TextChange={TextChange} />
          <BottomResultBox text={text} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
