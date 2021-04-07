<template>
  <CCard>
    <CCardHeader>
      <strong>Phân nhóm</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CRow form class="form-group" key="role">
          <CCol sm="12">
            <CInputCheckbox
              v-for="(role) in roles"
              :key="role.id"
              :label="role.name"
              :value="role.id"
              :checked="user.roles.map(role => role.id).includes(role.id)"
              @update:checked="giveRole"
            />
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Role",
  props: {
    userId: {
      required: true
    }
  },
  data() {
    return {
      roles: [],
      user: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const userResponse = await services.user.get(this.userId, {
        with: "roles"
      });
      this.user = userResponse.data;
      const roleResponse = await services.role.all();
      this.roles = roleResponse.data;
    },
    async giveRole(checked, event) {
      const roleId = event.target.value;
      const roleRequest = (await checked)
        ? services.user.giveRole(roleId, this.userId)
        : services.user.revokeRole(roleId, this.userId);
      roleRequest.catch(error => {
        this.toastHttpError(error);
      });
      return roleRequest;
    }
  }
};
</script>
