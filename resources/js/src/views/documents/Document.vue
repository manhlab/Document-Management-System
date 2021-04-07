<template>
  <div>
    <CDetail :documentId.sync="documentId" @update="onUpdateDetail" />
    <CAttachments :documentId.sync="documentId" />
    <CReceivers v-if="!isDocumentOutcome" :documentId.sync="documentId" />
    <CRecipients v-if="isDocumentOutcome" :documentId.sync="documentId" />
    <CLinkDocument :isOutcome="isDocumentOutcome" :documentId.sync="documentId" @redirectTo="redirectTo" />
  </div>
</template>

<script>
import services from "../../services/factory";
import CDetail from "../../components/document/Detail";
import CAttachments from "../../components/document/Attachments";
import CReceivers from "../../components/document/Receivers";
import CRecipients from "../../components/document/Recipients";
import CLinkDocument from "../../components/document/CLinkDocument";

export default {
  name: "Document",
  components: {
    CDetail,
    CAttachments,
    CReceivers,
    CRecipients,
    CLinkDocument,
  },
  data() {
    return {
      documentId: "",
      document: {}
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params && route.params.document) {
          this.documentId = route.params.document;
          this.init();
        }
      }
    },
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      this.fetch()
    },
    async fetch() {
      const documentResponse = await services.document.get(this.documentId).catch(error => {
        this.toastHttpError(error);
        this.goBack()
      });
      this.document = documentResponse.data;
    },
    rowClicked(item, index) {
      this.$router.push({ path: `/documents/${item.id}` });
    },
    onUpdateDetail(document) {
      this.document = document;
    },
    redirectTo(id){
      this.$router.push({ path: `/documents/${id}` });
    },
    goBack() {
      this.$router.go(-1)
    },
  },
  computed: {
    isDocumentOutcome() {
      return this.document.book_id == 2;
    }
  }
};
</script>
