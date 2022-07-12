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
            >
              <BaseIcon name="camera" width="100%" height="100%"/>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">view</a></li>
              <li><a class="dropdown-item" href="#">upload new one</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["UserModule"]),
  },
};
</script>
