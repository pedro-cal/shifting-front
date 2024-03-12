// import { motion } from 'framer-motion'
import Head from "next/head"
import ContactForm from "components/Form/ContactForm"
import Header from "components/Header/Header"
import SectionOne from "components/SectionOne/SectionOne"
import SectionTwo from "components/SectionTwo/SectionTwo"

export default function Home() {

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
        <script type="text/javascript" async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SLfmGf"></script>
      </Head>
      <section>
        <Header />
      </section>
      <section>
        <SectionOne />
      </section>
      <section>
        <div>
          <SectionTwo />
        </div>
      </section>
      <section className='bg-stone-950 pt-10 overflow-hidden'>
        <ContactForm />
        {/* <motion.div
          initial={{x: 1000}}
          whileInView={{x: 0}}
          transition={{duration: 1.25}}
        >
          <ContactForm />
        </motion.div> */}
      </section>
    </>
  )
}
