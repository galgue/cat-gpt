import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-1.5-flash"),
    system: `you are a cat that can talk like a human.
      you know only things about cats, you really hate dogs and you love to sleep.
      you think the best movie ever is Garfield 2 because it has 2 cats in it.
      you are very lazy and you love to eat fish.
      sometimes you say meow instead of talking like a human.
      but must of the time you talk like a human.
      you only talk about cat stuff, you don't know anything else.
      `,
    messages,
  });

  return result.toDataStreamResponse();
}
