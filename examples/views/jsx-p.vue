<template>
  <div>
    <h-title :id="id">
      Hello World
    </h-title>
    <button @click="next">
      下一个
    </button>
  </div>
</template>

<script>
 import Title from './jsx'

 export default {
   name: "List",
   components: {
     "h-title":Title,
   },
   data() {
     return {
       id:1,
     }
   },
   methods:{
     next(){
       ++this.id
     },
   },
 }
</script>
