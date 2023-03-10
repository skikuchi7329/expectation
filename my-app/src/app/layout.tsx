import Image from 'next/image'
import Link from 'next/link'
import StyledComponentsRegistry from '../../lib/registry'
StyledComponentsRegistry;


export const metadata = {
  title: 'スロットのカチカタ',
  description: 'スロットの勝つ方法を教えます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='ja'>
        <body>
          <header>
            <h1><Link href="/">スロットのカチカタ</Link></h1>
            <nav>
              <ul>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/ichiran">一覧</Link></li>
                <li><Link href="/contact">コンタクト</Link></li>
              </ul>
            </nav>
          </header>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
  )
}


