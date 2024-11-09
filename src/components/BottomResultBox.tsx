import { BottomResultBoxProps } from '../types'

const BottomResultBox: React.FC<BottomResultBoxProps> = ({ text }) => {
  const wordCount = text.split(/\s+/).filter(Boolean).length

  const averageReadingTime = Math.floor(wordCount / 200)

  const formattedReadingTime =
    averageReadingTime < 1 ? '~1 min' : `${averageReadingTime} min`

  const dispalyReadingTime = text.trim() ? formattedReadingTime : '-'

  const longestWord = text
    .split(/\s+/)
    .filter(Boolean)
    .reduce((prev, current) => {
      return current.length > prev.length ? current : prev
    }, '')

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: dispalyReadingTime,
    },
    {
      title: 'Longest word:',
      value: longestWord || '-',
    },
  ]

  return (
    <div
      className="px-6 py-6 md:px-8 md:py-7 bg-secondary-background shadow-md rounded-md border-box 
  flex justify-around md:flex-row sm:flex-col sm:items-center sm:gap-4"
    >
      {bottomResultBar.map(({ title, value }) => (
        <div className="flex flex-row items-center" key={title}>
          <span className="text-secondary-text font-medium text-sm md:text-base">
            {title}
          </span>
          <span
            className="text-primary-text font-semibold text-base md:text-lg 
        ml-2 md:ml-3 md:font-medium"
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
