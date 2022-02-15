import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

function initializeGA(measurementId: string, debugMode: boolean) {
  let script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
  script.async = true;
  document.body.appendChild(script);

  script = document.createElement("script");
  script.text = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', { debug_mode: '${debugMode}' });`;
  document.body.appendChild(script);
}

export function useTracking() {
  const isProduction = process.env.NODE_ENV === "production";
  const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID;
//   const location = useLocation();

  useEffect(() => {
    console.log(process.env);
    if (GA_ID) {
      initializeGA(GA_ID, !isProduction);
    }
  }, [GA_ID]);
  // // UA needs below, GA4 does not need below.
  //   useEffect(() => {
  //     if (GA_ID) {
  //       window.gtag("event", "page_view", { debug_mode: !isProduction });
  //     }
  //   }, [isProduction, GA_ID, location]);
}
