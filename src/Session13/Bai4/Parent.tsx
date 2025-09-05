import { useState } from "react";
import Children from "./Children";

export default function Parent() {
  const [name] = useState<string>("Cao Thành Long");
  return (
    <div>
      <div>Parent: {name}</div>
      <Children userName={name} />
    </div>
  );
}
