import { useRouteData } from "@remix-run/react";
import type { Loader } from "@remix-run/data";

export let loader: Loader = async () => {
  return { message: "this is awesome 😎" };
};

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
}

export default function Index() {
  let data = useRouteData();

  return (
    <div>
      <h2>Welcome to Remix!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data ? data.message : 
        <div className="text-red-400 font-semibold">no route data</div>
      }</p>
    </div>
  );
}
