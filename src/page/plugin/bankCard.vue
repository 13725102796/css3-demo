<template>
  <div style="padding: 20px 10px;">
    <van-radio-group class="flex_box radius_box" v-model="cardType">
      <van-radio name="1">个人</van-radio>
      <van-radio name="2">企业</van-radio>
    </van-radio-group>
    <div>
      <!-- <input size="small" placeholder="请输入银行卡号码" type="number"  v-model="form.bank_account" @blur="checkBank"/> -->
      <div @click="show = true">
        <van-field class="input_car" v-model="form.bank_account" disabled placeholder="请输入银行卡号码" />
      </div>
      
      <div class="tips red">{{form.errMsg}}</div>
      <div class="tips">企业银行卡无法校验, 需自行补充填写信息</div>
      <div class="tips">案例卡号：6222600260001072444 </div>
      <!-- <div class="tips red">{{}}</div> -->
    </div>
    <van-number-keyboard
        :show="show"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        @close="checkBank"
      />
  </div>
</template>
<script>
import BIN from "bankcardinfo";
import { RadioGroup, Radio, NumberKeyboard , Field ,CellGroup } from "vant";
import Vue from "vue";

Vue.use(RadioGroup).use(NumberKeyboard).use(Field).use(CellGroup);
Vue.use(Radio);
export default {
  data() {
    return {
      show: false,
      form: {
        bank_account: "",
        errMsg: ""
      },
      cardType: "1"
    };
  },
  methods: {
    onInput(value) {
      this.form.bank_account += value;
      // Toast(value);
    },
    onDelete() {
      if (this.form.bank_account.length == 0) return;
      this.form.bank_account = this.form.bank_account.slice(
        0,
        this.form.bank_account.length - 1
      );
      // Toast('delete');
    },
    checkBank() {
      if (!this.form.bank_account || this.cardType == 2) {
        if(this.form.bank_account && this.form.bank_account.length < 15 || this.form.bank_account.length > 19 ){
          this.form.errMsg = '*银行卡位数必须是15到19位'
          this.form.bank_account = "";
        }

        return
      }
      // console.log(val)
      // this.form.bank_account = ''
      BIN.getBankBin(this.form.bank_account)
        .then(data => {
          console.log(data);
          if(data.bankName){
             this.form.errMsg = data.bankName + data.cardTypeName
          }
          // this.form.bank_name = data.bankName + " " + data.cardTypeName;
        })
        .catch(err => {
          console.log(err)
          console.log(err.split(':')[1])
          let errMsg = (err.split(':')[1]).split(',')[0]
          this.$toast({msg: errMsg});
          this.form.errMsg = '*' + errMsg
          this.form.bank_account = "";
          // console.log(err)
        });
    }
  }
};
</script>
<style lang="sass" scoped>
.radius_box
  padding: 10px 0
  text-align: center
  font-size: 16px
.tips
  color: #888
  font-size: 14px
  padding-top: 15px
  text-align: left
.red
  color: red

</style>

