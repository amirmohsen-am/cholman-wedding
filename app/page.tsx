import RsvpForm from './components/RsvpForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            You're Invited!
          </h1>
          <p className="text-xl text-gray-600">
            Please RSVP below
          </p>
        </div>

        <RsvpForm />
      </main>
    </div>
  )
}
