import axios from "axios";
import { useEffect, useState } from "react";

export function Api() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const result = await axios.get("http://httpbin.org/ip");
        setIp(result.data.origin);
      } catch (error) {
        console.log(error);
        setError("error");
      }
    })();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <div>ip: {ip}</div>
    </div>
  );
}
