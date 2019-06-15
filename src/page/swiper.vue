<template>
    <div class="hello">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            mySwiper: Object
        }
    },
    methods: {
        initSwiper() {
            this.$nextTick(() => {
                this.mySwiper = new Swiper('.swiper-container', {
                    loop: true,
                    direction : 'vertical',
                    // 如果需要分页器
                    pagination: {
                        el:'.swiper-pagination'
                    },
                    // 如果需要滚动条
                    scrollbar: '.swiper-scrollbar',
                })
            })
        }
    },
    mounted() {
        //zenhhh
        this.initSwiper();
    }
}
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 500px;
  height: 300px;
  margin: 20px auto;
}
</style>