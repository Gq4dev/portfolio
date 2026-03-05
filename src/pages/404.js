import Link from 'next/link'
import { FcHome } from 'react-icons/fc'

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/"><FcHome /></Link>
    </div>
  )
}
