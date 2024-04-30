<template>
  <section class="w-100 navSec">
    <div class="logo">
      <img src="../../assets/imgs/logo/logo.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navSec {
 
  border-bottom: 1px #ccc solid;
  // box-shadow: 0px 0px 4px 4px rgba($color: #645526, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  height: 120px;
  background: var(--main-bg-color);
}
.logo {
  overflow: hidden;
  width: 250px;
  img {
    width: 100%;
  }

  h5 {
    color: var(--secondary-color);

    font-family: "Reem Kufi", sans-serif;
  }
}
</style>
