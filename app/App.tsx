import { Meta, Scripts, Styles, Routes, useGlobalData, usePendingLocation} from "@remix-run/react";
import { Link } from "react-router-dom";
import Header from "./ui/Header";
import { AppStateProvider } from "./hooks/AppDataState";

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

      <AppStateProvider>

        <div className="flex flex-col min-h-screen">

          <Header />
          
          <div className="container mx-auto flex-grow">
            <Routes />
          </div>
          
          <footer className="bg-gray-100">
            <div className="container mx-auto pb-2 pt-2 text-center text-gray-400">
              This page was rendered at {data.date.toLocaleString()}
            </div>
          </footer>

        
        </div>
        </AppStateProvider>


        <script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>
        <script defer src="https://www.gstatic.com/firebasejs/8.2.4/firebase-auth.js"></script>
        <script defer src="https://www.gstatic.com/firebasejs/8.2.4/firebase-firestore.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          var firebaseConfig = {
            apiKey: "AIzaSyDRGTaUmh0mJmvTj6QQtMPrmFDRDdz97JE",
            authDomain: "remix-firebase-2021-01.firebaseapp.com",
            projectId: "remix-firebase-2021-01",
            storageBucket: "remix-firebase-2021-01.appspot.com",
            messagingSenderId: "671716324269",
            appId: "1:671716324269:web:7ca24fce99ac00a82b2724"
          };
          firebase.initializeApp(firebaseConfig);
        `}} />

        
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
