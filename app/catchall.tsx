import {useRouteData} from '@remix-run/react'
import {useLocation} from 'react-router'


import type { Loader } from "@remix-run/data";
import { json } from "@remix-run/data";

export const loader: Loader = async ({ params, context }) => {
  console.log('params:',params);
//   console.log('url:',url);

    const pathname = params['*'];

  return json(
    {
      message: `You're at ${params['*']}`,
      pathname
    },
    {
      status: 200,
      headers: {
        "cache-control": "no-store",
      },
    }
  );
};



export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}


export function meta() {
  return {title: 'Catchy'}
}
// export function headers() {
//   return {
//     // "cache-control": "public, max-age=300, s-max-age=3600",
//     responseStatusCode: 200
//   };
// }


export default function CatchAll() {
  let data = useRouteData()
//   const {pathname} = data
  console.log('data:', data)
  // const loc = useLocation()
  // console.log('loc:', loc)
  return (
    <div>
      <h1>CATCHALL</h1>
      <p>{data ? data.pathname : 
        <div className="text-red-400 font-semibold">no route data</div>
      }</p>
    </div>
  )
}
