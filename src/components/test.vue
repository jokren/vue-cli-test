<template>
    <div>
        <button @click="toogleTitle">点击切换title</button>
        <h4 v-text="title"></h4>
    </div>
</template>
<script>
export default {
    name:'test',
    data() {
        return {
            title: '测试本地json数据怎么调用'
        }
    },
    mounted() {

    },
    methods: {
        toogleTitle() {
            this.$http.get('/main.php').then(res => {
                this.title=res.data[0].data[0]
            }).catch(error => {
                console.log(error);

            })
        }
    }
}
</script>