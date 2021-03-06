import Head from 'next/head'
import ReactPlayer from 'react-player/youtube'

export default function Home() {
  return (
    <>
      <Head>
        <title>Better Days – FWFA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center p-4">
        <div className="w-full xl:w-1/2 md:w-2/3">
          <div className="relative" style={{ paddingBottom: '56.3%' }}>
            <div className="absolute object-cover shadow-2xl w-full h-full">
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
        </div>
      </div>
    </>
  )
}
