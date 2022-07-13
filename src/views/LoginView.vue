<template>
  <section class="login-form">
    <vee-form :validation-schema="schema" @submit="submit">
      <h1 class="title">hello.</h1>
      <div class="form-group">
        <label class="label-name" for="img">
          <BaseIcon name="camera" />
        </label>
        <vee-field
          accept="image/png, image/jpeg"
          @change="choseImgFile"
          type="file"
          autocomplete="off"
          id="img"
          name="img"
          required="required"
        />
        <ErrorMessage class="error_msg" name="img">
          <span class="err_msg"> Please enter a valid image </span>
        </ErrorMessage>
      </div>
      <div class="form-group">
        <vee-field
          placeholder="Name *"
          required="required"
          type="text"
          autocomplete="off"
          id="name"
          name="name"
        />
        <ErrorMessage class="error_msg" name="name">
          <span class="err_msg"> Please enter a valid name </span>
        </ErrorMessage>
      </div>
      <div class="form-group">
        <vee-field
          placeholder="Title *"
          required="required"
          type="text"
          autocomplete="off"
          id="title"
          name="title"
        />
        <ErrorMessage class="error_msg" name="title">
          <span class="err_msg"> Please enter a valid title </span>
        </ErrorMessage>
      </div>
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
          type="password"
          placeholder="Password *"
          autocomplete="off"
          id="password"
          name="password"
          required="required"
        />
        <ErrorMessage class="error_msg" name="password">
          <span class="err_msg"> Please enter a valid password </span>
        </ErrorMessage>
      </div>

      <div class="form-group">
        <button type="submit" :disabled="!isFormValid">Go !</button>
      </div>
    </vee-form>
  </section>
</template>
<script>
import { uuid } from "@/utils";
export default {
  data() {
    return {
      req__submitions: false,
      img: "",
      schema: {
        name: "required|min:3|max:20|alpha_spaces",
        username: "required|min:3|max:30",
        title: "required|min:3|max:20",
        img: "required",
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
      const data = {
        ...formVal,
        img: this.img,
        authenticated: true,
        id: uuid(),
      };
      this.$store.dispatch("UserModule/registerNewUser", data).then(() => {
        setTimeout(() => {
          this.$router.push({ name: "board" });
          console.log('welcome')
        }, 1000);
      });
      this.req__submitions = true;
      setTimeout(() => (this.req__submitions = false), 3000);
    },
    choseImgFile($event) {
      const file = $event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          this.img = result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
