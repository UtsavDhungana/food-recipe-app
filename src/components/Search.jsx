import { useState } from "react";

export default function Search() {
  const [query, setquery] = useState("pizza");
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
}
