<template>
  <div class="back">

    <div id="user" class="user-list">
      <!--      <ul id="userList">-->
      <ul id="userList" :class="{ 'move': index === imgData.length-1 }" v-for="(item,index) in imgData "
          v-bind:key="item">
        <!--        <li><img class="move"></li>-->
        <li><img :src="item"></li>

      </ul>

    </div>
    <div class="persons">
      已签到：{{ persons }}
    </div>
    <div class="two">
      <el-button @click="addImage">添加照片</el-button>
      <el-button   @click="getInfo">获取信息</el-button>
      <img class="two-img" src="../../assets/two.png">
      <p>请扫码签到</p>

    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
animate__backInLeft
<script>
import HelloWorld from './../../components/HelloWorld.vue'
// import $ from 'jquery'
export default {
  data() {
    return {
      persons: '9',
      id: 1,
      companyName: '',
      personTotal: '',
      currentPersonTotal: '',
      qrcodeUrl: '',
      imgData: [
        'https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/3dxM3M84AAcLRQTcb8tttmp_d136b9214a1eae0410ac6842b96801a373732559186b7b44.jpg',
        'https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg',
        'https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg',
        'https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg',
        'https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg',
        'https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg',
        'https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg'
      ]

    }
  },
  components: {
    HelloWorld
  },
  activated() {
    this.getInfo()
  },
  methods: {
    addImage() {
      // var ul = document.getElementById("userList");
      // var li = document.createElement("li");
      // var img = document.createElement("img");
      // img.setAttribute("src","https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg")
      // img.setAttribute("class","move")
      // li.appendChild(img)
      // ul.appendChild(li);
      // $("#userList").trigger("create");
      // document.querySelector("").appendChild('  <li><img class="move" src="https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg"></li>')
      this.imgData.unshift('https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg');
      // this.imgData.unshift('https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/3dxM3M84AAcLRQTcb8tttmp_d136b9214a1eae0410ac6842b96801a373732559186b7b44.jpg');
    },
    getInfo() {
      this.$http({
        url: this.$http.adornUrl(`/company/info/${this.id}`),
        method: 'get',

      }).then(({data}) => {
        if (data && data.code === 0) {
          this.companyName = data.company.companyName
          this.personTotal = data.company.personTotal
          this.currentPersonTotal = data.company.currentPersonTotal
          this.qrcodeUrl = data.company.qrcodeUrl

        }
      })
    }
  }
}


</script>
<style scoped>
li {
  list-style: none;
  float: left;
  width: 20%;
  height: 100px;
  overflow: hidden;
}

li img {
  /* 设置图片为圆形 */
  border-radius: 100%;
  /*
    rotate 自定义动画效果名称
    6s 完成的时间
    linear 表示全程速度相同,除了这个还有：
      ease 动画以低速开始，然后加快，在结束前变慢
      ease-in	动画以低速开始。
      ease-out	动画以低速结束。
      ease-in-out	动画以低速开始和结束。
    infinite设置播放次数，infinite无限次，如果有次数，选择数字
   */
  animation: rotate 6s linear infinite;
  /*-webkit-animation: rotate 1s infinite;*/
  position: relative;
  width: 50%;
  top: 50%;
  transform: translateY(-50%);
}


@-webkit-keyframes rotate {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}

.wrap-class {
  max-height: 200px;
}

.user-list {
  margin-top: 10%;
  top: 40%;
  margin-left: 20%;
  width: 60%;
  height: 60%;
  background-color: #bf1a2d;
  overflow: auto;


  /*animation: animate__backInLeft; !* referring directly to the animation's @keyframe declaration *!*/
  /*animation-duration: 2s; !* don't forget to set a duration! *!*/

}

.move {
  animation: bounceIn;
  animation-duration: 2s
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
  }
  70% {
    -webkit-transform: scale(.9);
  }
  100% {
    -webkit-transform: scale(1);
  }
}

@keyframes mymove {
  from {
    left: -20px;
  }
  to {
    left: 200px;
  }
}

.back {
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  background-image: url(./../../assets/yuandan.jpg);
  background-size: cover;
}

.red {
  width: 100%;
  height: 30px;
  border: 1px solid red;
}

.two {
  display: block;
  position: absolute;
  top: 30%;
  cursor: move;
  left: 80%;
}

.persons {
  display: block;
  position: absolute;
  top: 10%;
  cursor: move;
  left: 80%;
}

.two-img {
  width: 100px;
}

</style>
