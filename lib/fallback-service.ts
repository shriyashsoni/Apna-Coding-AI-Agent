// Fallback service for when Azure API is unavailable

type Message = {
  role: "system" | "user" | "assistant"
  content: string
}

// Simple keyword-based response generator
export function generateFallbackResponse(messages: Message[]): string {
  // Get the last user message
  const userMessage = messages.filter((m) => m.role === "user").pop()

  if (!userMessage) {
    return "I'm here to help! What would you like to know about coding, career advice, or tech events?"
  }

  const input = userMessage.content.toLowerCase()

  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return "Hello! I'm the Apna Coding AI Assistant. How can I help you today?"
  }

  if (input.includes("hackathon")) {
    return "There are several hackathons coming up! HackTech 2025 is next month, focusing on AI solutions. DevFest is in two weeks with a web3 theme. Would you like me to help you prepare for these events?"
  }

  if (input.includes("learn") || input.includes("course") || input.includes("tutorial")) {
    return "For learning programming, I recommend starting with our structured paths. We have courses for Python, JavaScript, and Data Science. Based on your profile, I'd suggest our 'Web Development Bootcamp' which covers HTML, CSS, JavaScript, and React."
  }

  if (input.includes("job") || input.includes("internship") || input.includes("career")) {
    return "I found 5 new internship opportunities in software development! Google has an SDE internship open until next week, and there's a remote ML Engineer position at Microsoft. Would you like me to help with your application?"
  }

  if (input.includes("resume") || input.includes("cv")) {
    return "I'd be happy to help with your resume! Make sure to highlight your projects, technical skills, and any hackathon experiences. Would you like me to review your current resume or provide a template?"
  }

  if (input.includes("python") || input.includes("javascript") || input.includes("java") || input.includes("code")) {
    return "I can help with coding questions! For best practices, make sure to write clean, well-documented code with proper error handling. Would you like me to provide some sample code or resources for learning more?"
  }

  // Default response
  return "Thanks for your question! I can help with coding problems, career advice, learning resources, and finding tech events or job opportunities. Could you provide more details about what you're looking for?"
}
