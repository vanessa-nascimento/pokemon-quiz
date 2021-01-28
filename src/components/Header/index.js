import Head from 'next/head'

function IndexPage() {
  return (
    <div>
        <Head>
            <title>Quiz Pokémon</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {/* Primary Tags */}
            <meta name="title" content="Quiz Pokémon" />
            <meta name="description" content="Teste os seus conhecimentos sobre Pokémon e prove que você é um mestre Pokémon" />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://pokemon-quiz.vanessa-nascimento.vercel.app/" />
            <meta property="og:title" content="Quiz Pokémon" />
            <meta property="og:description" content="Teste os seus conhecimentos sobre Pokémon e prove que você é um mestre Pokémon" />
            <meta property="og:image" content="" />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://pokemon-quiz.vanessa-nascimento.vercel.app/" />
            <meta property="twitter:title" content="Quiz Pokémon" />
            <meta property="twitter:description" content="Teste os seus conhecimentos sobre Pokémon e prove que você é um mestre Pokémon" />
            <meta property="twitter:image" content=""></meta>
        </Head>
    </div>
  )
}

export default IndexPage