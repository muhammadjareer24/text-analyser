import { ChangeEvent } from 'react'

interface ResultType {
  wordCount: number
  characterCount: number
  sentenceCount: number
  paragraphCount: number
  pronounCount: number
}

interface TopResultBoxProps {
  result: ResultType
}

interface TextAreaProps {
  text: string
  TextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

interface BottomResultBoxProps {
  text: string
}
