import Link from "next/link";
import { ReactNode } from 'react'
import './style.scss'

type CategoryProps = {
  children: ReactNode
  variant: 'primary' | 'secondary'
  slug: string
}

export default function Category({
  children,
  variant,
  slug,
}: CategoryProps) {
  return (
    <Link href={`/categories/${slug}`} className={`category ${variant}`}>
      {children}
    </Link>
  )
}
