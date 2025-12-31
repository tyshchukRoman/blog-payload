import '@styles/main.scss'
import './Category.scss'
import { ReactNode } from 'react'

type CategoryProps = {
  children: ReactNode
  variant: 'primary' | 'secondary'
}

export default function Category({
  children,
  variant,
}: CategoryProps) {
  return (
    <span className={`category ${variant}`}>
      {children}
    </span>
  )
}
