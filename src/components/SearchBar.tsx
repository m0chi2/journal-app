import { useState } from 'react'

type SearchBarProps = {
  value: string
}

const initialData: SearchBarProps = {
  value: ''
}

const [data, setData] = useState<SearchBarProps>(initialData)

export const SarchBar = ({ value }: SearchBarProps): JSX.Element =>
