<template>
  <CRow>
    <CCol col="md-6">
      <CFormList
        :service="service"
        :fields="fields"
        :title="title"
        @show="fetchRolePermissions"
      >
        <template #append-body>
          <label>Quyền</label>
          <treeselect
            @select="addPermission"
            @deselect="removePermission"
            v-model="permissions"
            :multiple="true"
            :options="permissionOptions"
            :clearable="false"
          ></treeselect>
        </template>
      </CFormList>
    </CCol>
  </CRow>
</template>

<script>
import services from "../../services/factory";
import CFormList from "../../components/form/List";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Groups",
  components: {
    CFormList,
    Treeselect,
  },
  data() {
    return {
      fields: [
        { key: "id", label: "Mã" },
        { key: "name", label: "Tên" },
      ],
      service: services.role,
      title: "Nhóm",
      permissionOptions: [],
      permissions: [],
      role: {}
    };
  },
  created() {
    this.fetchPermissions();
  },
  methods: {
    async fetchPermissions() {
      const permissionResponse = await services.permission.all();
      this.permissionOptions = this.formatKeys(permissionResponse.data, {
        id: "id",
        name: "label"
      });
      return permissionResponse;
    },
    async fetchRolePermissions(role) {
      this.role = role;
      const roleResponse = await services.role.get(role.id, {
        with: "permissions"
      });
      this.permissions = roleResponse.data.permissions.map(
        permission => permission.id
      );
    },
    addPermission(permission) {
      services.role.givePermission(permission.id, this.role.id).catch(error => {
        this.toastHttpError(error);
      });
    },
    removePermission(permission) {
      services.role.revokePermission(permission.id, this.role.id).catch(error => {
        this.toastHttpError(error);
      });
    }
  },
};
</script>
