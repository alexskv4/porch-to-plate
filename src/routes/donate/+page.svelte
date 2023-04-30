<script lang="ts">
    import NumberChooser from "../../components/NumberChooser.svelte";
    import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte'
    import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
    import { donations } from '../../backend/donations.js'
    import type { Food } from '../../backend/foodbanks'
    type Item = {
        name: string;
        quantity: number;
    }

    let items: Item[] = [
        {
            name: "",
            quantity: 1
        }
    ];

    function removeItem(item: Item) {
        items = items.filter(i => i !== item);
    }

    function addItem() {
        items = [...items, {name: "", quantity: 1}];
    }

</script>


<div class="donate">
    <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
        <img src="/images/donate.jpg" alt="Porch 2 Plate Logo">
        <h1 style="margin: 2%;">Donate</h1>
    </div>
    <div class="address block">
        <div style="display: flex; gap: 10px;">
                <div class="mid-icon">
                    <FaMapMarkerAlt/>
                </div>
            <span class="title">
                Address
            </span>
        </div>
        <input placeholder="123 Sesame St." type="text">
    </div>
    <div class="items block">
        <div class="items-grid">
            <span class="title">Items</span>
            <div></div>
            <span class="title">Servings</span>
            {#each items as item, i}
                <div class="mid-icon icon-button" on:click={() => removeItem(item)}>
                    <FaRegTrashAlt/>
                </div>
                <input placeholder="Food name" class="item-name" type="text" bind:value={item.name}/>
                <NumberChooser bind:value={item.quantity}/>
            {/each}
        </div>
        <div style="display: flex; width: 100%; justify-content: center;">
            <button class="add" on:click={addItem}>Add</button>
        </div>
    </div>
    <div>
        <a href="/donate/donate-thanks" class="button donate-button">Donate</a>
    </div>
</div>

<style>
    .donate {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding-top: 10vh;
        height: 80vh;
        gap: 5%;
    }

    .donate-button {
        font-size: var(--large-font-size);
    }

    .items-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 10px;
        row-gap: 5px;
    }

    .add {
        font-size: var(--large-font-size);
        background-color: var(--accent300);
        border: none;
        border-radius: 10px;
        padding: 5px 20px;
        margin-top: 20px;
        cursor: pointer;
        color: var(--background100);
    }

    .title {
        font-weight: bold;
        font-size: var(--large-font-size);
    }

    span {
        font-size: var(--large-font-size);
    }

    .address {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .address > input {
        width: 100%;
        font-size: var(--large-font-size);
    }
    
    .item-name {
        border: none;
        outline: none;
        background: none;
        font-size: var(--large-font-size);
        width: 100%;
    }
    
    .block {
        width: 80%;
        max-width: 500px;
        background-color: var(--background200);
        padding: 20px;
        border-radius: 10px;
        /* dropshadow */
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    img {
        width: 15%;
    }
</style>