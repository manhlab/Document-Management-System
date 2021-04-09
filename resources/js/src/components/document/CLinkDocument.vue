<template>
  <CCard>
    <CCardHeader>
      <strong>Связанный документ</strong>
    </CCardHeader>
    <CCardBody>
      <CRow class="form-group">
        <CCol v-if="isOutcome" sm="12">
          <label>Inbox</label>
          <treeselect
            v-model="linkToDocument"
            :multiple="false"
            :options="documents"
            @search-change="fetchDocuments"
            @select="linkTo"
            @input="unLinkTo"
          >
            <div
              slot="option-label"
              slot-scope="{ node }"
            >{{ node.raw.label + ' - ' + node.raw.abstract || getSymbol(node.raw.id) }}</div>
          </treeselect>
        </CCol>
        <CCol v-else sm="12">
          <label>Список документа</label>
          <treeselect
            v-model="documentsLinked"
            :options="linkedDocuments"
            :multiple="true"
            :openOnClick="false"
            :clearable="false"
            disabled
            placeholder
          >
            <CButton
              @click="redirectToDocument(node.raw.id)"
              class="btn-link p-0"
              slot="value-label"
              size="sm"
              variant="ghost"
              slot-scope="{ node }"
            >{{ node.raw.label }}</CButton>
          </treeselect>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</template>

<script>
import services from "../../services/factory";

// import the component
import { Treeselect, ASYNC_SEARCH } from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "CLinkDocument",
  props: {
    documentId: {
      required: true
    },
    isOutcome: {
      type: Boolean,
      default: false
    }
  },
  components: { Treeselect },
  data() {
    return {
      // define the default value
      linkToDocument: null,
      documentsLinked: [],
      // define options
      documents: [],
      linkedDocuments: [],
      document: {}
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
      this.fetchDocuments();
      this.fetchDocument();
    },
    async fetchDocument() {
      const documentResponse = await services.document.get(this.documentId, {
        with: "linkTo;linked"
      });
      this.document = documentResponse.data;
      this.linkToDocument = this.document.link_to
        ? this.document.link_to.id
        : null;
      this.documents.push(this.linkToDocument);
      this.linkedDocuments = this.formatKeys(this.document.linked, {
        id: "id",
        symbol: "label"
      });
      this.documentsLinked = this.document.linked.map(d => d.id);
    },
    fetchDocuments(query = "") {
      const documentsResponse = services.document
        .all({ search: `symbol:${query};book_id:1`, searchJoin: "and", orderBy: "created_at", sortedBy: "desc", })
        .then(response => {
          const documents = this.formatKeys(response.data.data, {
            id: "id",
            symbol: "label"
          });
          this.documents = documents;
        });
    },
    getSymbol(id) {
      this.fetchSymbol(id);
      return "Нет права доступ";
    },
    async fetchSymbol(id) {
      const response = await services.document.get(id);
      if (!response.data.id) return;
      const document = {
        id: response.data.id,
        label: response.data.symbol
      };
      if (this.documents.map(item => item.id).includes(document.id)) return;
      this.documents.push(document);
    },
    linkTo(document) {
      services.document
        .update({ link_id: document.id }, this.documentId)
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    unLinkTo(document) {
      if(document === undefined){
        services.document
          .update({ link_id: null }, this.documentId)
          .catch(error => {
            this.toastHttpError(error);
          });
      }
    },
    redirectToDocument(id) {
      this.$emit("redirectTo", id);
    }
  }
};
</script>
