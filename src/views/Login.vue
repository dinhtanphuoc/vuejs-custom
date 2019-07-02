<template>
  <div class="login-container">
    <b-container fluid>
      <b-row class="login-content" align-v="center">
        <LoginForm />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '@/components/login/login-form.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">
  .login-container {
    height: 100vh;
    background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);
    .container-fluid {
      height: 100%;
      .login-content {
        width: 400px;
        height: 100%;
        justify-content: center;
        margin: auto;
      }
    }
  }
</style>
