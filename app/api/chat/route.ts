import { type NextRequest, NextResponse } from "next/server"
import { getAzureChatCompletion } from "@/lib/azure-service"
import { generateFallbackResponse } from "@/lib/fallback-service"

export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams
  const prompt = searchParams.get("prompt")
  const model = searchParams.get("model") || "gpt-35-turbo"

  // Validate required parameters
  if (!prompt) {
    return NextResponse.json({ error: "Missing required parameter: prompt" }, { status: 400 })
  }

  const messages = [
    {
      role: "system" as const,
      content:
        "You are an AI assistant for Apna Coding, helping users with coding, career advice, and tech opportunities.",
    },
    {
      role: "user" as const,
      content: prompt,
    },
  ]

  try {
    // Use Azure OpenAI API
    const response = await getAzureChatCompletion({
      messages: messages,
    })

    // Return the response
    return NextResponse.json({
      response: response.choices[0].message.content,
      model: model,
      usage: response.usage,
    })
  } catch (error) {
    console.error("Error calling Azure API:", error)

    // Use fallback service
    const fallbackResponse = generateFallbackResponse(messages)

    return NextResponse.json({
      response: fallbackResponse,
      model: "fallback",
      fallback: true,
    })
  }
}
