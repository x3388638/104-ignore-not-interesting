<style>
  button {
    float: left;
    margin-top: 5px;
  }
</style>

<script>
  export let isIgnored
  export let onClick
</script>

<button
  class={`btn btn-sm btn-has-icon ${isIgnored ? 'btn-secondary' : 'btn-outline-primary'}`}
  on:click={onClick}
>不感興趣</button>
