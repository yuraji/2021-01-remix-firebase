import {useRouteData} from '@remix-run/react'
import type { Loader } from "@remix-run/data";
import { json } from "@remix-run/data";

export const loader: Loader = async ({request}) => {
  console.log('REQUEST URL:', request.url);

  return json(
    {
      message: `You're at ${request.url}`,
    },
    {
      status: 200,
      headers: {
        "cache-control": "no-store",
      },
    }
  );
};


export function meta() {
    return { title: "Ain't nothing here" };
}

export default function FourOhFour() {
    let data = useRouteData()
    console.log('data:', data)
    return (
        <div>
            <h1>404</h1>
            <div>
                {data ? JSON.stringify(data) : 
                    <div className="text-red-400 font-semibold">no route data</div>
                }
            </div>
        </div>
    );
}