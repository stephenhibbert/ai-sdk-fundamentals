"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { z } from "zod";

export const generateObjectAction = async () => {
  const { object: joke } = await generateObject({
    // model: openai("gpt-4o"),
    model: bedrock('anthropic.claude-3-sonnet-20240229-v1:0'),
    temperature: 0.5,
    prompt: "Tell me a joke.",
    schema: z.object({
      joke: z.object({
        setup: z.string().describe("the setup for the joke"),
        punchline: z.string().describe("the punchline for the joke"),
      }),
    }),
  });
  return joke;
};
