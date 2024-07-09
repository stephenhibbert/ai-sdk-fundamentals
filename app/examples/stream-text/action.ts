"use server";

import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { bedrock } from '@ai-sdk/amazon-bedrock';

// const model = openai("gpt-4o");
// const model = 

export const streamTextAction = async () => {
  const result = await streamText({
    model: bedrock('anthropic.claude-3-sonnet-20240229-v1:0'),
    prompt: "Who are you?"
  });
  return createStreamableValue(result.textStream).value;
};
