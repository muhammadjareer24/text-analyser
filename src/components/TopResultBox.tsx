import { TopResultBoxProps } from '../types'

const TopResultBox: React.FC<TopResultBoxProps> = ({ result }) => {
  const resultBar = [
    { title: 'Words', value: result.wordCount },
    { title: 'Characters', value: result.characterCount },
    { title: 'Sentences', value: result.sentenceCount },
    { title: 'Paragraphs', value: result.paragraphCount },
    { title: 'Pronouns', value: result.pronounCount },
  ]
  return (
    <div className="p-4 lg:p-6 bg-secondary-background border border-box shadow-md rounded-md flex justify-around lg:justify-center flex-wrap gap-5 md:gap-0 md:justify-between lg:flex-nowrap font-poppins">
      {resultBar.map(({ title, value }) => (
        <div key={title} className="flex flex-col md:mr-0 lg:mx-12">
          <span className="text-secondary-text font-medium text-base ">
            {title}
          </span>
          <span className="text-primary-text font-semibold text-2xl mt-2 text-center">
            {value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TopResultBox
