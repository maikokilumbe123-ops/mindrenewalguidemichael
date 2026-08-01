import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'MindRenewalGuide Publications | Vitabu vya Kikristo',
      },
      {
        name: 'description',
        content:
          'Vitabu vya Kikristo na mafunzo ya saikolojia ya utambuzi kwa ukuaji wa kiroho, utambulisho na kusudi.',
      },
      {
        name: 'theme-color',
        content: '#142b2b',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sw">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
