import {ChatOpenAI} from "@langchain/openai";
import {HumanMessage} from "@langchain/core/messages";
import {TravelFormData} from "@/organism/form/formData";

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

        const question = `Imagine that you are a tour advisor working in a travel agency. 
        Based on the information below, present 10 different travel proposals for your client. 
        Customer origin: ${country}, duration: ${duration} ${durationType}, number of travelers: ${people}, 
        max price per person: ${price?.max}, season: ${season}, destination region: ${region}, purpose of travel: ${purpose},
        transport type: ${transport}, want to travel all inclusive: ${allInclusive}`;


        const chatModel = new ChatOpenAI({
            modelName: "gpt-4-vision-preview",
            maxTokens: 1024,
            openAIApiKey: process.env.OPENAI_API_KEY
        })

        const message = new HumanMessage({
            content: [
                {
                    type: "text",
                    text: question,
                },
            ],
        });

        const res = await chatModel.invoke([message]);

        console.log(res);
    } else {
        return new Response(
            JSON.stringify({error: 'Method Not Allowed'}), {
                headers: {"content-type": "application/json"},
                status: 405
            });
    }
}

export {handler as POST};