import RsvpForm from './components/RsvpForm'
import Image from "next/image"
import AddToCalendar from './components/AddToCalendar'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal mb-6" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
            Sara & Gray
          </h1>
          <p className="text-xl md:text-3xl" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
            are inviting you to celebrate their love on September 5th at 4:20 pm
          </p>
        </div>
      </section>

      {/* Second Image at Top */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/pics/IMG_6397.png"
              alt="Photo at top"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* RSVP Form Section with Coral Background */}
      <section className="py-12 px-4 mb-12">
        <div className="max-w-4xl mx-auto bg-[#FF6F3A] rounded-lg p-8 md:p-12">
          <h2 className="text-4xl md:text-6xl font-normal text-center mb-8 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
            Please RSVP
          </h2>
          <RsvpForm />

          {/* Add to Calendar Button */}
          <div className="mt-8 flex justify-center">
            <AddToCalendar />
          </div>
        </div>
      </section>

      {/* Third Image After RSVP */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/pics/IMG_6416.png"
              alt="Photo after RSVP"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#CCDB69] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-6xl font-normal mb-6" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
              Venue
            </h2>
            <p className="text-2xl md:text-4xl font-normal mb-4" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
              Patapsco Valley State Park - Hollofield Area, Unit 320
            </p>
            <p className="text-xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
              8020 Baltimore National Pike, Ellicott City, MD 21043
            </p>
            <p className="text-xl md:text-2xl" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              Special notes TBA...
            </p>
          </div>
        </div>
      </section>

      {/* First Image Between Venue and Schedule */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/pics/IMG_6391.png"
              alt="Sara and Gray"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#DDB3AA] rounded-lg p-8 md:p-12">
            <h2 className="text-4xl md:text-6xl font-normal text-center mb-8" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
              Schedule
            </h2>
            <div className="space-y-4 text-lg md:text-2xl" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              <div className="pb-2">
                <p>12pm - Arrive & social hour</p>
              </div>
              <div className="pb-2">
                <p>1pm - Ceremony</p>
              </div>
              <div className="pb-2">
                <p>2pm - Lunch, speeches, vibe time</p>
              </div>
              <div className="pb-2">
                <p>5pm - Wrap up at the park</p>
              </div>
              <div className="pb-2">
                <p>8pm - Second location party</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#C1DBFD] rounded-lg p-8 md:p-12 shadow-lg">
            <h2 className="text-4xl md:text-6xl font-normal text-center mb-6" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
              Dress Code
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg md:text-2xl mb-6" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
                Feeling cute, we counted on you to wear something fun or saying in case you didn't know this was a picnic style wedding so that's nice and chill it's outside so shoes won't be outside — we recommend shoes you'll feel comfortable walking on grass/dirt in. Early spring like vibe so the day typically has cool spring like weather, with a 20% average chance of precipitation, and average daytime high temperature around 41 F and low temp around 27 F. We recommend layers!
              </p>
              <p className="text-lg md:text-xl italic" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
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
          <p className="text-lg md:text-2xl mb-4" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
            Run out of time to add Transportation & Registry
          </p>
          <p className="text-lg md:text-2xl mb-4" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
            & We can't wait to celebrate with you
          </p>
          <p className="text-lg md:text-2xl" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
            boo mooha mooha
          </p>
        </div>
      </section>
    </div>
  )
}
