// Azure Cognitive Services API integration

// Update the API key format and endpoint structure
const AZURE_ENDPOINT = "https://apna.cognitiveservices.azure.com/"
const AZURE_API_KEY = "Fjm76jioCwe34LLvfIU7khThxz90KtsLlEIKHkB5nQNDE6wxTcbW"
const AZURE_API_VERSION = "2023-05-15"
const AZURE_DEPLOYMENT_NAME = "gpt-35-turbo" // This should match your actual deployment name

export interface AzureCompletionRequest {
  prompt: string
  max_tokens?: number
  temperature?: number
  top_p?: number
  frequency_penalty?: number
  presence_penalty?: number
  stop?: string[]
}

export interface AzureCompletionResponse {
  id: string
  object: string
  created: number
  model: string
  choices: {
    text: string
    index: number
    finish_reason: string
  }[]
}

export async function getAzureCompletion(request: AzureCompletionRequest): Promise<AzureCompletionResponse> {
  try {
    const response = await fetch(
      `${AZURE_ENDPOINT}openai/deployments/${AZURE_DEPLOYMENT_NAME}/completions?api-version=${AZURE_API_VERSION}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": AZURE_API_KEY,
          Accept: "application/json",
        },
        body: JSON.stringify({
          prompt: request.prompt,
          max_tokens: request.max_tokens || 800,
          temperature: request.temperature || 0.7,
          top_p: request.top_p || 0.95,
          frequency_penalty: request.frequency_penalty || 0,
          presence_penalty: request.presence_penalty || 0,
          stop: request.stop || null,
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Azure API error: ${response.status} - ${errorText}`)
      throw new Error(`Azure API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error calling Azure API:", error)
    throw error
  }
}

export interface AzureChatRequest {
  messages: {
    role: "system" | "user" | "assistant"
    content: string
  }[]
  max_tokens?: number
  temperature?: number
  top_p?: number
  frequency_penalty?: number
  presence_penalty?: number
  stop?: string[]
}

export interface AzureChatResponse {
  id: string
  object: string
  created: number
  model: string
  choices: {
    message: {
      role: string
      content: string
    }
    finish_reason: string
    index: number
  }[]
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export async function getAzureChatCompletion(request: AzureChatRequest): Promise<AzureChatResponse> {
  try {
    // For debugging
    console.log(
      "Calling Azure API with endpoint:",
      `${AZURE_ENDPOINT}openai/deployments/${AZURE_DEPLOYMENT_NAME}/chat/completions?api-version=${AZURE_API_VERSION}`,
    )

    const response = await fetch(
      `${AZURE_ENDPOINT}openai/deployments/${AZURE_DEPLOYMENT_NAME}/chat/completions?api-version=${AZURE_API_VERSION}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": AZURE_API_KEY,
          Accept: "application/json",
        },
        body: JSON.stringify({
          messages: request.messages,
          max_tokens: request.max_tokens || 800,
          temperature: request.temperature || 0.7,
          top_p: request.top_p || 0.95,
          frequency_penalty: request.frequency_penalty || 0,
          presence_penalty: request.presence_penalty || 0,
          stop: request.stop || null,
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Azure API error: ${response.status} - ${errorText}`)
      throw new Error(`Azure API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error calling Azure API:", error)
    throw error
  }
}
