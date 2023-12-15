<script>
  import { parse } from 'svelte/compiler';

    export let data;

    $: ({nodes} = data);
    $: (console.log(nodes))
</script>

<header>
    <h2>Hey there! this is ...</h2>
    <h1>INTERCOSAS</h1>
    <p>Tech and Internet of Things (IoT) blog</p>
</header>

<main>
    
    <article>
        <hr>
        
            {#each nodes as {node: { number, title, slug, abstract, createdAt }}}
                
               <p><a href='/post/{slug}-{number}'>{title}</a> / Published {new Date(createdAt).toDateString()}</p> 
                
                
            {/each}
        
    </article>
</main>

<style>

    /* Reset some basic elements */
    h1, h2, p {
        margin: 0;
        padding: 0;
    }

    /* Style the header */
    header {
        text-align: center;
        margin-bottom: 50px;
    }


    /* Style the main headline */
    h1 {
        font-size: 3em;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    h2 {
        margin-bottom: 20px;
    }

    /* Style the articles */
    hr {
        height : 4px;
        background-color: black;
        margin-bottom: 40px;
    }

    /* Style the description */
    header p {
        margin-bottom: 40px;
        font-size: 1.2em;
        color: gray;
    }

    article p {
        border-bottom: 2px dotted gray;
        padding-bottom: 20px;
        margin-bottom: 20px;
        font-size: 1.2em;
        color: gray;
    }

    a{
        text-decoration: none;
        color: black;
        font-weight: bold;
        
    }

    article{
        margin-left: 30px;
        margin-right: 30px;
    }

</style>