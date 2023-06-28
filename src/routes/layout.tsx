import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

 
 
export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  //useStyles$(styles);
  return (
    <> 
      <main> 
        <Slot />
      </main> 
    </>
  );
});
