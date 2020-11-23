<style>
  .JobList {
    background: #fff;
    max-height: 600px;
    overflow: auto;
    margin-top: 15px;
  }

  .JobList__title {
    padding: 0 8px;
  }

  .JobList__list {
    list-style: none;
    padding: 0 3px;
  }

  .JobItem {
    padding: 5px;
    margin: 5px;
    background: rgb(199, 233, 227);
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

  .Actions__item--link:hover {
    background: #00e6ff52;
  }

  .Actions__item--delete:hover {
    background: #ff454569;
  }
</style>

<script>
  export let jobList = []
  import LinkIcon from './icon/LinkIcon'
  import TrashIcon from './icon/TrashIcon'
</script>

<div class="JobList">
  <h3 class="JobList__title">已過濾職缺</h3>
  <ul class="JobList__list">
    <li class="JobItem">
      <span class="JobItem__text">Frontend Engineer / 前端工程師</span>
      <span
        class="JobItem__text"
      >英屬維京群島商耐思財富投資有限公司台灣分</span>
      <span class="Actions">
        <span class="Actions__item Actions__item--link"><LinkIcon /></span>
        <span class="Actions__item Actions__item--delete"><TrashIcon /></span>
      </span>
    </li>
  </ul>
</div>
