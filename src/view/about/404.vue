<template>
    <el-result icon="warning" title="404提示" sub-title="您找的页面走失啦~~">
        <template #extra>
            <el-button type="primary" @click="$router.push('/Home')">返回首页</el-button>
        </template>
    </el-result>
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