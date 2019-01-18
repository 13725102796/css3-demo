<template>
  <div>
    <van-radio-group v-model="radio">
      <van-radio name="1">个人</van-radio>
      <van-radio name="2">企业</van-radio>
    </van-radio-group>
    <div>
      <input size="small" placeholder="请输入银行卡号码" type="number"  v-model="form.bank_account" @blur="checkBank"/>
      <div>{{form.bank_name}}</div>
    </div>
  </div>
</template>
<script>
import BIN from "bankcardinfo";
import { RadioGroup, Radio } from 'vant';
import Vue from 'vue'
Vue.use(RadioGroup);
Vue.use(Radio);
export default {
  data() {
    return {
      form: {
        bank_account: ""
      },
      radio: '1'
    };
  },
  methods: {
    checkBank() {
      if (!this.form.bank_account || this.cardType == 2) return;
      // console.log(val)
      BIN.getBankBin(this.form.bank_account)
        .then(data => {
          console.log(data);
          this.form.bank_name = data.bankName + " " + data.cardTypeName;
        })
        .catch(err => {
          this.$message.error("银行卡号码信息有误！");
          this.form.bank_account = "";
          // console.log(err)
        });
    }
  }
};
</script>
