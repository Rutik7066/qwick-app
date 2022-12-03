import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main>
        {/*GLobal Header  */}
        <section>
          <Slot />
        </section>
      </main>
      {/* GLobal Footer */}
    </>
  );
});
