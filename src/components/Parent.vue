<template>
  <div><child/></div>
</template>

<script>
import Child from '@/components/Child'
export default {
  name: "Parent",
  components: {
    Child
  }
}
</script>
