"use client";

import { Button } from "./components/Button";
import { Button2 } from "./components/Button2";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <form>
      <Button />
      <Button2 />
    </form>
  );
}
