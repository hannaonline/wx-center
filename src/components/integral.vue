<template>
  <div class="integral-wrap">
    <topBar></topBar>
    <div class="inner">
      <div class="integral-bk">
        <div class="integral-item integral-all">
          <p>当前积分</p>
          <span class="text-orange">63,434</span>
        </div>
        <div class="integral-item integral-income">
          <p>总收入</p>
          <span class="text-red">83,098</span>
        </div>
        <div class="integral-item integral-expend">
          <p>总支出</p>
          <span class="text-green">13,098</span>
        </div>
      </div>
      <div class="integral-cont">
        <p class="income">本周收入：<span>10</span></p>
        <a href="javascript:void(0);" class="strategy">积分攻略？</a>
      </div>
      <div class="integral-list">
        <ul>
          <li>
            <a href="javascript:void(0);">
              <p>邀请好友关注</p>
              <span>奖励100积分，最多可获得3000积分</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <p>邀请好友关注</p>
              <span>奖励100积分，最多可获得3000积分</span>
            </a>
            <span class="havepart">已参与</span>
          </li>
          <li>
            <a href="javascript:void(0);">
              <p>邀请好友关注</p>
              <span>奖励100积分，最多可获得3000积分最多可获得3000积分</span>
            </a>
            <span class="havepart">已参与</span>
          </li>
          <li>
            <a href="javascript:void(0);">
              <p>邀请好友关注邀请好友关注邀请好友关注</p>
              <span>奖励100积分，最多可获得3000积分</span>
            </a>
            <span class="havepart">已参与</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import TopBar from './widget/topbar.vue';
  export default {
    components:{
      TopBar:TopBar
    },
    data() {
      return {

      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./integral.less" lang="less"></style>
