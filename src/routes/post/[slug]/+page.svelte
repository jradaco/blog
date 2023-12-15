<script>
    export let data;

    $: ({discussion} = data);
    $: (console.log(discussion))
</script>

<article>
<h1>
    {discussion.title}
</h1>

<div>
    {@html discussion.bodyHTML}
</div>

</article>

<style>
    article{
        margin-left: 30px;
        margin-right: 30px;
    }

    h1 {
        font-size: 2em;
        text-align: center;
        margin-bottom: 50px;
    }

</style>

