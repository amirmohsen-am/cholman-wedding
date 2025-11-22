-- Wedding RSVP Database Schema
-- Run this in your Supabase SQL Editor to create the rsvps table

CREATE TABLE rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  attending BOOLEAN NOT NULL,
  plus_one BOOLEAN,
  dietary_needs TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- If you already have the table, run these ALTER commands instead:
-- ALTER TABLE rsvps ADD COLUMN email TEXT;
-- ALTER TABLE rsvps ADD COLUMN phone TEXT;
-- ALTER TABLE rsvps DROP COLUMN plus_one_name;
-- ALTER TABLE rsvps ADD COLUMN plus_one BOOLEAN;
-- ALTER TABLE rsvps ADD COLUMN message TEXT;

-- Enable Row Level Security (RLS)
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for RSVP submissions)
CREATE POLICY "Allow public RSVP submissions"
  ON rsvps
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow public reads (optional - if you want to show total RSVPs)
CREATE POLICY "Allow public reads"
  ON rsvps
  FOR SELECT
  TO public
  USING (true);
