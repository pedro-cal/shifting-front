import "../styles/tailwind.css"
import "../styles/fx.scss"

import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
