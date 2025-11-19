'use client'

import { useState } from 'react'

type Rsvp = {
  id: string
  name: string
  attending: boolean
  plus_one_name: string | null
  dietary_needs: string | null
  created_at: string
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [rsvps, setRsvps] = useState<Rsvp[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/rsvps', {
        headers: {
          'x-admin-password': password,
        },
      })

      if (!response.ok) {
        setError('Invalid password')
        setLoading(false)
        return
      }

      const data = await response.json()
      setRsvps(data.rsvps)
      setIsAuthenticated(true)
    } catch (err) {
      console.error('Error fetching RSVPs:', err)
      setError('Failed to fetch RSVPs')
    } finally {
      setLoading(false)
    }
  }

  const attendingCount = rsvps.filter(r => r.attending).length
  const notAttendingCount = rsvps.filter(r => !r.attending).length
  const totalGuests = rsvps.reduce((sum, r) => {
    if (r.attending) {
      return sum + 1 + (r.plus_one_name ? 1 : 0)
    }
    return sum
  }, 0)

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-900"
                required
              />
            </div>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">RSVP Admin</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <div className="text-sm text-green-600 font-medium">Attending</div>
              <div className="text-2xl font-bold text-green-900">{attendingCount}</div>
            </div>
            <div className="bg-red-50 p-4 rounded border border-red-200">
              <div className="text-sm text-red-600 font-medium">Not Attending</div>
              <div className="text-2xl font-bold text-red-900">{notAttendingCount}</div>
            </div>
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <div className="text-sm text-blue-600 font-medium">Total Guests</div>
              <div className="text-2xl font-bold text-blue-900">{totalGuests}</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Attending
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Plus One
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Dietary Needs
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rsvps.map((rsvp) => (
                  <tr key={rsvp.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {rsvp.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        rsvp.attending
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {rsvp.attending ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {rsvp.plus_one_name || '-'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {rsvp.dietary_needs || '-'}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {new Date(rsvp.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {rsvps.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No RSVPs yet
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
