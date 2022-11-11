import { useEffect, useState } from "react";

export function Api() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    setIp("");
  }, []);

  return (
    <div>
      <div>ip: {ip}</div>
    </div>
  );
}
