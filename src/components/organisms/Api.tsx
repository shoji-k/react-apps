import { getIp } from "api/httpbin";
import { useEffect, useState } from "react";

export function Api() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    (async function () {
      try {
        const result = await getIp();
        if (!ignore) {
          setIp(result.data.origin);
        }
      } catch (error) {
        console.error(error);
        setError("error");
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <div>ip: {ip}</div>
    </div>
  );
}
