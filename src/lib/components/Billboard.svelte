<div class="billboard">
  <div class="billboard-bg">
  </div>
  <div class="billboard-text">
    <h1>Main Billboard Text</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dignissimos laboriosam nulla deleniti! Ullam dolorum voluptatem dignissimos nobis ea est dicta quos voluptatum?</p>
  </div>  
</div>

<style>
  .billboard {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 900px;
    width: 1300px;
  }

  .billboard-bg {
    z-index: 0;
    background-image: url("../static/high-res/image1.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  .billboard-text {
    position: absolute;
    z-index: 1;
    top: 75%;
    padding: 20px;
    background-color: green;
    color: white;
  }

  .billboard-text h1 {
    text-transform: uppercase;
    font-size: 35px;
  }

  .billboard-text p {
    font-size: 20px;
  }
</style>