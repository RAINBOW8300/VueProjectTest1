<template>
  <div class="number1">
    <div @click="add" class="left">+</div><div class="middle">{{count}}</div><div class="right" @click="sub">-</div>
  </div>
</template>

<script>
export default {
  data(){
      return { 
        count:1
      }
  },
  methods: {
      add(){
          if (this.count >= this.stock) {
                return;
            }
          this.count++
      },
      sub(){
          this.count--
          if(this.count<1){
              this.count=1
              this.$toats("至少选择一件")
          }
      }
  }
}
</script>


<style scoped>
.number1 {
  display: inline-block;
  text-align: center;
}

.number1 div {
  display: inline-block;
  width: 30px;
  height: 25px;
  line-height: 25px;
  border: 1px solid rgba(92, 92, 92, 0.5);
}

.number1 .middle {
  width: 40px;
  border-right: 0px;
  border-left: 0px;
}

</style>