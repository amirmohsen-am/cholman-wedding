'use client'

import { useState } from 'react'

export default function RsvpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [attending, setAttending] = useState<boolean | null>(null)
  const [plusOne, setPlusOne] = useState<boolean | null>(null)
  const [dietaryNeeds, setDietaryNeeds] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || attending === null) {
      setErrorMessage("Please fill in all required fields")
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          attending,
          plus_one: plusOne,
          dietary_needs: dietaryNeeds || null,
          message: message || null,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit RSVP")
      }

      setSubmitStatus("success")
      setName("")
      setEmail("")
      setPhone("")
      setAttending(null)
      setPlusOne(null)
      setDietaryNeeds("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting RSVP:", error)
      setErrorMessage("Failed to submit RSVP. Please try again.")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="max-w-md mx-auto p-6 bg-white/95 border-2 border-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: "var(--font-sahitya)" }}>Thank you!</h3>
        <p className="text-green-700" style={{ fontFamily: "var(--font-sahitya)" }}>Your RSVP has been submitted successfully.</p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-4 text-green-800 underline"
          style={{ fontFamily: "var(--font-sahitya)" }}
        >
          Submit another RSVP
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
          Name <span className="text-yellow-200">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border-2 border-white rounded-lg bg-white text-gray-900"
          style={{ fontFamily: "var(--font-sahitya)" }}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
          Email <span className="text-yellow-200">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border-2 border-white rounded-lg bg-white text-gray-900"
          style={{ fontFamily: "var(--font-sahitya)" }}
          required
        />
        <p className="text-xs text-white/80 mt-1" style={{ fontFamily: "var(--font-sahitya)" }}>We'll email you additional information</p>
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border-2 border-white rounded-lg bg-white text-gray-900"
          style={{ fontFamily: "var(--font-sahitya)" }}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
          Will you be attending? <span className="text-yellow-200">*</span>
        </label>
        <div className="space-y-2">
          <label className="flex items-center text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
            <input
              type="radio"
              name="attending"
              checked={attending === true}
              onChange={() => setAttending(true)}
              className="mr-2 w-4 h-4"
              required
            />
            Yes, I'll be there!
          </label>
          <label className="flex items-center text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
            <input
              type="radio"
              name="attending"
              checked={attending === false}
              onChange={() => setAttending(false)}
              className="mr-2 w-4 h-4"
              required
            />
            Sorry, can't make it
          </label>
        </div>
      </div>

      {attending === true && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>Bringing a Plus One?</label>
            <p className="text-xs text-yellow-200 mb-2" style={{ fontFamily: "var(--font-sahitya)" }}>Please check with us beforehand</p>
            <div className="space-y-2">
              <label className="flex items-center text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
                <input type="radio" name="plusOne" checked={plusOne === true} onChange={() => setPlusOne(true)} className="mr-2 w-4 h-4" />
                Yes
              </label>
              <label className="flex items-center text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
                <input type="radio" name="plusOne" checked={plusOne === false} onChange={() => setPlusOne(false)} className="mr-2 w-4 h-4" />
                No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="dietary" className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
              Dietary Restrictions (optional)
            </label>
            <textarea
              id="dietary"
              value={dietaryNeeds}
              onChange={(e) => setDietaryNeeds(e.target.value)}
              className="w-full px-3 py-2 border-2 border-white rounded-lg bg-white text-gray-900"
              style={{ fontFamily: "var(--font-sahitya)" }}
              rows={3}
            />
          </div>
        </>
      )}

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "var(--font-sahitya)" }}>
          Message for the Couple (optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border-2 border-white rounded-lg bg-white text-gray-900"
          style={{ fontFamily: "var(--font-sahitya)" }}
          rows={4}
          placeholder="Share anything you'd like to say to us..."
        />
      </div>

      {submitStatus === "error" && errorMessage && (
        <div className="mb-4 p-3 bg-white/95 border-2 border-white rounded-lg text-red-700 text-sm" style={{ fontFamily: "var(--font-sahitya)" }}>{errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-[#FF6B4A] py-3 px-4 rounded-lg font-bold hover:bg-gray-100 disabled:bg-gray-300 disabled:text-gray-500 transition-colors shadow-lg"
        style={{ fontFamily: "var(--font-sahitya)" }}
      >
        {isSubmitting ? "Submitting..." : "Submit RSVP"}
      </button>
    </form>
  )
}
