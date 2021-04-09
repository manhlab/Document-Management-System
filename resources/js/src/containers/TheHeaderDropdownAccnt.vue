<template>
  <div>
    <CButton
      size="sm"
      color="info"
      @click="goProfile"
      variant="outline"
      v-c-tooltip="'Персональная информация'"
    >
      <CIcon name="cil-user" class="m-0" />
    </CButton>
    <CButton size="sm" color="danger" @click="logout" variant="outline" v-c-tooltip="'Выход'">
      <CIcon name="cil-power-standby" class="m-0" />
    </CButton>
  </div>
</template>

<script>
export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      itemsCount: 42
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(response => {
          this.redirectToLogin();
        })
        .catch(error => {
          this.redirectToLogin();
        });
    },
    redirectToLogin() {
      this.$router.push({ name: "Login" });
    },
    goProfile() {
      this.$router.push({ name: "Profile" });
    }
  }
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>