import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { StyledSpan } from './styles.css';


 
export default component$(() => {

    
  return (
    <> 
    <StyledSpan  > tasks here </StyledSpan>
       
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
