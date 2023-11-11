import Head from "next/head"
import Header from "components/Header/Header";
import SectionOne from './../components/SectionOne/SectionOne';

export default function Web() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Shifting</title>
      </Head>
      <section>
        <Header />
        <SectionOne />
      </section>
      <section></section>
    </>
  )
}

//border-2 border-white border-solid