// Microsoft Authentication Service

export const MICROSOFT_CONFIG = {
  clientId: "ba25eeb8-7910-487c-b7cd-50548d8d7493",
  tenantId: "143288ac-0597-4e59-af25-65459ffb6a63",
  redirectUri: typeof window !== "undefined" ? `${window.location.origin}/api/auth/callback/microsoft` : "",
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
  isLoggedIn: boolean
}

// Check if user is logged in
export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null

  const userJson = localStorage.getItem("apna_coding_user")
  if (!userJson) return null

  try {
    return JSON.parse(userJson)
  } catch (e) {
    console.error("Failed to parse user data", e)
    return null
  }
}

// Store user data
export function storeUser(user: User): void {
  if (typeof window === "undefined") return
  localStorage.setItem("apna_coding_user", JSON.stringify(user))
}

// Clear user data
export function clearUser(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("apna_coding_user")
}

// Generate Microsoft login URL
export function getMicrosoftLoginUrl(): string {
  const params = new URLSearchParams({
    client_id: MICROSOFT_CONFIG.clientId,
    response_type: "code",
    redirect_uri: MICROSOFT_CONFIG.redirectUri,
    response_mode: "query",
    scope: "openid profile email",
    state: generateRandomState(),
  })

  return `https://login.microsoftonline.com/${MICROSOFT_CONFIG.tenantId}/oauth2/v2.0/authorize?${params.toString()}`
}

// Generate Discord login URL
export function getDiscordLoginUrl(): string {
  // Replace with your Discord client ID and redirect URI
  const DISCORD_CLIENT_ID = "YOUR_DISCORD_CLIENT_ID"
  const DISCORD_REDIRECT_URI =
    typeof window !== "undefined" ? `${window.location.origin}/api/auth/callback/discord` : ""

  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_REDIRECT_URI,
    response_type: "code",
    scope: "identify email",
    state: generateRandomState(),
  })

  return `https://discord.com/api/oauth2/authorize?${params.toString()}`
}

// Generate random state for OAuth security
function generateRandomState(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
