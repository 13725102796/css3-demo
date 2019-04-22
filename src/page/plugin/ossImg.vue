<template>
    <div class="wrapper">
        <div class="order">
          <div class="cardbox">
            <div class="add_photo">
              <div class="command_pic">
                <div v-for="(li,idx) in pic" :key="idx">
                  <i class="cancel_icon" @click="delPhoto(idx)"></i>
                  <img :src="li.content || li">
                </div>

                <div class="input_pic" v-show="pic.length != 5">
                  <van-uploader :after-read="onRead" accept="image/*" multiple>
                    <div class="photo_tip">
                      <p class="photo_bg"></p>
                      <p>{{pic.length}}/5</p>
                    </div>
                  </van-uploader>
                </div>
              </div>
            </div>
          </div>   
        </div>
         <van-button class="service" @click="submit" >上传图片</van-button>
    </div>
</template>

<script>
import Vue from "vue";
import { Uploader, Toast } from "vant";
import lrz from 'lrz'  

Vue.use(Uploader).use(Toast);
import ossImg from 'aliyun-oss-web'

const oss = new ossImg({
  // aliyun oss config
  uploadImageUrl: 'Bucket 域名', //默认存在根目录，可根据需求改
  AccessKeySecret: 'Access Key Secret',
  OSSAccessKeyId: 'AccessKey ID',
  imgPolicy: '',
  imgSignature: '',
  getImg: '图片访问的域名',

  // default (文件大小最大上限/M,默认10M)
  max: 10,
  fileLib: 'oss 对应文件目录', // oss 对应文件目录
  // lrz config 

  quality: 1, // 图片质量 0-1 从低到高, 默认0.8 具体参数参考lrz
  
  
})
// import uploadImg from '@/plugins/uploadImage'
export default {
  data() {
    return {
      pic: [],
      picUrl: [],
    };
  },
  methods: {
    // add photo
    async onRead(file) {
      // oss.upload(file.file,(url)=>{
      //   console.log(url)
      //   this.pic.push(url);
      // })
      oss.lrzImage(file.file,(picObj)=>{
        // console.log(url)
        this.pic.push(picObj);
      })
    },
    delPhoto(i) {
      console.log(i);
      this.pic.splice(i, 1);
    },
    submit(){
      this.pic.map(item=>{
        if(item.file){
          oss.upload(item.file,(url)=>{
            console.log(url)
            this.picUrl.push(url);
          })
        }  
      })
      console.log(this.picUrl)
    }
  },
};
</script>


<style lang="scss" scoped>
.flex_box {
  display: flex;
  flex-wrap: wrap;
  color: #97a3a9;
  p {
    margin-right: 12px;
    margin-bottom: 4px;
    margin-top: 4px;
  }
}
.wrapper {
  color: #444;
  // color: #97A3A9;
  // background-color: #fcfcfc;
}
.order {
  padding: 8px;
  font-size: 14px;
  text-align: left;
}
.order /deep/ textarea {
  // font-size: 15px !important;
  color: #97a3a9 !important;
}
.cardbox {
  padding: 14px;
  /* Rectangle 4: */
  background: #ffffff;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px 0 #e6f3ff;
  border-radius: 8px 12px 12px 12px;
}
.cardbox .title .day {
  font-size: 12px;
  color: #97a3a9;
}
.right {
  float: right;
}

.order-picker /deep/.van-picker__cancel,
.order-picker /deep/.van-picker__confirm {
  color: #38f !important;
}
.van-cell {
  line-height: 20px;
}
.danger {
  width: 0%;
  height: 6px;
  border-radius: 30px;
  background: linear-gradient(to right, #9550ff 0%, #ff5151 100%);
}
.filter /deep/.van-checkbox__icon .van-icon {
  border-radius: 8px;
  border-color: #dbdcdc;
}
.filter /deep/.van-checkbox__icon--checked .van-icon {
  color: #fff;
  border-color: #32beff;
  background-color: #32beff;
}
.van-button {
  font-size: 12px !important;
}
.van-button--mini {
  width: auto;
  padding: 0px 8px;
}
.relieve_btn {
  background-color: #ff5858;
  border: none;
  color: #ffffff;
}
.btn_right {
  text-align: right;
}
.info_btn {
  color: #ffffff;
  background-color: #66a4ff;
  border-radius: 100px;
  border: none;
  background: linear-gradient(to left, #5d8eff 0%, #94ffef 100%);
  box-shadow: 0 5px 20px 0 rgb(185, 223, 255);
  width: 100%;
  margin-bottom: 30px;
  font-size: 16px !important;
}

// add photo
.add_photo {
  padding: 15px;
}

.command_pic {
  display: flex;
  flex-wrap: wrap;
}
.command_pic > div {
  width: 80px;
  height: 80px;
  border-radius: 3px;
  position: relative;
  /* border: .02rem solid #B0B0B0; */
  /* box-sizing: border-box; */
  margin-right: 16px;
  margin-bottom: 10px
}
.command_pic > div > img {
  width: 100%;
  height: 100%;
}
.cancel_icon {
  position: absolute;
  top: 4px;
  right: 4px;
  background: url("~@/assets/img/plugin/del.png") no-repeat;
  background-size: 100% 100%;
  width: 18px;
  height: 18px;
}

.input_pic {
  border: 1px solid #b0b0b0;
  box-sizing: border-box;
  text-align: center;
  color: #999;
  font-size: 12px;
}
.photo_bg {
  background: url("~@/assets/img/plugin/photo.png") no-repeat;
  background-size: 100% 100%;
  width: 22px;
  height:22px;
  margin: 20px 0 10px 0;
}
</style>

