// refined_prompt.js
// This file contains a refined prompt template that provides clear instructions to the model.

const refinedPrompt = `
You are a helpful assistant. Provide an accurate, concise response based on the user's query. Do not add extra information unless it directly helps.

User: {user_input}
Assistant:`;

module.exports = { refinedPrompt };
