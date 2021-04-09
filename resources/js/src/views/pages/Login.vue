<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow class="col-md-6">
      <CCol>
        <CCardGroup>
          <CCard class="p-4 px-5">
            <CCardBody>
              <CForm>
                <h1 class="pb-4">Войти</h1>
                <CAlert :show="!!error" color="warning">{{error}}</CAlert>
                <CInput autocomplete="email" placeholder="Email or Username..." v-model="email" required>
                  <template #prepend-content>
                    <CIcon name="cil-user" />
                  </template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                  v-model="password"
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton color="primary" @click="login">Войти</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton color="link">Забыли пароль?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "admin@domain.com",
      password: "password",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("auth/login", { email: this.email, password: this.password })
        .then(response => {
          this.$router.push(
            this.$route.query.redirectFrom || { name: "Домашняя страница" }
          );
        })
        .then(response => {
          this.$toast.success("Успешно войти");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
