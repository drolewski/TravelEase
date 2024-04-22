import fetch from "node-fetch";
import {NextRequest} from "next/server";

const handler = async (req: Request) => {
    if (req.method === 'GET') {
        const lat = (req as NextRequest).nextUrl.searchParams.get('lat');
        const lng = (req as NextRequest).nextUrl.searchParams.get('lng');

        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`)
        const data = await res.json();
        const countryCode = data.results.filter(r => r.types.includes('country'))[0].address_components[0].short_name

        return new Response(
            JSON.stringify(countryCode), {
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

export {handler as GET};