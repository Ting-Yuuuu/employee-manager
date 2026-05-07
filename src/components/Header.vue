<template>
  <header>
    <a href="./index.html">
      <img src="/src/assets/images/logo_pic.png" alt="" width="50">
      <h2 class="header_text">Hopper</h2>
    </a>
  </header>
</template>

<style lang="scss" scoped>
/* header */
header{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bde1f7;
  width: 100%;
  height: 80px;
}

header a{
  text-decoration: none;
  display: flex;
  align-items: center;
}

.header_text{
  margin: 0;
  color: #309442;
}

</style>