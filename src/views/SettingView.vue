<template>
  <section id="setting">
    <div class="head">
      <div class="img-container">
        <div class="cover-img">
          <img :src="UserModule.user.img" :alt="UserModule.user.title" />
        </div>
        <div class="personal-img">
          <img :src="UserModule.user.img" :alt="UserModule.user.title" />
          <h1 class="title">
            <span class="bolder">{{ UserModule.user.name }}</span>
            <span>{{ UserModule.user.title }}</span>
          </h1>
          <div class="dropdown">
            <button type="button" @click="openPopup(UserModule.user.id)">
              <BaseIcon name="camera" width="100%" height="100%" />
            </button>
          </div>
        </div>
      </div>
      <router-view />
    </div>
    <div class="body">
      <vee-form :validation-schema="schema" @submit="submit">
        <div class="container-fluid">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name">Name</label>
                  <vee-field
                    placeholder="Name *"
                    required="required"
                    type="text"
                    autocomplete="off"
                    id="name"
                    name="name"
                    :value="UserModule.user.name"
                  />
                  <ErrorMessage class="error_msg" name="name">
                    <span class="err_msg"> Please enter a valid name </span>
                  </ErrorMessage>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="title">Title</label>
                  <vee-field
                    placeholder="Title *"
                    required="required"
                    type="text"
                    autocomplete="off"
                    id="title"
                    name="title"
                    :value="UserModule.user.title"
                  />
                  <ErrorMessage class="error_msg" name="title">
                    <span class="err_msg"> Please enter a valid title </span>
                  </ErrorMessage>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="username">Username</label>
                  <vee-field
                    type="text"
                    autocomplete="off"
                    id="username"
                    name="username"
                    placeholder="Username *"
                    required="required"
                    :value="UserModule.user.username"
                  />
                  <ErrorMessage class="error_msg" name="username">
                    <span class="err_msg"> Please enter a valid username </span>
                  </ErrorMessage>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="password">Password</label>
                  <vee-field
                    type="text"
                    placeholder="Password *"
                    autocomplete="off"
                    id="password"
                    name="password"
                    required="required"
                    :value="UserModule.user.password"
                  />
                  <ErrorMessage class="error_msg" name="password">
                    <span class="err_msg"> Please enter a valid password </span>
                  </ErrorMessage>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <button :disabled="submtied" type="submit">Go !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vee-form>
    </div>
  </section>
  <transition>
    <BaseNotify
      v-if="notify"
      :type="'your data'"
    />
  </transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      submtied:false,
      notify: false,
      schema: {
        name: "required|min:3|max:20|alpha_spaces",
        username: "required|min:3|max:30",
        title: "required|min:3|max:20",
        password: "required|min:3|max:100",
      },
    };
  },
  methods: {
    openPopup(id) {
      this.$router.push({ name: "userimg", params: { id: id } });
    },
    submit(formVal) {
      const data = {
        ...this.UserModule.user,
        ...formVal,
      };
      this.$store.dispatch("UserModule/registerNewUser", data).then(() => {
        this.notify = true;
        this.submtied = true
        setTimeout(() => {
          this.notify = false;
          this.submtied = false
        }, 2000);
        clearTimeout()
      });
    },
  },
  computed: {
    ...mapState(["UserModule"]),
  },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
