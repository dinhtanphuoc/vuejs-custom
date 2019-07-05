<template>
  <b-form
    class="form-content"
    @submit="onSubmit"
    v-if="show"
  >
    <img class="image-logo" src="../../assets/images/logo.png" />
    <div class="login-form-content">
      <div class="form-group">
        <i class="icon icon-email" />
        <b-form-input
          class="form-input"
          v-model="form.email"
          type="email"
          placeholder="Nhập email"
        />
      </div>
      <div class="form-group">
        <i class="icon icon-vpn_key" />
        <b-form-input
          class="form-input"
          v-model="form.password"
          type="password"
          placeholder="Nhập mật khẩu"
        />
      </div>
      <div>{{ form }}</div>
      <b-button
        class="w-100 form-button"
        type="submit"
        pill
        variant="info"
      >
        Đăng nhập
      </b-button>
    </div>
  </b-form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      ...mapActions('login', ['getProfile']),
      onSubmit(e) {
        e.preventDefault();
        this.getProfile();
      }
    }
  }
</script>

<style lang="scss">
  .form-content {
    background-image: linear-gradient(-225deg, #FFFEFF 0%, #17a2b8 100%);
    box-shadow: 0 0 10px #595959;
    width: 100%;
    padding: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    .login-form-content {
      margin-bottom: 20px;
      .form-group {
        display: flex;
        align-items: center;
        border-bottom: 2px solid #a7e0e3;
        margin-bottom: 15px;
        .icon {
          margin-right: 5px;
          font-size: 25px;
          color: #53a9c3;
        }
        .form-input {
          border: none;
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 0;
          background: transparent;
          padding: 0;
          font-size: 14px;
          &:focus {
            box-shadow: none;
          }
        }
      }
      .form-button {
        font-weight: bold;
        margin-top: 20px;
      }
    }
  }
  .image-logo {
    max-height: 100px;
    max-width: 150px;
    margin-bottom: 35px;
  }
</style>
