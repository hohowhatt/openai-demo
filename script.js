import "dotenv/config";
import OpenAI from "openai/index.mjs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

let samplePrompt = "Tell me a joke about elephants";

async function testPrompt() {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: samplePrompt }
        ],
        model: "gpt-4o"

    })
    console.log("Total tokens: ", completion.usage.total_tokens);
    console.log(completion.choices[0].message.content);
}

testPrompt()