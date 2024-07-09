
<template>
  <div class="demo">
    <pikaz-iframe :setting="setting">
    </pikaz-iframe>
  </div>
</template>

<script>
import { PikazIframe } from 'pikaz-iframe'
export default {
  props: {},
  components: { PikazIframe },
  data () {
    return {
      setting: {
        src: "https://www.baidu.com"
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style scoped>
.demo {
  width: 100%;
  height: 700px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(230, 230, 230, 1);
}
</style>