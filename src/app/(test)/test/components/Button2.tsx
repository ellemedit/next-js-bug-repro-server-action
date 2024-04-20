import { testAction2 } from "~/app/actions";

export function Button2() {
  return (
    <button
      formAction={async () => {
        console.log(await testAction2());
      }}
    >
      submit
    </button>
  );
}
