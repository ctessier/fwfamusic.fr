import Head from 'next/head'
import ReactPlayer from 'react-player/youtube'

export default function Home() {
  return (
    <>
      <Head>
        <title>Better Days – FWFA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center">
        <div className="relative w-1/2" style={{ paddingTop: '28.15%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=4vwFyex0tCA"
            light="https://i.ytimg.com/vi/4vwFyex0tCA/maxresdefault.jpg"
            width="100%"
            height="100%"
            className="absolute top-0 left-0 shadow-2xl"
            playing
            controls
          />
        </div>
      </div>
    </>
  )
}
