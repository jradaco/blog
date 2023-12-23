<script>
  import { parse } from 'svelte/compiler';

    export let data;

    $: ({nodes} = data);
    $: (console.log(nodes))
</script>

<header>
    <!--h2>Howdy! this is ...</h2-->
    <h1>INTERCOSAS</h1>
    <p>Tech and Internet of Things (IoT) blog</p>
</header>

<main>
    
    
    <article>
        <h3 class="late"> Latest entries:</h3>
        <hr>
        
            {#each nodes as {node: { number, title, slug, abstract, createdAt }}}
                
               <p class="entry" ><a href='/post/{slug}-{number}'>{title}</a> / Published {new Date(createdAt).toDateString()}</p> 
                
                
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
        text-shadow: 4px 4px 0px #6fd1bd;
    }

    h2 {
        margin-bottom: 20px;
    }

    /* Style the articles */
    hr {
        height : 4px;
        background-color: black;
        margin-bottom: 40px;
        box-shadow: 4px 4px 0px #6fd1bd;
    }

    /* Style the description */
    header p {
        margin-bottom: 40px;
        font-size: 1.2em;
        /*color: #736fd2;*/
        color: gray;
        text-decoration: underline #6fd1bd;
        font-weight: bold;
    }

    .entry {
        border-bottom: 2px dotted gray;
        padding-bottom: 20px;
        margin-bottom: 20px;
        font-size: 1.2em;
        color: gray;
    }

    .late{
        color: grey;
        text-decoration: underline #6fd1bd;
    }

    a{
        text-decoration: none;
        color: black;
        font-weight: bold;
        background-color:  #6fd1bd;
        
    }

    article{
        margin-left: 30px;
        margin-right: 30px;
    }

</style>