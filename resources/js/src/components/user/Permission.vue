<template>
  <CCard>
    <CCardHeader>
      <strong>Phân quyền</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CRow form class="form-group" key="permission">
          <CCol sm="12">
            <CInputCheckbox
              v-for="(permission) in permissions"
              :key="permission.id"
              :label="permission.name"
              :value="permission.id"
              :checked="user.permissions.map(permission => permission.id).includes(permission.id)"
              @update:checked="givePermission"
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
  name: "Permission",
  props: {
    userId: {
      required: true
    }
  },
  data() {
    return {
      permissions: [],
      user: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const userResponse = await services.user.get(this.userId, {
        with: "permissions"
      });
      this.user = userResponse.data;
      const permissionResponse = await services.permission.all();
      this.permissions = permissionResponse.data;
    },
    async givePermission(checked, event) {
      const permissionId = event.target.value;
      const permissionRequest = (await checked)
        ? services.user.givePermission(permissionId, this.userId)
        : services.user.revokePermission(permissionId, this.userId);
      permissionRequest.catch(error => {
        this.toastHttpError(error);
      });
      return permissionRequest;
    }
  }
};
</script>
