import ReactDOMServer from "react-dom/server";
import type { EntryContext } from "@remix-run/core";
import Remix from "@remix-run/react/server";

import App, { ErrorBoundary } from "./App";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let { matches } = remixContext;
  let is404Page = matches[matches.length - 1].route.id === "routes/404";
  let markup = ReactDOMServer.renderToString(
    <Remix
      context={remixContext}
      url={request.url}
      ErrorBoundary={ErrorBoundary}
    >
      <App />
    </Remix>
  );

  return new Response("<!DOCTYPE html>" + markup, {
    status: is404Page ? 200 : responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      "Content-Type": "text/html",
    },
  });
}
