import {ChatOpenAI} from "@langchain/openai";
import {HumanMessage} from "@langchain/core/messages";

const handler = async (req: Request) => {
    if (req.method === 'POST') {
        const chatModel = new ChatOpenAI({
            modelName: "gpt-4-vision-preview",
            maxTokens: 1024,
            openAIApiKey: process.env.OPENAI_API_KEY
        })

        const message = new HumanMessage({
            content: [
                {
                    type: "text",
                    text: "Co powinienem Ci dostarczyć i w jakiej formie abyś umiał obliczyć pole powierzchni nieregularnego obiektu na zdjęciu?",
                },
                // {
                //     type: "image_url",
                //     image_url: {
                //         url: 'https://i.imgur.com/M36my6A.png',
                //     },
                // },
            ],
        });
// GPT 4 nie umie oblicząc pola powierzchni nieregularnych obiektów, przez co aby obliczyć pole powierzchni
// muszę zastosować przetwarzanie obrazu i przygotować własny model przetwarzania :)

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