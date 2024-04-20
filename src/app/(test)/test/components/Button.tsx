import { testAction } from "~/app/actions";

export function Button() {
  return (
    <button
      formAction={async () => {
        console.log(await testAction());
      }}
    >
      submit
    </button>
  );
}
