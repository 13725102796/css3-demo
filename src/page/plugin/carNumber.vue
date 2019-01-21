<template>
  <div class="">
    <div id="plateNumapp"></div>  
    <div style="font-size: .4rem; padding-top: 10px;">车牌号： {{form.licence_plate}}</div>
  </div>  
</template>
<script>
import PlateNumberInput from 'plate-number-input'
export default {
  
  data(){
    return{
      // inputObj: '',
      form: {
        licence_plate: ''
      },
    }
  },
  mounted() {
    // if(this.$route.query) this.form = this.$route.query
    const input = new PlateNumberInput({
      el: "#plateNumapp",
      defaultNumber: this.form.licence_plate,
      isNewpower: false,
      onBtnSaveClick: ()=>{
        // alert('213')
        this.form.licence_plate = input.getNumber()
        console.log(this.form.licence_plate)
        // this.$router.push({path:'/adds', query: this.form})
        // console.log(input.getNumber())
      }
    });
    // this.inputObj.onBtnSaveClick = ()=>{
    //   alert('132')
    // }
    // console.log("input 对象");
    // console.log(input);

    // console.log("获取当前输入车牌");
    // console.log(input.getNumber());

    // console.log("获取当前车牌类型");
    // console.log(input.getNumberType());

    // console.log("设置默认车牌号");
    // input.setDefaultNumber("粤A3RHKT");

    // console.log("设置车牌输入框上方提示文字");
    // input.setInfo("输入框上方提示文字");
  }
};
</script>
<style lang="sass" >
.wrappers
  height: 100%
  position: relative
#inputboxWrapper 
  padding: 35px 0!important
  .container-info
    font-size: 16px!important
  .container-input 
    margin-top: 20px!important
    height: 60px!important
    span
      font-size: 20px!important
      height: 60px!important
      line-height: 60px!important

#inputboxWrapper 
  .container-save-button
    margin-top: 35px!important
    height: 38px!important
    // padding: 0 60px!important
    .btnbind
      font-size: 17px!important
      line-height: 38px!important
      height: 38px!important
      margin: 0 auto
      width: 60%!important
  .container-switch-button
    margin-top: 15px!important
    font-size: 14px!important
    line-height: 25px!important
    &::before
      width: 25px!important
      height: 25px!important

// 键盘样式
#keyboardWrapper 
  .keyboard-row:not(:first-child) 
    margin-bottom: 10px!important
    .keyboard-item  
      font-size: 16px!important
      height: 40px!important

#keyboardWrapper 
  .keyboard-row
    width: 75vw!important
      
</style>


