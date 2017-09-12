<template>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-left">
        <div class="timeline-left icon-lg">
          <a class="timeline-icon tooltip" data-tooltip="2017"></a>
        </div>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <p class="tile-subtitle">2017</p>
            <p class="tile-title"><label class="text-italic">09-10</label><a>测试文章1</a></p>
            <p class="tile-title"><label class="text-italic">10-05</label><a>测试文章2</a></p>
            <p class="tile-title"><label class="text-italic">11-21</label><a>测试文章3</a></p>
            <p class="tile-title"><label class="text-italic">12-03</label><a>测试文章4</a></p>
            <p class="tile-title"><label class="text-italic">01-05</label><a>测试文章5</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-left">
        <div class="timeline-left icon-lg">
          <a class="timeline-icon tooltip" data-tooltip="2016"></a>
        </div>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <p class="tile-subtitle">2016</p>
            <p class="tile-title"><label class="text-italic">09-10</label><a>测试文章222</a></p>
            <p class="tile-title"><label class="text-italic">10-05</label><a>测试文章123</a></p>
            <p class="tile-title"><label class="text-italic">11-21</label><a>测试文章123</a></p>
            <p class="tile-title"><label class="text-italic">12-03</label><a>测试文章234</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .timeline {
    margin-top: 30px;
  }

  .timeline .timeline-item {
    display: flex;
    display: -ms-flexbox;
    margin-bottom: 1.2rem;
    position: relative;
  }

  .timeline .timeline-item::before {
    background: #e7e9ed;
    content: "";
    height: 100%;
    left: 11px;
    position: absolute;
    top: 1.2rem;
    width: 2px;
  }

  .tile .tile-content .tile-subtitle {
    font-size: 24px;
    font-weight: 600;
    color: #34495e;
  }

  .tile .tile-content .tile-title label {
    font-size: 14px;
    color: #7f8c8d;
    margin-right: 15px;
  }

  .tile .tile-content .tile-title a {
    color: #34495e;
  }

  .tile .tile-content .tile-title a:hover {
    margin-left: 10px;
    color: #5764c6;
    transition: all 0.3s;
    text-decoration: none;
  }

  .timeline .timeline-item .timeline-content {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 2px 0 2px .8rem;
  }

  .timeline .timeline-item .timeline-content {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 2px 0 2px .8rem;
  }

  .timeline .timeline-item .timeline-icon {
    border-radius: 50%;
    color: #fff;
    display: block;
    height: 1.2rem;
    text-align: center;
    width: 1.2rem;
  }

  .timeline .timeline-item .timeline-icon::before {
    border: .1rem solid #5764c6;
    border-radius: 50%;
    content: "";
    display: block;
    height: .4rem;
    left: .4rem;
    position: absolute;
    top: .4rem;
    width: .4rem;
  }

  .timeline .timeline-item .timeline-icon.icon-lg {
    background: #5764c6;
    font-size: .8rem;
    line-height: 1rem;
  }

  .timeline .timeline-item .timeline-icon.icon-lg::before {
    content: none;
  }
</style>
