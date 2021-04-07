<template>
  <CRow class="form-group">
    <CCol sm="12">
      <label>Phân theo nhóm</label>
      <treeselect
        @select="addRole"
        @deselect="removeRole"
        v-model="roles"
        :multiple="true"
        :options="roleOptions"
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
  name: "TreeRole",
  props: {
    userId: {
      required: true
    }
  },
  components: { Treeselect },
  data() {
    return {
      roleOptions: [],
      roles: []
    };
  },
  created() {
    this.fetchRoles();
    this.fetchCurrentRoles();
  },
  methods: {
    async fetchRoles() {
      const roleResponse = await services.role.all();
      this.roleOptions = this.formatKeys(roleResponse.data, {
        id: "id",
        name: "label"
      });
      return roleResponse;
    },
    async fetchCurrentRoles() {
      const userResponse = await services.user.get(this.userId, {
        with: "roles"
      });
      this.roles = userResponse.data.roles.map(role => role.id);
    },
    addRole(role) {
      services.user.giveRole(role.id, this.userId).catch(error => {
        this.toastHttpError(error);
      });
    },
    removeRole(role) {
      services.user.revokeRole(role.id, this.userId).catch(error => {
        this.toastHttpError(error);
      });
    }
  }
};
</script>
