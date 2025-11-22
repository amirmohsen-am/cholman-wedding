import { NextResponse } from 'next/server'
import { supabase, type RsvpData } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, attending, plus_one, dietary_needs, message } = body

    // Validate required fields
    if (!name || !email || typeof attending !== 'boolean') {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and attending' },
        { status: 400 }
      )
    }

    // Insert RSVP into Supabase
    const { data, error } = await supabase
      .from('rsvps')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          attending,
          plus_one: plus_one,
          dietary_needs: dietary_needs || null,
          message: message || null,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save RSVP' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'RSVP submitted successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing RSVP:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
