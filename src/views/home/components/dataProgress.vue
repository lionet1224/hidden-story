<template>
  <div class="progress mt-1">
    <ul>
      <li>
        <p class="text-hidden">第一届世界技能大赛网站设计与开发项目AB模块</p>
        <i class="progress-bar">
          <span class="error"></span>
        </i>
        <i class="progress-bar">
          <span class="idea"></span>
        </i>
      </li>
      <li>
        <p class="text-hidden">第一届世界技能大赛网站设计与开发项目AB模块123121231233123123</p>
        <i class="progress-bar">
          <span class="error"></span>
        </i>
        <i class="progress-bar">
          <span class="idea"></span>
        </i>
      </li>
      <li>
        <p class="text-hidden">第一届世界技能大赛网站设计与开发项目AB模块</p>
        <i class="progress-bar">
          <span class="error"></span>
        </i>
        <i class="progress-bar">
          <span class="idea"></span>
        </i>
      </li>
      <li>
        <p class="text-hidden">第一届世界技能大赛网站设计与开发项目AB模块</p>
        <i class="progress-bar">
          <span class="error"></span>
        </i>
        <i class="progress-bar">
          <span class="idea"></span>
        </i>
      </li>
      <li>
        <p class="text-hidden">第一届世界技能大赛网站设计与开发项目AB模块</p>
        <i class="progress-bar">
          <span class="error"></span>
        </i>
        <i class="progress-bar">
          <span class="idea"></span>
        </i>
      </li>
      <li>
        <p class="text-hidden">第一届世界技能大赛网站设计与开发项目AB模块</p>
        <i class="progress-bar">
          <span class="error"></span>
        </i>
        <i class="progress-bar">
          <span class="idea"></span>
        </i>
      </li>
      <li>
        <p class="text-hidden">第一届世界技能大赛网站设计与开发项目AB模块</p>
        <i class="progress-bar">
          <span class="error"></span>
        </i>
        <i class="progress-bar">
          <span class="idea"></span>
        </i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.progress{
  li{
    list-style: none;
    margin-bottom: 1rem;
  }

  p{
    font-size: 12px;
    color: #444;
  }

  .progress-bar{
    display: block;
    width: 100%;
    height: 2px;
    background: #dedede;
    margin-top: 1rem;
    position: relative;

    span{
      content: "";
      display: block;
      width: 50%;
      position: absolute;
      height: 7px;
      top: -3px;
      border-radius: 10px;
      box-shadow: 3px 2px 10px rgba(73, 73, 73, 0.2);
    }    
    .error{
      background: #F56C6C;
      width: 70%;
    }
    .idea{
      background: #f7ad40;
      width: 30%;
    }
  }
}
</style>