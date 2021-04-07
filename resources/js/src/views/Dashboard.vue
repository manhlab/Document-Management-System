<template>
  <div>
    <CRow>
      <CCol v-for="book in books" sm="6" md="4" :key="book.id">
        <CWidgetBrand
          color="white"
          :right-header="''+book.unread"
          right-footer="Chưa xem"
          :left-header="''+book.count"
          left-footer="Đã nhận"
        >
          <h3 style="color:#3c4b64" class="m-3">{{book.name}}</h3>
        </CWidgetBrand>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-grid" /> Văn bản gần đây
          </CCardHeader>
          <CCardBody class="p-0">
            <CDataTable
              hover
              striped
              :loading="loading"
              :items="items"
              :fields="fields"
              clickable-rows
              @row-clicked="rowClicked"
            >
              <template #type="{item}">
                <td>{{item.type.name}}</td>
              </template>
              <template #book="{item}">
                <td>{{item.book.name}}</td>
              </template>
              <template #abstract="{item}">
                <td>
                  <label :class="!item.seen ? highlightStyle : ''">{{item.abstract}}</label>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import services from "../services/factory";

export default {
  name: "Dashboard",
  data() {
    return {
      books: [],
      loading: true,
      items: null,
    };
  },
  created() {
    this.init();
  },
  computed: {
    query() {
      return {
        ...this.withQuery,
        ...this.orderQuery,
      };
    },
    withQuery() {
      return {
        with: "book;type",
      };
    },
    orderQuery() {
      return {
        orderBy: "updated_at",
        sortedBy: "desc",
      };
    },
    fields() {
      return [
        { key: "symbol", label: "Số ký hiệu" },
        {
          key: "abstract",
          label: "Trích yếu",
          _classes: "w-50 font-weight-bold",
        },
        { key: "type", label: "Loại" },
        { key: "book", label: "Sổ" },
      ];
    },
    highlightStyle() {
      return "font-weight-bold";
    },
  },
  methods: {
    init() {
      this.fetchBooks();
      this.fetchDocuments();
    },
    async fetchBooks() {
      const bookResponse = await services.book.all();
      this.books = bookResponse.data;
      return bookResponse;
    },
    async fetchDocuments() {
      this.loading = true;
      const response = await services.document.all(this.query);
      this.items = response.data.data;
      this.loading = false;
    },
    rowClicked(item, index) {
      this.$router.push({ path: `/documents/${item.id}` });
    },
  },
};
</script>
