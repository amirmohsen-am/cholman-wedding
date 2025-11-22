'use client'

import { downloadICS } from '@/lib/calendar'
import { useState } from 'react'

export default function AddToCalendar() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    downloadICS()
    setTimeout(() => setIsDownloading(false), 2000)
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="bg-emerald-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-emerald-700 active:scale-95 transition-all border-2 border-emerald-700 hover:border-emerald-800 flex items-center gap-2 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ fontFamily: "var(--font-crimson)" }}
    >
      {isDownloading ? (
        <>
          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Downloading...
        </>
      ) : (
        <>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Add to Calendar
        </>
      )}
    </button>
  )
}
