<script>
    import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte'
</script>


<div class="homepage">
    <h1>Porch 2 Plate</h1>
    <img src="/images/icon.jpg" alt="Porch 2 Plate Logo">
    <div class="buttons">
        <a class="button" href="/donate">Donate</a>
        <a class="button" href="/drive">Drive</a>
    </div>
    <div>
        <a class="find-food" href="/find-food">
            <div class="mid-icon">
                <FaMapMarkerAlt/>
            </div>
            Find Food
        </a>
    </div>
</div>

<style>
    h1 {
        margin: 0;
        color: var(--accent700);
    }

    .homepage {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding-top: 10%;
        height: 80vh;
    }
    
    .buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        width: 60%;
    }

    a {
        width: 100%;
        font-size: var(--large-font-size);
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }
    
    img {
        width: 60%;
    }
</style>

