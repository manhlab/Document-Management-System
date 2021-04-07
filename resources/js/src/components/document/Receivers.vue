<template>
  <CCard>
    <CCardHeader>
      <strong>Người nhận</strong>
      <CBadge
        color="success"
        class="float-right"
        v-c-tooltip="{ content: 'Đã xem' }"
        >{{ seenReceivers.length }}</CBadge
      >
    </CCardHeader>
    <CCardBody>
      <CRow class="form-group">
        <CCol sm="12">
          <!-- <label>Chọn xem</label> -->
          <treeselect
            @select="addViewer"
            @deselect="removeViewer"
            :normalizer="normalizer"
            v-model="viewers"
            :multiple="true"
            :options="viewerOptions"
            :clearable="false"
          >
            <div
              slot="value-label"
              slot-scope="{ node }"
              :class="seenStyle(node.raw.id)"
            >{{ node.raw.name }}</div>
          </treeselect>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</template>

<script>
import services from "../../services/factory";

// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Receivers",
  props: {
    documentId: {
      required: true,
    },
  },
  components: { Treeselect },
  data() {
    return {
      // define the default value
      viewers: [],
      // define options
      viewerOptions: [],
      seenReceivers: [],
    };
  },
  watch: {
    documentId: {
      handler() {
        this.init();
      },
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.fetchDepartments(), this.fetchViewers();
    },
    async fetchDepartments() {
      const departmentResponse = await services.department.all({
        with: "users",
      });
      const departments = departmentResponse.data;
      this.viewerOptions = departments;
      return departments;
    },
    async fetchViewers() {
      const receivers = await this.fetchReceivers();
      this.viewers = receivers.map((receiver) => receiver.id);
      this.seenReceivers = receivers
        .filter((receiver) => receiver.pivot.seen)
        .map((receiver) => receiver.id);
      return receivers;
    },
    async fetchReceivers() {
      const receiversResponse = await services.document.get(this.documentId, {
        with: "receivers",
      });
      const receivers = receiversResponse.data.receivers;
      this.handlerOptions = receivers;
      return receivers;
    },
    removeViewer(item) {
      var viewerIds = [item.id];
      if(item.users){
        viewerIds = item.users.map(u => u.id)
      }
      services.document
        .unassignReceivers(this.documentId, viewerIds)
        .then((response) => {
          this.fetchReceivers();
        })
        .catch((error) => {
          this.toastHttpError(error);
        });
    },
    addViewer(item) {
      var viewerIds = [item.id];
      if(item.users){
        viewerIds = item.users.map(u => u.id)
      }
      services.document
        .assignReceivers(this.documentId, viewerIds)
        .then((response) => {
          this.fetchReceivers();
        })
        .catch((error) => {
          this.toastHttpError(error);
        });
    },
    seenStyle(userId) {
      return this.seenReceivers.includes(userId) ? "seen" : null;
    },
    normalizer(node) {
      return {
        id: node.id,
        label: node.name,
        [node.users == undefined
          ? ""
          : node.users.length > 0
          ? "children"
          : ""]: node.users,
      };
    },
  },
};
</script>

<style scoped>
.seen {
  color: #2eb85c;
}
</style>