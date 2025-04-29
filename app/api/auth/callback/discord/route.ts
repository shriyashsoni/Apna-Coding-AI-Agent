import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const error = searchParams.get("error")
  const errorDescription = searchParams.get("error_description")

  // Handle errors
  if (error) {
    console.error("Discord OAuth error:", error, errorDescription)
    return NextResponse.redirect(new URL(`/login?error=${encodeURIComponent(errorDescription || error)}`, request.url))
  }

  // If no code, redirect to login
  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    // In a real implementation, you would exchange the code for tokens
    // and validate the tokens to get user information

    // For demo purposes, we'll just redirect to a success page
    // In a real app, you would:
    // 1. Exchange the code for tokens
    // 2. Validate the tokens
    // 3. Get user information
    // 4. Create a session or JWT
    // 5. Redirect to the dashboard

    // Mock successful login for demo
    return NextResponse.redirect(new URL("/login/success?provider=discord", request.url))
  } catch (error) {
    console.error("Error during Discord authentication:", error)
    return NextResponse.redirect(new URL("/login?error=Authentication failed", request.url))
  }
}
