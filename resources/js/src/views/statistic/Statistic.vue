<template>
  <CCard>
    <CCardHeader>
      <strong>Статистическая</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CRow class="form-group">
          <CCol sm="6">
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Документы</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="statistic.book"
                  :multiple="false"
                  :options="books"
                  :clearable="true"
                  placeholder="Все"
                ></treeselect>
              </template>
            </CFormGroup>
          </CCol>
          <CCol sm="6">
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Вид документа</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="statistic.type"
                  :multiple="false"
                  :options="types"
                  :clearable="true"
                  placeholder="Все"
                ></treeselect>
              </template>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="6">
            <CInput label="с" type="date" :value.sync="statistic.from" class="mb-0" />
          </CCol>
          <CCol sm="6">
            <CInput label="по" type="date" :value.sync="statistic.to" class="mb-0" />
          </CCol>
        </CRow>
        <CRow class="form-group" v-if="false">
          <CCol sm="6">
            <CSelect
              class="mb-0"
              label="Kiểu xuất"
              :options="exportTypes"
              placeholder="Please select"
              :value.sync="statistic.export"
            />
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton size="sm" @click="download" class="float-right" color="success">
        <CIcon name="cil-vertical-align-bottom" />Export
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";
// import the component
import { Treeselect } from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Statistic",
  components: { Treeselect },
  data() {
    return {
      exportTypes: [
        { value: "Xlsx", label: "Xlsx" },
        { value: "Xls", label: "Xls" },
        { value: "Html", label: "Html" }
      ],
      books: [],
      types: [],
      statistic: {
        book: null,
        type: null,
        from: null,
        to: null,
        export: "Xlsx"
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      !this.documentId || this.fetchDocument();
      this.fetchTypes();
      this.fetchBooks();
    },
    async fetchTypes() {
      const typeResponse = await services.documentType.all();
      this.types = this.formatKeys(typeResponse.data, {
        id: "id",
        name: "label"
      });
      return typeResponse;
    },
    async fetchBooks() {
      const bookResponse = await services.book.all();
      this.books = this.formatKeys(bookResponse.data, {
        id: "id",
        name: "label"
      });
      return bookResponse;
    },
    download() {
      services.statistic
        .download(this.statistic)
        .then(response => {
          this.$toast.success("Exported báo cáo");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
