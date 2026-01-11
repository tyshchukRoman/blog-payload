export function formatPublishDate(isoString: string): string {
  const date = new Date(isoString)

  // Define options for month name, day, year
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long', // full month name
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', options)
}
