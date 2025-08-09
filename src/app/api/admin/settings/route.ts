import { NextRequest, NextResponse } from 'next/server'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Settings API' })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Settings updated' })
}