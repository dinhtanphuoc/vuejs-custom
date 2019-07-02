<template>
  <b-form
    class="form-content"
    @submit="onSubmit"
    v-if="show"
  >
    <div class="login-form-header">
      <h3>Đăng nhập</h3>
    </div>
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
      <b-button
        class="w-100 form-button"
        type="submit"
        pill
        variant="info"
      >
        Button
      </b-button>
    </div>
  </b-form>
</template>

<script>
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
      onSubmit(e) {
        e.preventDefault()
        console.log(this.form)
      }
    }
  }
</script>

<style lang="scss">
  .form-content {
    background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
    box-shadow: 0 0 10px #595959;
    width: 100%;
    padding: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    .login-form-header {
      margin: 20px;
      h3 {
        font-weight: bold;
        text-transform: uppercase;
      }
    }
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
        margin-top: 20px;
      }
    }
  }
</style>
