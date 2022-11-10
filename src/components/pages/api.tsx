import { useEffect } from "react";

export default function ApiPage() {
  useEffect(() => {
    document.title = "Api Sandbox | Freks app";
  }, []);

  return <div>api page</div>;
}
