<template>
  <section class="auth-form">
    <vee-form :validation-schema="schema" @submit="submit">
      <h1 class="title">hello.</h1>
      <div class="form-group">
        <vee-field
          type="text"
          autocomplete="off"
          id="username"
          name="username"
          placeholder="Username *"
          required="required"
        />
        <ErrorMessage class="error_msg" name="username">
          <span class="err_msg"> Please enter a valid username </span>
        </ErrorMessage>
      </div>
      <div class="form-group">
        <vee-field
          :type="pass_type ? 'password' : 'text'"
          placeholder="Password *"
          autocomplete="off"
          id="password"
          name="password"
          required="required"
        />
        <div class="show-pass" @click="pass_type = !pass_type">
          <BaseIcon name="eye" v-if="pass_type" />
          <BaseIcon name="eye-off" v-else />
        </div>
        <ErrorMessage class="error_msg" name="password">
          <span class="err_msg"> Please enter a valid password </span>
        </ErrorMessage>
      </div>

      <div class="form-group">
        <button type="submit" :disabled="!isFormValid">
          Go !
          <div class="loading" v-if="req__submitions">
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </button>
        <div class="go-to">
          Don't Have An Account?
          <router-link :to="{ name: 'register' }"> Signup </router-link>
        </div>
      </div>
    </vee-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      pass_type: true,
      req__submitions: false,
      schema: {
        username: "required|min:3|max:30",
        password: "required|min:3|max:100",
      },
    };
  },
  computed: {
    isFormValid() {
      return !Object.keys(this.schema).some((key) => this.schema[key].invalid);
    },
  },
  methods: {
    submit(formVal) {
      this.req__submitions = true;
      this.$store.dispatch("UserModule/login", formVal).then(() => {
        this.$router.push({ name: "board" });
        setTimeout(() => {
          this.req__submitions = false;
        }, 1000);
      });
    },
  },
};
</script>
<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 0px;
  border: 8px solid #1c3738;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #1c3738 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
