<template>
  <CCard>
    <CCardHeader>
      <strong>Информация</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CInput label="Код" :value.sync="user.id" horizontal :readonly="true" />
        <CInput
          placeholder="Let us know your full name."
          label="Имя"
          :value.sync="user.name"
          horizontal
        />
        <CInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          :value.sync="user.email"
          horizontal
          autocomplete="email"
        />
        <CInput
          label="Номер телефон"
          placeholder="Enter your tel"
          :value.sync="user.tel"
          horizontal
          autocomplete="tel"
        />
        <CInput label="Дата рождения" type="date" :value.sync="user.birthday" horizontal />
        <CSelect
          label="Должность"
          horizontal
          :value.sync="user.title_id"
          :options="titles"
          placeholder="Please select"
        />
        <CSelect
          label="Подразделение"
          horizontal
          :value.sync="user.department_id"
          :options="departments"
          placeholder="Please select"
        />
        <CFormGroup class="form-group form-row">
          <template #label>
            <slot name="label">
              <label class="col-form-label col-sm-3">Активирован</label>
            </slot>
          </template>
          <template #input>
            <CSwitch class="mx-1" color="success" :checked.sync="user.active" />
          </template>
        </CFormGroup>
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton type="submit" size="sm" @click="updateInfo" class="float-right" color="success">
        <CIcon name="cil-check" />Lưu
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Info",
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.usersOpened = from.fullPath.includes("users");
    });
  },
  data() {
    return {
      usersOpened: null,
      user: [],
      titles: [],
      departments: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const titleResponse = await services.title.all();
      this.titles = this.formatKeys(titleResponse.data);
      const departmentResponse = await services.department.all();
      this.departments = this.formatKeys(departmentResponse.data);
      const userResponse = await services.user.get(this.userId);
      this.user = userResponse.data;
    },
    async updateInfo() {
      return await (this.isMe ? services.auth : services.user)
        .update(this.user, this.userId)
        .then((response) => {
          this.$toast.success("Đã lưu");
        })
        .catch((error) => {
          this.toastHttpError(error);
        });
    },
  },
};
</script>
