import RsvpForm from './components/RsvpForm'
import Image from "next/image"
import AddToCalendar from './components/AddToCalendar'
import HeroImage from './components/HeroImage'

export default function Home() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto">
      {/* Hero Section */}
      <HeroImage />

      {/* RSVP Form Section with Coral Background */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto bg-[#FF6F3A] rounded-lg p-6 md:p-8 shadow-lg">
          <h2
            className="text-4xl md:text-6xl font-normal text-center mb-12 text-white text-balance"
            style={{ fontFamily: "var(--font-sahitya)" }}
          >
            Please RSVP
          </h2>
          <RsvpForm />

          {/* Add to Calendar Button */}
          <div className="mt-8 flex justify-center">
            <AddToCalendar />
          </div>
        </div>
      </section>

      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <Image src="/pics/IMG_6416.png" alt="Photo after RSVP" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#CCDB69] rounded-lg p-6 md:p-8 shadow-lg text-center">
            <h2
              className="text-4xl md:text-6xl font-normal mb-8 text-balance"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
              Venue
            </h2>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4 text-balance"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
              Ceremony and Reception
            </h3>
            <p className="text-lg md:text-2xl mb-8 text-balance" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              Patapsco Valley State Park, Hollofield Area, Unit 300
              <br />
              8020 Baltimore National Pike, Ellicot City, MD 21403
            </p>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4 text-balance"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
              Post Reception Party
            </h3>
            <p className="text-lg md:text-2xl text-balance" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              in DC, location TBD
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg">
            <Image src="/pics/IMG_6391.png" alt="Sara and Gray" width={1920} height={1080} className="object-contain w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#DDB3AA] rounded-lg p-6 md:p-8 shadow-lg">
            <h2
              className="text-4xl md:text-6xl font-normal text-center mb-8 text-balance"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
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
                <p>2pm - Lunch, speeches, photos</p>
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

      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image src="/pics/IMG_7779.png" alt="Photo between schedule and dress code" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#C1DBFD] rounded-lg p-6 md:p-8 shadow-lg">
            <h2
              className="text-4xl md:text-6xl font-normal text-center mb-6"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
              Dress Code
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg md:text-2xl mb-6 text-pretty" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
                Festive attire: we encourage you to wear something fit for spring semi-formal that you'll feel yourself in (with the added
                note that we will be outside -- we recommend shoes you'll feel comfortable walking on grass/dirt in). Early April in the DMV
                typically has cool, spring-like weather, with a 30% average chance of precipitation, and average daytime high temperatures
                around 65 F and lows averaging around 45 F.
              </p>
              <p className="text-lg md:text-xl italic text-balance" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
                If possible, please use our color palette to inspire your outfit :)
              </p>
            </div>

            {/* First 2 Flower Images */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image src="/pics/IMG_7683.png" alt="Flower arrangement 1" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image src="/pics/IMG_7684.png" alt="Flower arrangement 2" fill className="object-cover" />
              </div>
            </div>

            {/* Color Palette Swatches - All Rows Scroll Together */}
            <div className="bg-white rounded-lg p-3 shadow-lg mb-8">
              <div className="overflow-x-auto scrollbar-thin">
                <div className="space-y-3 min-w-max">
                  {/* Row 1 - Dark Shades */}
                  <div className="flex gap-2">
                    {["#CF582A", "#5C3B04", "#7B586F", "#C87765", "#71A3E4", "#A5374A", "#9BB108", "#5A5130", "#B65904"].map(
                      (color, idx) => (
                        <div
                          key={`row1-${idx}`}
                          className="w-[60px] h-[60px] rounded-lg shadow-md flex-shrink-0"
                          style={{ backgroundColor: color }}
                        />
                      )
                    )}
                  </div>

                  {/* Row 2 - Medium Shades */}
                  <div className="flex gap-2">
                    {["#FA8E64", "#AA7C2F", "#B998AE", "#DEA99E", "#9FC6F9", "#D97385", "#C8DE2F", "#B8A765", "#EC872B"].map(
                      (color, idx) => (
                        <div
                          key={`row2-${idx}`}
                          className="w-[60px] h-[60px] rounded-lg shadow-md flex-shrink-0"
                          style={{ backgroundColor: color }}
                        />
                      )
                    )}
                  </div>

                  {/* Row 3 - Light Shades */}
                  <div className="flex gap-2">
                    {["#FABFA8", "#DFAC57", "#E4D1DD", "#F4D7D1", "#C1DCFF", "#E5BCC3", "#E7F779", "#F1DE98", "#F6C08F"].map(
                      (color, idx) => (
                        <div
                          key={`row3-${idx}`}
                          className="w-[60px] h-[60px] rounded-lg shadow-md flex-shrink-0"
                          style={{ backgroundColor: color }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Last 2 Flower Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image src="/pics/IMG_7685.png" alt="Flower arrangement 3" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image src="/pics/IMG_7688.png" alt="Flower arrangement 4" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFE5B4] rounded-lg p-6 md:p-8 shadow-lg text-center">
            <h2
              className="text-4xl md:text-6xl font-normal mb-6 text-balance"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
              Transportation
            </h2>
            <p className="text-lg md:text-2xl mb-6 text-pretty" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              The DC area is accessible via plane through DCA or BWI. Both are about a 45 minute drive to Silver Spring, MD. DCA has
              connections to the DC Metro, which can also be used to get to Silver Spring. Depending on where you're coming from, the Amtrak
              train is another good option. Riding to Union Station will get you about 30 minutes from the Silver Spring hotel by Metro or
              car.
            </p>
            <div className="w-full rounded-lg overflow-hidden mt-6">
              <Image
                src="/pics/transporation-map.png"
                alt="Transportation map showing wedding venue, hotels, and airports"
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#DEA99E] rounded-lg p-6 md:p-8 shadow-lg text-center">
            <h2
              className="text-4xl md:text-6xl font-normal mb-6 text-balance"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
              Accommodations
            </h2>
            <p className="text-lg md:text-2xl text-pretty" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              For those traveling from out of town, there has been a hotel block made at the Marriott Courtyard in Downtown Silver Spring,
              MD. If you would like to book a room there, please book at this link:{" "}
              <a
                href="https://link.edgepilot.com/s/e2b6ca7e/M2-CUdbmsU6-CdFBM7HzkQ?u=https://app.marriott.com/reslink?id=1765910571938%26key=GRP%26app=resvlink"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Marriott Courtyard Hotel Block
              </a>
            </p>
            <p className="text-lg md:text-2xl mt-6 text-pretty" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              This hotel is located between the ceremony at the park in Maryland and where we will be partying in DC with public transit
              options into DC. Feel free to book something else if you'd prefer!
            </p>
          </div>
        </div>
      </section>

      {/* Wildflower Photos Section */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-lg shadow-lg">
            <Image src="/pics/image.png" alt="Wildflower field" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#E7F779] rounded-lg p-6 md:p-8 shadow-lg text-center">
            <h2
              className="text-4xl md:text-6xl font-normal mb-6 text-balance"
              style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}
            >
              Registry
            </h2>
            <p className="text-lg md:text-2xl mb-8 text-pretty" style={{ fontFamily: "var(--font-sahitya)", color: "#000000" }}>
              If you like to give a gift, you can use the link below:
            </p>
            <div className="flex justify-center">
              <a
                href="https://withjoy.com/aroosimoon/registry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9BB108] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#7B8B06] active:scale-95 transition-all text-base font-semibold inline-flex items-center gap-2"
                style={{ fontFamily: "var(--font-sahitya)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                View Registry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
