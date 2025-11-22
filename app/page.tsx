import RsvpForm from './components/RsvpForm'
import Image from 'next/image'
import { FloralCorner, FloralBorder } from './components/FloralDecor'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-200 to-emerald-100 animate-gradient-shift"></div>

        {/* Floral decorations */}
        <FloralCorner position="top-left" />
        <FloralCorner position="bottom-right" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'var(--font-playfair)' }}>
            Sara & Gray
          </h1>
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-700" style={{ fontFamily: 'var(--font-dancing)' }}>
            Cholman and the Cholman in law
          </h2>
          <div className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            <p className="mb-2">Hala dasta bala</p>
            <p className="mb-2">Bian bezanim dasta ro bala</p>
            <p className="mb-2">too joob beja</p>
            <p className="mb-2">bokonim hava</p>
            <p>boos bedim be shoma</p>
          </div>
        </div>
      </section>

      {/* Photo Section 1 */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-emerald-50 to-amber-50 overflow-hidden">
        <FloralCorner position="top-right" className="opacity-40" />
        <FloralCorner position="bottom-left" className="opacity-40" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative p-4 md:p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-2xl">
            <div className="absolute -top-4 -left-4 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
                <circle cx="50" cy="50" r="20" fill="#d97706"/>
                <circle cx="65" cy="45" r="15" fill="#dc2626"/>
                <circle cx="60" cy="60" r="15" fill="#059669"/>
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
                <circle cx="50" cy="50" r="20" fill="#84cc16"/>
                <circle cx="35" cy="55" r="15" fill="#d97706"/>
                <circle cx="40" cy="40" r="15" fill="#ea580c"/>
              </svg>
            </div>
            <Image
              src="/pics/pic1.png"
              alt="Wedding photo 1"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-100 to-emerald-100 animate-gradient-shift"></div>

        <FloralCorner position="top-left" />
        <FloralCorner position="bottom-right" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-800" style={{ fontFamily: 'var(--font-playfair)' }}>
            Please RSVP
          </h2>
          <FloralBorder className="mb-8" />
          <RsvpForm />
        </div>
      </section>

      {/* Photo Section 2 */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-amber-50 to-rose-50 overflow-hidden">
        <FloralCorner position="top-left" className="opacity-40" />
        <FloralCorner position="bottom-right" className="opacity-40" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative p-4 md:p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-2xl">
            <div className="absolute -top-4 -right-4 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
                <circle cx="50" cy="50" r="20" fill="#dc2626"/>
                <circle cx="35" cy="45" r="15" fill="#d97706"/>
                <circle cx="40" cy="60" r="15" fill="#84cc16"/>
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
                <circle cx="50" cy="50" r="20" fill="#059669"/>
                <circle cx="65" cy="55" r="15" fill="#ea580c"/>
                <circle cx="60" cy="40" r="15" fill="#fbbf24"/>
              </svg>
            </div>
            <Image
              src="/pics/pic2.png"
              alt="Wedding photo 2"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-emerald-100 to-amber-100 animate-gradient-shift"></div>
        <FloralCorner position="top-left" />
        <FloralCorner position="bottom-right" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-800" style={{ fontFamily: 'var(--font-playfair)' }}>
            Venue
          </h2>
          <FloralBorder className="mb-8" />
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              [Venue Name]
            </p>
            <p className="text-lg text-gray-700 mb-2">
              [Address Line 1]
            </p>
            <p className="text-lg text-gray-700 mb-4">
              [City, State ZIP]
            </p>
            <p className="text-gray-600">
              [Add any special venue notes or directions here]
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-amber-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'var(--font-playfair)' }}>
            Schedule
          </h2>
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ceremony</h3>
              <p className="text-lg text-gray-700">[Time] - [Location]</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cocktail Hour</h3>
              <p className="text-lg text-gray-700">[Time] - [Location]</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Reception</h3>
              <p className="text-lg text-gray-700">[Time] - [Location]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-amber-100 to-rose-100 animate-gradient-shift"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'var(--font-playfair)' }}>
            Transportation
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4">
              [Add parking information, shuttle services, public transportation options, etc.]
            </p>
            <p className="text-gray-600">
              [Any additional transportation notes]
            </p>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'var(--font-playfair)' }}>
            Dress Code
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              [Dress Code Type]
            </p>
            <p className="text-lg text-gray-700">
              [Description of what guests should wear]
            </p>
          </div>
        </div>
      </section>

      {/* Gift Reminder */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100 animate-gradient-shift"></div>
        <FloralCorner position="top-right" />
        <FloralCorner position="bottom-left" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-amber-50 border-4 border-amber-600 rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900" style={{ fontFamily: 'var(--font-playfair)' }}>
              REMEMBER TO BRING GIFTS FOR SARA'S BROTHER
            </h2>
            <p className="text-lg text-amber-800">
              [Add any additional details about gifts here]
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 bg-gradient-to-br from-emerald-100 to-amber-100 text-center">
        <p className="text-gray-700 text-lg">
          We can't wait to celebrate with you!
        </p>
      </section>
    </div>
  )
}
