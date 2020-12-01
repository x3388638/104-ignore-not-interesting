<style>
  .ItemButton {
    float: left;
    margin-top: 5px;
  }
</style>

<script>
  export let isIgnored
  export let onClick
</script>

<button
  class={`ItemButton btn btn-sm btn-has-icon ${isIgnored ? 'btn-secondary' : 'btn-outline-primary'}`}
  on:click={onClick}
>
  不感興趣
</button>
