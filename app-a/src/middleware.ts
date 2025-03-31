import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const response = await next();

    console.info("URL: ", context.url)

    const headers = new Headers(response.headers);
    headers.append('Access-Control-Allow-Origin', 'http://localhost:7000');
    headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    console.info("Setting cors policy...");
    return new Response(response.body, {
        ...response,
        headers: headers,
    });
});