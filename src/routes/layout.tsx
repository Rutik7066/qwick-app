import { component$, Slot } from '@builder.io/qwik';


export default component$(() => {
  return (
    <>
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </>
  );
});
