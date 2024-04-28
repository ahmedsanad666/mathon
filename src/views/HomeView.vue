<template>
  <div class="home">
 
<HeaderSec/>
<GallerySec/>
  </div>
</template>

<script>
import HeaderSec from '@/components/pages/HomePage/HeaderSec.vue'

import GallerySec from '@/components/pages/HomePage/GallerySec.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderSec
    ,
    GallerySec
  
  }
}
</script>
