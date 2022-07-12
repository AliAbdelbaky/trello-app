<template v-if="userPopup">
  <div class="user-popup" @click.self="close('close')">
    <div class="content">
      <div class="img-container">
        <img :src="choseImgFile" v-if="choseImgFile" />
        <img :src="UserModule.user.img" v-else />
      </div>
      <vee-form :validation-schema="schema" @submit="submit">
        <div class="form-group">
          <label class="label-name" for="img">
            <span>new one ?</span>
            <BaseIcon name="camera" />
          </label>
          <vee-field
            accept="image/png, image/jpeg"
            type="file"
            autocomplete="off"
            id="img"
            name="imgForm"
            required="required"
            @change="viewImg"
          />
          <ErrorMessage class="error_msg" name="imgForm">
            <span class="err_msg"> Please enter a valid image </span>
          </ErrorMessage>
        </div>
        <div class="pop-bottom">
          <button @click="close('close')">close</button>
          <button type="submit" @click="close('save')">save</button>
        </div>
      </vee-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      choseImgFile: "",
      schema: {
        imgForm: "required",
      },
    };
  },
  computed: {
    userPopup() {
      return this.$route.name === "userimg";
    },
    ...mapState(["UserModule"]),
  },
  methods: {
    close(type) {
      switch (type) {
        case "close":
          this.$router.push({ name: "setting" });
          break;
        case "save":
          this.submit();
          break;

        default:
          break;
      }
    },
    submit(formVal) {
      if (this.choseImgFile) {
        const data = {
          ...this.UserModule.user,
          img: this.choseImgFile,
        };
        this.$store.dispatch("UserModule/registerNewUser", data).then(()=>{
          this.$router.push({ name: "setting" });
        });
      } else {
        return;
      }
    },
    viewImg($event) {
      const file = $event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          this.choseImgFile = result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
<style scoped>
.user-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(33, 37, 41, 0.6588235294);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
