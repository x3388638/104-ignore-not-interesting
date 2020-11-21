<style>
  button {
    margin-top: 10px;
  }
</style>

<script>
  export let onClick
  const handleClick = (e) => {
    onClick(
      e.target.parentElement.parentElement
        .querySelector('.js-job-link')
        .getAttribute('href')
    )
  }
</script>

<button class="b-btn b-btn--default" on:click={handleClick}>不感興趣</button>
