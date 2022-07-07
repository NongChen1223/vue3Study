<template>
    <div>首页</div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
    name: '',
    props: [],
    setup() {
        const state = reactive({})
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted')
        })
        const refState = toRefs(state)
        return {
            ...refState
        }
    }
}
</script>
<style lang='scss' scoped>
</style>