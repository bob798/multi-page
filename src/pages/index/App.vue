<template>
  <div class="back">
    <div class="title">{{ title }}</div>
    <div id="user" class="user-list">
      <!--      <ul id="userList" :class="{ 'move': index === imgData.length-1 }" v-for="(item,index) in userListData "-->
      <ul id="userList" v-for="(item,index) in userListData "
          v-bind:key="index">
<!--        <li><img :src="item.headImgUrl"></li>-->
      <li>{{item.name}}</li>
      </ul>

    </div>
    <div class="persons">
      总人数：{{ personTotal }}
    </div>
    <div class="two">
      <div>
        <el-button @click="getUerList">获取用户列表</el-button>
      </div>
      <div>
        <el-button @click="getCompanyInfo">获取企业信息</el-button>
      </div>
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
      title: '',
      personTotal: '',
      currentPersonTotal: '',
      qrcodeUrl: '',
      userListData: [],
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
  // created() {
  //   this.getUerList()
  //   this.timer = setInterval(this.getUerList,10000)
  // },


  mounted () {
    this.id = 1
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        this.getUerList();
      },10000)
    }
    this.$nextTick(() => {
      this.getCompanyInfo()
      this.getUerList()
    });
  },
  // beforeDestroy() {
  //   clearInterval(this.timer)
  // },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.getCompanyInfo()
        this.getUerList()
      })
    },
    addImage() {
      this.imgData.unshift('https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/o5RXbWEkXzXsQnZHdNwQtmp_ae2e74467e7cfae37a4669fda70d3c9a193a3de6c649ca84.jpg');
      // this.imgData.unshift('https://school-1258861085.cos.ap-beijing.myqcloud.com/public/img/3dxM3M84AAcLRQTcb8tttmp_d136b9214a1eae0410ac6842b96801a373732559186b7b44.jpg');
    },
    getCompanyInfo() {
      console.log('------getCompanyInfo---')
      this.$http({
        url: this.$http.adornUrl(`/app/getCompanyInfo/${this.id}`),
        method: 'get',

      }).then(({data}) => {
        if (data && data.code === 0) {
          console.log(data)
          this.companyName = data.company.name
          this.title = data.company.title
          this.personTotal = data.company.personTotal
          this.currentPersonTotal = data.company.currentPersonTotal
          this.qrcodeUrl = data.company.qrcodeUrl
          console.log(this.companyName)

        }
      })
    },
    getUerList() {
      console.log('------execte getUerList---')
      this.$http({
        url: this.$http.adornUrl(`/app/getUserList/${this.id}`),
        method: 'get',
      }).then(({data}) => {
        if (data && data.code === 0) {

          this.userListData = data.userList
          console.log(this.userListData)
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

.title {
  display: block;
  position: absolute;
  top: 10%;
  left: 45%;
}

</style>
