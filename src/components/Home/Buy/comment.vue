<template>
   <div class="mui-content">
    <comment :id="id"></comment>
  </div>
</template>

<script>
//导入评论模块
import comment from '../../public/comment.vue'

export default {
    data () {
        return {
            
        }
    },
    props: ['id'],
    components: {
        comment
    }
    }
</script>

<style scoped>

</style>
