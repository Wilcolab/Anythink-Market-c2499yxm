// chain_prompt.js
// This file contains a chain-of-thought style prompt helper for step-by-step reasoning.

const chainPrompt = `
You are a thoughtful assistant. Break down your reasoning into clear steps, and then provide the final answer.

Question: {user_input}

Steps:
1.
2.
3.

Answer:`;

module.exports = { chainPrompt };
