<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-grid" />Книга
          <CButton
            size="sm"
            @click="goCreate"
            class="float-right"
            color="primary"
            variant="outline"
            v-c-tooltip="'Создать'"
          >
            <CIcon name="cil-plus" />
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CSearchBox :fields="searchFields" @searching="searching" />
          <CDataTable
            hover
            striped
            :loading="loading"
            :items="items"
            :fields="fields"
            clickable-rows
            @row-clicked="rowClicked"
          >
            <template #publisher="{item}">
              <td>{{item.publisher.name}}</td>
            </template>
            <template #type="{item}">
              <td>{{item.type.name}}</td>
            </template>
            <template #abstract="{item}">
              <td>
                <label :class="!item.seen ? highlightStyle : ''">{{item.abstract}}</label>
              </td>
            </template>
          </CDataTable>
          <CPagination
            align="center"
            :pages="pages"
            :active-page.sync="currentPage"
            :activePage="currentPage"
          />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import services from "../../services/factory";
import CSearchBox from "../../components/SearchBox";

export default {
  name: "Documents",
  components: {
    CSearchBox,
  },
  data() {
    return {
      loading: true,
      items: null,
      currentPage: 1,
      pages: 0,
      size: 0,
      searchValue: "",
      searchField: "symbol",
      bookId: null,
    };
  },
  created() {
    this.fetch();
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params && route.params.book) {
          this.bookId = route.params.book;
        }
        if (route.query && route.query.page) {
          this.currentPage = Number(route.query.page);
        }
      },
    },
    currentPage: {
      handler(page) {
        this.pageChange(page);
        this.currentPage = page;
        this.fetch();
      },
    },
    bookId: {
      handler(page) {
        this.fetch();
      },
    },
  },
  computed: {
    query() {
      return {
        ...this.withQuery,
        ...this.pageQuery,
        ...this.searchQuery,
        ...this.orderQuery,
      };
    },
    orderQuery() {
      return {
        orderBy: "created_at",
        sortedBy: "desc",
      };
    },
    pageQuery() {
      return this.currentPage ? { page: this.currentPage } : {};
    },
    withQuery() {
      return {
        with: "publisher;type",
      };
    },
    searchQuery() {
      return {
        search:
          `book.id:${this.bookId}` +
          (this.searchField && this.searchValue != null
            ? ";" + (this.searchField + ":" + this.searchValue)
            : ""),
        searchJoin: "and",
      };
    },
    isDocumentsIncome() {
      return this.bookId == 1;
    },
    fields() {
      return [
        { key: "symbol", label: "Номер регистрации" },
        {
          key: "abstract",
          label: "Краткое содержание",
          _classes: "w-50 font-weight-bold",
        },
        { key: "type", label: "Тип документа" },
        { key: "publisher", label: "Место выдачи" },
        {
          key: "effective_at",
          label: this.isDocumentsIncome ? "Дата получения" : "Дата выдачи",
        },
      ];
    },
    searchFields() {
      return [
        { value: "symbol", label: "Номер регистрации" },
        { value: "abstract", label: "Краткое содержание" },
        { value: "type.name", label: "Тип документа" },
        { value: "signer.name", label: "Подписал" },
        {
          value: "effective_at",
          label: this.isDocumentsIncome ? "Дата получения" : "Дата выдачи",
        },
        { value: "sign_at", label: "Дата подписания" },
        { value: "publisher.name", label: "Место выдачи" },
        { value: "organizes.name", label: "Место получения" },
        { value: "linkTo.symbol", label: "Разрешении входящие документы" },
        { value: "receivers.seen", label: "Непрочитанные", defaultValue: 0 },
      ];
    },
    highlightStyle() {
      return "font-weight-bold";
    },
  },
  methods: {
    async fetch() {
      this.loading = true;
      const response = await services.document.all(this.query);
      this.items = response.data.data;
      // this.items = response.data.data.map(item => {
      //   item["_classes"] = 'bg-success';
      //   return item;
      // });

      this.currentPage = response.data.current_page;
      this.pages = response.data.last_page;
      this.loading = false;
    },
    rowClicked(item, index) {
      this.$router.push({ path: `/documents/${item.id}` });
    },
    goCreate() {
      this.$router.push({
        path: `/documents/create`,
        query: { book: this.bookId },
      });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
    searching(payload) {
      this.searchField = payload.field;
      this.searchValue = payload.value;
      this.fetch();
    },
  },
};
</script>
