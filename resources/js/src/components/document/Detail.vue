<template>
  <CCard>
    <CCardHeader>
      <strong v-if="documentId">О документе</strong>
      <strong v-else>Создать документ</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CRow class="form-group">
          <CCol sm="6">
            <CSelect
              class="mb-0"
              label="Документы"
              :options="books"
              :value.sync="document.book_id"
              placeholder="Please select"
            />
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
                  v-model="document.type_id"
                  :multiple="false"
                  :options="types"
                  :clearable="false"
                ></treeselect>
              </template>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="12">
            <CInput label="Номер регистрации" :value.sync="document.symbol" class="mb-0" />
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="6">
            <CInput label="Автор" :value="document.creator.name" readonly class="mb-0" />
          </CCol>
          <CCol sm="6">
            <CInput label="Автор ID" :value="document.creator.name" readonly class="mb-0" />
          </CCol>
        </CRow>
        <CTextarea
          label="Краткое содержание"
          placeholder="Content..."
          rows="5"
          :value.sync="document.abstract"~
        />
        <CRow class="form-group">
          <CCol sm="6">
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Место выдачи</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="document.publisher_id"
                  :multiple="false"
                  :options="publishers"
                  :clearable="false"
                ></treeselect>
              </template>
            </CFormGroup>
          </CCol>
          <CCol sm="6">
            <CInput
              :label="isIncome ? 'Дата получения' : 'Дата выдачи'"
              type="date"
              :value.sync="document.effective_at"
              class="mb-0"
            />
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="6">
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Подписал</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="document.signer_id"
                  :multiple="false"
                  :options="signers"
                  :clearable="false"
                >
                  <label
                    slot="option-label"
                    slot-scope="{ node }"
                  >{{ node.raw.description ? node.raw.label + ' - ' + node.raw.description : node.raw.label }}</label>
                </treeselect>
              </template>
            </CFormGroup>
          </CCol>
          <CCol sm="6">
            <CInput label="Дата подписания" type="date" :value.sync="document.sign_at" class="mb-0" />
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton
        v-if="documentId"
        size="sm"
        @click="updateDocument"
        class="float-right"
        color="success"
      >
        <CIcon name="cil-check" />Сохранить
      </CButton>
      <CButton v-else size="sm" @click="createDocument" class="float-right" color="success">
        <CIcon name="cil-plus" />Создать
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
  name: "Detail",
  props: {
    documentId: {
      required: false
    }
  },
  components: { Treeselect },
  data() {
    return {
      books: [],
      types: [],
      signers: [],
      writers: [],
      publishers: [],
      document: {
        book_id: null,
        type_id: null,
        symbol: null,
        writer_id: null,
        abstract: null,
        publisher_id: null,
        effective_at: null,
        signer_id: null,
        sign_at: null,
        creator: {
          id: this.$store.state.auth.currentUser.id,
          name: this.$store.state.auth.currentUser.name
        },
        writer: {}
      }
    };
  },
  watch: {
    documentId: {
      handler() {
        this.init();
      }
    },
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.book) {
          this.document.book_id = Number.parseInt(route.query.book);
        }
      }
    }
  },
  computed: {
    isIncome() {
      return this.document.book_id == 1;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      !this.documentId || this.fetchDocument();
      this.fetchTypes();
      this.fetchBooks();
      this.fetchPublishers();
      this.fetchSigners();
      this.fetchWriters();
    },
    async fetchDocument() {
      const documentResponse = await services.document.get(this.documentId, {
        with: "creator;writer"
      });
      this.document = documentResponse.data;
      return documentResponse.data;
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
      this.books = this.formatKeys(bookResponse.data);
      return bookResponse;
    },
    async fetchPublishers() {
      const publisherResponse = await services.publisher.all();
      this.publishers = this.formatKeys(publisherResponse.data, {
        id: "id",
        name: "label"
      });
      return publisherResponse;
    },
    async fetchSigners() {
      const signerResponse = await services.signer.all();
      this.signers = this.formatKeys(signerResponse.data, {
        id: "id",
        name: "label"
      });
      return signerResponse;
    },
    async fetchWriters(query = "") {
      const writersResponse = await services.user.all({
        search: `name:${query}`,
        with: "department"
      });
      this.writers = this.formatKeys(writersResponse.data.data, {
        id: "id",
        name: "label"
      });
      if (
        !this.writers.map(item => item.id).includes(this.document.writer_id) &&
        this.document.writer
      ) {
        this.writers.push({
          id: this.document.writer.id,
          label: this.document.writer.name
        });
      }
      return writersResponse;
    },
    async updateDocument() {
      await services.document
        .update(this.document, this.documentId)
        .then(response => {
          this.$toast.success("Сохранено");
          this.$emit("update", response.data);
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    createDocument() {
      services.document
        .create(this.document)
        .then(response => {
          this.$router.push({ path: `/documents/${response.data.id}` });
          this.$toast.success("Уже создал документ");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    onClearWriter(value) {
      if (value != undefined) return;
      this.document.writer_id = null;
    }
  }
};
</script>