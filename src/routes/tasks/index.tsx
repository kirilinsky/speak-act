import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
  
 
export default component$(() => {
  return (
    <>
        tasks here 
    </>
  );
});

export const head: DocumentHead = {
  title: 'Speak & Act | Your Tasks',
  meta: [
    {
      name: 'description',
      content: 'The Voice-Powered Task Executor',
    },
  ],
};
