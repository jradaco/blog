<script>
  import { parse } from 'svelte/compiler';
  import Hero from './Hero.svelte';

    export let data;

    $: ({nodes} = data);
    $: (console.log(nodes))
</script>

<Hero />

<main class="container">
    
    
    <article>
        
        
            {#each nodes as {node: { number, title, slug, abstract, createdAt }}}
                
               <p class="entry" ><a href='/post/{slug}-{number}'>{title}</a> / Published {new Date(createdAt).toDateString()}</p> 
                
                
            {/each}
        
    </article>
</main>

<style>

    /* Style the articles */
    
    /* Style the description */

    .entry {
        border-bottom: 2px solid #112e54 ;
        padding-bottom: 20px;
        margin-bottom: 20px;
        font-size: 1.4em;
        color: #2b70c9;
    }

    .late{
        color: grey;
        text-decoration: underline #2b70c9;
    }

    a{
        text-decoration: none;
        color: #112e54;
        font-weight: bold;
        /*background-color:  #2b70c9;*/
        
    }

    


</style>