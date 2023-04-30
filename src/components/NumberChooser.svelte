<script lang="ts">
    export let min = 1;
    export let step = 1;
    export let value = 1;
</script>

<div class="number-input">
    <button class="minus-btn" type="button" on:click={() => { if (value > 1) value--;}}>-</button>
    <input class="quantity" type="number" name="quantity" bind:value={value} min={min} step={step}>
    <button class="plus-btn" type="button" on:click={() => {value++;}}>+</button>
  </div>

<style>
    .number-input {
        display: flex;
        align-items: center;
    }

    .quantity {
        width: 50px;
        height: 30px;
        border: none;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        -moz-appearance: textfield; /* Firefox */
}

    .quantity::-webkit-outer-spin-button,
    .quantity::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .minus-btn, .plus-btn {
        width: 30px;
        height: 30px;
        border: none;
        background-color: var(--accent100);
        font-size: 20px;
        cursor: pointer;
    }

    .minus-btn:hover, .plus-btn:hover {
        background-color: var(--accent400);
    }
</style>