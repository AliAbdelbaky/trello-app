<template>
  <section id="setting">
    <div class="head">
      <div class="img-container">
        <div class="cover-img">
          <img :src="UserModule.user.img" :alt="UserModule.user.title" />
        </div>
        <div class="personal-img">
          <img :src="UserModule.user.img" :alt="UserModule.user.title" />
          <div class="dropdown">
            <button
              type="button"
              @click="openPopup(UserModule.user.id)"
            >
              <BaseIcon name="camera" width="100%" height="100%" />
            </button>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      popup: false,
    };
  },
  methods: {
    openPopup(id) {
      this.$router.push({ name: "userimg", params: { id: id } });
    },
  },
  computed: {
    ...mapState(["UserModule"]),
  },
};
</script>
