// Wedding event details
// TODO: this will change
export const WEDDING_EVENT = {
  title: "Sara & Gray's Wedding",
  date: new Date(2026, 3, 11, 16, 0), // April 11, 2026, 4:00 PM (month is 0-indexed)
  endDate: new Date(2026, 3, 11, 21, 0), // April 11, 2026, 9:00 PM
  location: "[Venue Name], [Address]", // Update with real venue
  description: "Join us to celebrate Sara & Gray's wedding! Hala dasta bala, Bian bezanim dasta ro bala!",
};


// Format date for iCalendar format (YYYYMMDDTHHMMSS)
function formatICalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

// Generate .ics file content (Apple Calendar, Outlook, etc.)
export function generateICS(): string {
  const event = WEDDING_EVENT;
  const now = new Date();

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sara & Gray Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${formatICalDate(event.date)}`,
    `DTEND:${formatICalDate(event.endDate)}`,
    `DTSTAMP:${formatICalDate(now)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    `UID:${now.getTime()}@saraandgray.wedding`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return icsContent;
}

// Download .ics file
export function downloadICS(): void {
  const icsContent = generateICS();
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sara-gray-wedding.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
