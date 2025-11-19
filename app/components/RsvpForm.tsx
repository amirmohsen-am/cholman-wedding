'use client'

import { useState } from 'react'

export default function RsvpForm() {
  const [name, setName] = useState('')
  const [attending, setAttending] = useState<boolean | null>(null)
  const [plusOneName, setPlusOneName] = useState('')
  const [dietaryNeeds, setDietaryNeeds] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || attending === null) {
      setErrorMessage('Please fill in all required fields')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          attending,
          plus_one_name: plusOneName || null,
          dietary_needs: dietaryNeeds || null,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit RSVP')
      }

      setSubmitStatus('success')
      setName('')
      setAttending(null)
      setPlusOneName('')
      setDietaryNeeds('')
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      setErrorMessage('Failed to submit RSVP. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="max-w-md mx-auto p-6 bg-green-50 border border-green-200 rounded">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700">Your RSVP has been submitted successfully.</p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-4 text-green-800 underline"
        >
          Submit another RSVP
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-gray-900">
          Will you be attending? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          <label className="flex items-center text-gray-900">
            <input
              type="radio"
              name="attending"
              checked={attending === true}
              onChange={() => setAttending(true)}
              className="mr-2"
              required
            />
            Yes, I'll be there!
          </label>
          <label className="flex items-center text-gray-900">
            <input
              type="radio"
              name="attending"
              checked={attending === false}
              onChange={() => setAttending(false)}
              className="mr-2"
              required
            />
            Sorry, can't make it
          </label>
        </div>
      </div>

      {attending === true && (
        <div className="mb-4">
          <label htmlFor="plusOne" className="block text-sm font-medium mb-2 text-gray-900">
            Plus One Name (optional)
          </label>
          <input
            type="text"
            id="plusOne"
            value={plusOneName}
            onChange={(e) => setPlusOneName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900"
          />
        </div>
      )}

      {attending === true && (
        <div className="mb-4">
          <label htmlFor="dietary" className="block text-sm font-medium mb-2 text-gray-900">
            Dietary Restrictions (optional)
          </label>
          <textarea
            id="dietary"
            value={dietaryNeeds}
            onChange={(e) => setDietaryNeeds(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900"
            rows={3}
          />
        </div>
      )}

      {submitStatus === 'error' && errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
      </button>
    </form>
  )
}
