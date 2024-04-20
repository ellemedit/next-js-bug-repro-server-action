"use client";

import { testAction } from "../../actions";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <form
      action={async () => {
        console.log(await testAction());
      }}
    >
      <button>submit</button>
    </form>
  );
}
