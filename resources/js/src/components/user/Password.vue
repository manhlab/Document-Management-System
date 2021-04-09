<template>
  <CCard>
    <CCardHeader>
      <strong>Измененить пароль</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CInput placeholder="Вводите пароль." label="Пароль" type="password" horizontal />
        <CInput
          placeholder="Вводите новый пароль."
          label="Новый пароль"
          type="password"
          :value.sync="password.password"
          horizontal
        />
        <CInput
          placeholder="Подтверждение пароля."
          label="Подтверждить"
          type="password"
          :value.sync="password.password_confirmation"
          horizontal
        />
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton
        type="submit"
        @click="updatePassword"
        size="sm"
        class="float-right"
        color="success"
      >
        <CIcon name="cil-check" />Изменение
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Password",
  props: {
    userId: {
      required: true,
    },
    isMe: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      password: {
        password_confirmation: "",
        password: "",
      },
    };
  },
  methods: {
    async updatePassword() {
      return await (this.isMe ? services.auth : services.user)
        .update(this.password, this.userId)
        .then((response) => {
          this.$toast.success("Измененно");
        })
        .catch((error) => {
          this.toastHttpError(error);
        });
    },
  },
};
</script>
