import Link from "next/link"


export default function page() {
  return (
    <>
      <Link href="/page1"><p>page1</p></Link>
      <Link href="/page2"><p>page2</p></Link>
    </>
  )
}