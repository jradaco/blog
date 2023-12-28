<script>
    import {page} from "$app/stores";
    import logo from '$lib/assets/int_logo.png';

    const navs = [
        {
            title: "Home",
            href: "/"
        }
    ]

    $: routeId = $page.route.id;

</script>

<nav>
    <div class="container">
        <img src={logo} alt="intercosas' web page logo">
        <h1>| blog</h1>
        <ul>
            {#each navs as {title,href} }
                <li>
                    <a {href} class:active={routeId == href} {title}>{title}</a>
                </li>
            {/each}
            
        </ul>
    </div>
</nav>

<style>

    nav{
        padding: 0.5em;
        background-color: #2b70c9;
        color: white;
    }

    .container{
        display: flex;
        align-items: center;
    }

    ul {
        display: flex;
        margin: 0;
        margin-left: auto;
        list-style: none;
        font-size: 1.5em;
    }

    li {
        margin-right: 20px;
    }

    img {
        width: 80px;
		height: auto;
    }

    h1{
        margin: 5px;
        font-size: 1.5em;
        font-weight: normal;
        color: #a3a3a3;
    }

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    .active {
        color: #112e54;
    }
</style>
