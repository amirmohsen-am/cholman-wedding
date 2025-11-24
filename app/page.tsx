import RsvpForm from './components/RsvpForm'
import Image from "next/image"
import AddToCalendar from './components/AddToCalendar'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-3 text-gray-800" style={{ fontFamily: "var(--font-sahitya)" }}>
            Sara & Gray
          </h1>
          <p className="text-lg md:text-xl text-gray-700" style={{ fontFamily: "var(--font-sahitya)" }}>
            are inviting you to celebrate their love
          </p>
          <p className="text-lg md:text-xl text-gray-700" style={{ fontFamily: "var(--font-sahitya)" }}>
            on September 5th at 4:20 pm
          </p>
        </div>
      </section>

      {/* Main Couple Photo */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/pics/IMG_6391.png"
              alt="Sara and Gray"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Two Photos Grid */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Photo */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/pics/IMG_6397.png"
                alt="Photo 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Photo */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/pics/IMG_6416.png"
                alt="Photo 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form Section with Coral Background */}
      <section className="py-12 px-4 mb-12">
        <div className="max-w-4xl mx-auto bg-[#FF6F3A] rounded-lg p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
            Please RSVP
          </h2>
          <RsvpForm />

          {/* Add to Calendar Button */}
          <div className="mt-8 flex justify-center">
            <AddToCalendar />
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#C5D86D] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800" style={{ fontFamily: "var(--font-sahitya)" }}>
              Venue
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "var(--font-sahitya)" }}>
              Patapsco Valley State Park - Hollofield Area, Unit 320
            </p>
            <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: "var(--font-sahitya)" }}>
              8020 Baltimore National Pike, Ellicott City, MD 21043
            </p>
            <p className="text-base text-gray-700" style={{ fontFamily: "var(--font-sahitya)" }}>
              Special notes TBA...
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#D4A5A5] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800" style={{ fontFamily: "var(--font-sahitya)" }}>
              Schedule
            </h2>
            <div className="space-y-4 text-gray-800" style={{ fontFamily: "var(--font-sahitya)" }}>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-lg">12pm - Arrive & social hour</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-lg">1pm - Ceremony</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-lg">2pm - Lunch, speeches, vibe time</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-lg">5pm - Wrap up at the park</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-lg">8pm - Second location party</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800" style={{ fontFamily: "var(--font-sahitya)" }}>
              Dress Code
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: "var(--font-sahitya)" }}>
                Feeling cute, we counted on you to wear something fun or saying in case you didn't know this was a picnic style wedding so that's nice and chill it's outside so shoes won't be outside — we recommend shoes you'll feel comfortable walking on grass/dirt in. Early spring like vibe so the day typically has cool spring like weather, with a 20% average chance of precipitation, and average daytime high temperature around 41 F and low temp around 27 F. We recommend layers!
              </p>
              <p className="text-base text-gray-600 italic" style={{ fontFamily: "var(--font-sahitya)" }}>
                If possible, please use our color palette to inspire your outfit :)
              </p>
            </div>

            {/* Color Palette Flowers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/pics/IMG_7683.png"
                  alt="Flower arrangement 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/pics/IMG_7684.png"
                  alt="Flower arrangement 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/pics/IMG_7685.png"
                  alt="Flower arrangement 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/pics/IMG_7688.png"
                  alt="Flower arrangement 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Photos Section */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/pics/IMG_7779.png"
                alt="Additional photo 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/pics/P1010500.png"
                alt="Additional photo 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wildflower Photos Section */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="/pics/image.png"
              alt="Wildflower field"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Transportation & Final Message */}
      <section className="py-12 px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: "var(--font-sahitya)" }}>
            Run out of time to add Transportation & Registry
          </p>
          <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: "var(--font-sahitya)" }}>
            & We can't wait to celebrate with you
          </p>
          <p className="text-lg text-gray-700" style={{ fontFamily: "var(--font-sahitya)" }}>
            boo mooha mooha
          </p>
        </div>
      </section>
    </div>
  )
}
