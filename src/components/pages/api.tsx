import { Api } from "components/organisms/Api";
import { useEffect } from "react";

export default function ApiPage() {
  useEffect(() => {
    document.title = "Api Sandbox | Freks app";
  }, []);

  return <Api />;
}
