<template>
  <div class="login_div">
    <div class="inputs inputs_account">
      <div class="account">
        <img src="../../assets/account.png" alt="">
      </div>
      <input type="text" class="d_input">
    </div>
    <div class="inputs inputs_password">
      <div class="password">
        <img src="../../assets/password.png" alt="">
      </div>

      <input type="text" class="d_input">
    </div>
    <input type="button" class="sign_in_button" value="登录" @click="onclick">
  </div>
</template>

<script>
    export default {
        name: "Sign-in",
      data(){
          return {
            email:'',
            password:''
          }
      },
      methods:{
          onclick(){
            var  that = this;

          }
      }
    }
</script>

<style scoped>
  .login_div{
    width: 300px;
    height: auto;
    margin: 0 auto;

  }
  .inputs{
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: rgb(250, 255, 189);
  }
  .inputs_account{
    border-bottom: none;
    border-radius: 4px 4px 0 0
  }
  .inputs_password{
    border-radius: 0 0 4px 4px;
  }
  .d_input{
    width: 260px;
    height: 48px;
    border: none;
    background-color:rgb(250, 255, 189);
    padding: 5px 10px 4px;
  }
  .sign_in_button{
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
  .account,.password{
    width: 34px;
    height: 100%;
    float: left;
    padding:12px 4px;
  }
</style>
