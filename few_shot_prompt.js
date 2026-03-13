// few_shot_prompt.js
// This file contains a few-shot prompt template for use in prompt engineering.

const fewShotPrompt = `
You are an assistant that answers questions clearly and concisely.

Example 1:
User: What is the capital of France?
Assistant: The capital of France is Paris.

Example 2:
User: How do I reverse a string in JavaScript?
Assistant: Use the split/reverse/join pattern: `split('')`, `reverse()`, `join('')`.

Now answer the user question:
{user_input}
`;

module.exports = { fewShotPrompt };
