<template>
  <div class="home">
    <HeaderSec />
    <GallerySec />
    <InstructionsSEc/>
  </div>
</template>

<script>
import HeaderSec from "@/components/pages/HomePage/HeaderSec.vue";

import GallerySec from "@/components/pages/HomePage/GallerySec.vue";
import InstructionsSEc from "@/components/pages/HomePage/InstructionsSEc.vue";

export default {
  name: "HomeView",
  components: {
    HeaderSec,
    InstructionsSEc,
    GallerySec,
  },
};
</script>
