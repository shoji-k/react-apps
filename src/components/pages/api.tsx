import { useEffect } from "react";
import { Api } from "../organisms/Api";

export default function ApiPage() {
  useEffect(() => {
    document.title = "Api Sandbox | Freks app";
  }, []);

  return <Api />;
}
