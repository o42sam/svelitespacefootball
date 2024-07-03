<script>
  export let src = "/src/lib/static/avatar-placeholder.jpg";
  export let style;
</script>

<div class="frame" {style}>
  <img {src} alt="avatar" />
</div>

<style>
  .frame {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    overflow: hidden;
  }

  .frame img {
    width: inherit;
    height: inherit;
    height: auto;
  }
</style>