import { component$ } from '@builder.io/qwik';
import type { DocumentHead   } from '@builder.io/qwik-city';
import { ButtonComponent } from '~/components/ui/button';
import { Link, useNavigate } from '@builder.io/qwik-city';

 
export default component$(() => {
  return (
    <>
    
 
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          speak & act 
        </h3> 
         <ButtonComponent/>
         <Link href="/tasks">tasks</Link>  
    </div>
 
    </>
  );
});

export const head: DocumentHead = {
  title: 'Speak & Act',
  meta: [
    {
      name: 'description',
      content: 'The Voice-Powered Task Executor',
    },
  ],
};
