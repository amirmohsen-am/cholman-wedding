import RsvpForm from './components/RsvpForm'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      <Image
        src="/pics/pic1.png"
        alt="Wedding background"
        width={1920}
        height={1080}
        className="w-full h-auto block"
        priority
      />
      <Image
        src="/pics/pic2.png"
        alt="Wedding background continued"
        width={1920}
        height={1080}
        className="w-full h-auto block"
      />
      <div className="bg-black/30 absolute inset-0" />
      <div className="absolute inset-0 py-12 px-4">
        <main className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Sara and Gray's wedding <br /> Cholman and the Cholman in law
            </h1>
            <p className="text-xl text-white drop-shadow-lg">
              Please RSVP below
              <br />
              Hala dasta bala
              <br />
              Bian bezanim dasta ro bala
              <br />
              too joob beja
              <br />
              bokonim hava
              <br />
              boos bedim be shoma
              <br />
            </p>
          </div>

          <RsvpForm />
        </main>
      </div>
    </div>
  )
}
