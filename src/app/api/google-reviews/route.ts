import { NextResponse } from 'next/server'

export const revalidate = 86400

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!placeId || !apiKey) {
    return NextResponse.json({ error: 'Missing env vars' }, { status: 500 })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&language=fr&reviews_sort=newest&key=${apiKey}`
    const res = await fetch(url, { next: { revalidate: 86400 } })
    const data = await res.json()

    if (!data.result) {
      return NextResponse.json({ error: 'No result from Google' }, { status: 500 })
    }

    const { rating, user_ratings_total, reviews } = data.result

    const filtered = (reviews ?? [])
      .filter((r: any) => r.rating >= 4)
      .slice(0, 6)
      .map((r: any) => ({
        author: r.author_name,
        initial: r.author_name.charAt(0).toUpperCase(),
        text: r.text,
        rating: r.rating,
        date: r.relative_time_description,
        profilePhoto: r.profile_photo_url ?? null,
      }))

    return NextResponse.json({
      rating,
      totalReviews: user_ratings_total,
      reviews: filtered,
    })
  } catch (err) {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 })
  }
}