import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  // Authentication will be handled at the component level
  return NextResponse.next({
    request,
  })
}
