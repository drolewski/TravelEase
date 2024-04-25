import {ChatOpenAI} from "@langchain/openai";
import {HumanMessage} from "@langchain/core/messages";
import {TravelFormData} from "@/organism/form/formData";
import {ChatPromptValue} from "@langchain/core/prompt_values";
import {ChatPromptTemplate} from "@langchain/core/prompts";

const handler = async (req: Request) => {
    if (req.method === 'POST') {
        const {
            country,
            isGeolocation,
            durationType,
            duration,
            people,
            price,
            season,
            region,
            purpose,
            allInclusive,
            transport
        }: TravelFormData = await req.json();

        const question = `
        Customer origin: ${country}, duration: ${duration} ${durationType}, number of travelers: ${people}, 
        max price per person: ${price?.max}zloty, season: ${season}, destination region: ${region}, purpose of travel: ${purpose},
        transport type: ${transport}, want to travel all inclusive: ${allInclusive}`;

        const chatModel = new ChatOpenAI({
            modelName: "gpt-4-vision-preview",
            maxTokens: 1024,
            openAIApiKey: process.env.OPENAI_API_KEY
        })

       const prompt = ChatPromptTemplate.fromMessages([
            ["system", "Imagine that you are a tour advisor working in a travel agency. Based on the information below, present 10 different travel proposals for your client. "],
            ["user", "{input}"]
        ]);

        const chain = await prompt.pipe(chatModel);

        const result = await chain.invoke({
            input: question,
        })

        return new Response(
            JSON.stringify(result.content), {
                headers: {"content-type": "application/json"},
                status: 200
            });
    } else {
        return new Response(
            JSON.stringify({error: 'Method Not Allowed'}), {
                headers: {"content-type": "application/json"},
                status: 405
            });
    }
}

export {handler as POST};