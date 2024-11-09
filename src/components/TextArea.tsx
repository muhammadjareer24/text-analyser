import { TextAreaProps } from '../types'

const TextArea: React.FC<TextAreaProps> = ({ text, TextChange }) => {
  return (
    <textarea
      className="w-full p-8 md:p-6 lg:p-5 bg-secondary-background mt-5 mb-5 
                 min-h-[400px] border border-box resize-none outline-none 
                 font-normal shadow-md rounded-md text-base md:text-lg lg:text-xl 
                 text-primary-text placeholder-light-gray 
                 placeholder-opacity-100 placeholder:font-bold"
      placeholder="Paste your text here..."
      value={text}
      onChange={TextChange}
      autoFocus
    ></textarea>
  )
}
export default TextArea
