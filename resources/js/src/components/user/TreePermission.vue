<template>
  <CRow class="form-group">
    <CCol sm="12">
      <label>По функциям</label>
      <treeselect
        @select="addPermission"
        @deselect="removePermission"
        v-model="permissions"
        :multiple="true"
        :options="permissionOptions"
        :clearable="false"
      ></treeselect>
    </CCol>
  </CRow>
</template>

<script>
import services from "../../services/factory";

// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "TreePermission",
  props: {
    userId: {
      required: true
    }
  },
  components: { Treeselect },
  data() {
    return {
      permissionOptions: [],
      permissions: []
    };
  },
  created() {
    this.fetchPermissions();
    this.fetchCurrentPermissions();
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
    async fetchCurrentPermissions() {
      const userResponse = await services.user.get(this.userId, {
        with: "permissions"
      });
      this.permissions = userResponse.data.permissions.map(
        permission => permission.id
      );
    },
    addPermission(permission) {
      services.user.givePermission(permission.id, this.userId).catch(error => {
        this.toastHttpError(error);
      });
    },
    removePermission(permission) {
      services.user
        .revokePermission(permission.id, this.userId)
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
