<style>
  .JobList {
    background: #fff;
    overflow: auto;
    margin-top: 15px;
  }

  .JobList__title {
    padding: 0 8px;
  }

  .JobList__list {
    list-style: none;
    padding: 0 3px;
    max-height: 350px;
    overflow: auto;
  }

  .JobItem {
    padding: 5px;
    margin: 5px;
    background: #fffaf2;
    position: relative;
  }

  .JobItem__text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: block;
  }

  .JobItem:hover .Actions {
    opacity: 1;
  }

  .Actions {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffffcf;
    display: flex;
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0, 0, 0.2, 1) 0s;
  }

  .Actions__item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin: 5px;
    cursor: pointer;
  }

  .Actions__item--link {
    color: #000;
  }

  .Actions__item--link:hover {
    background: #0070ff52;
  }

  .Actions__item--delete:hover {
    background: #ff454569;
  }
</style>

<script>
  export let jobList = []
  export let onRemove
  import LinkIcon from './icon/LinkIcon'
  import TrashIcon from './icon/TrashIcon'
</script>

<div class="JobList">
  <h3 class="JobList__title">已過濾職缺</h3>
  <ul class="JobList__list">
    {#each jobList as { jobName, jobNo, jobId, custName } (jobId)}
      <li class="JobItem">
        <span class="JobItem__text">{jobName}</span>
        <span class="JobItem__text">{custName}</span>
        <span class="Actions">
          <a
            href={`https://www.104.com.tw/job/${jobId}`}
            class="Actions__item Actions__item--link"
            target="_blank"
          ><LinkIcon /></a>
          <span
            class="Actions__item Actions__item--delete"
            on:click={onRemove({ jobName, jobNo, jobId, custName })}
          ><TrashIcon /></span>
        </span>
      </li>
    {/each}
  </ul>
</div>
