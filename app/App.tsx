import { Meta, Scripts, Styles, Routes, useGlobalData, usePendingLocation} from "@remix-run/react";
import { Link } from "react-router-dom";

export default function App() {
  let data = useGlobalData();
  let pendingLocation = usePendingLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>

        <div className="flex flex-col min-h-screen">
          
          <header className="bg-cyan-300" style={{
            opacity: !!pendingLocation ? "0.15" : "1",
            transition: "opacity 200ms ease-in-out",
            transitionDelay: "200ms",
          }}>
            <div className="container mx-auto font-semibold pb-2.5 pt-2">
              <Link to="/">home</Link>{' '}
              <Link to="/mdx">MDX</Link>{' '}
              <Link to="/catchy">catchy</Link>{' '}
              <Link to="/catchum">catchum</Link>{' '}
            </div>
          </header>
          
          <div className="container mx-auto flex-grow">
            <Routes />
          </div>
          
          <footer className="bg-gray-100">
            <div className="container mx-auto pb-2 pt-2 text-center text-gray-400">
              This page was rendered at {data.date.toLocaleString()}
            </div>
          </footer>

        
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
