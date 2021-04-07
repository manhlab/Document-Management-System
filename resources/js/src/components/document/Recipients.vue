<template>
  <CCard>
    <CCardHeader>
      <strong>Nơi nhận</strong>
    </CCardHeader>
    <CCardBody>
      <CRow class="form-group">
        <CCol sm="12">
          <treeselect
            v-model="organizes"
            :multiple="true"
            :options="organizeOptions"
            :clearable="false"
            @select="addRecipient"
            @deselect="removeRecipient"
          ></treeselect>
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
  name: "Recipients",
  props: {
    documentId: {
      required: true
    }
  },
  components: { Treeselect },
  data() {
    return {
      // define the default value
      organizes: [],
      // define options
      organizeOptions: []
    };
  },
  watch: {
    documentId: {
      handler() {
        this.init();
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.fetchOrganizes();
      this.fetchRecipients();
    },
    async fetchOrganizes() {
      const organizesResponse = await services.publisher.all();
      const organizes = this.formatKeys(organizesResponse.data, {
        id: "id",
        name: "label"
      });
      this.organizeOptions = organizes;
      return organizes;
    },
    async fetchRecipients() {
      const recipientResponse = await services.document.get(this.documentId , {
        with: 'organizes'
      });
      this.organizes = recipientResponse.data.organizes.map(organize => organize.id);
      return recipientResponse;
    },
    addRecipient(item) {
      services.document
        .assignRecipients(this.documentId, [item.id])
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    removeRecipient(item) {
      services.document
        .unassignRecipients(this.documentId, [item.id])
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
