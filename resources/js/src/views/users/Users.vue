<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-grid" />Список пользавателя
          <CButton
            size="sm"
            @click="createUser"
            class="float-right"
            color="primary"
            variant="outline"
            v-c-tooltip="'Создать новый'"
          >
            <CIcon name="cil-user-follow" />
          </CButton>
          <CButton
            size="sm"
            @click="downloadExport"
            class="float-right mr-2"
            color="primary"
            variant="outline"
            v-c-tooltip="'Export'"
          >
            <CIcon name="cil-vertical-align-bottom" />
          </CButton>
          <CButton
            size="sm"
            @click="onClickImport"
            class="float-right mr-2"
            color="primary"
            variant="outline"
            v-c-tooltip="'Import'"
          >
            <CIcon name="cil-vertical-align-top" />
          </CButton>
          <CInputFile hidden id="fileimport" accept=".Xlsx" @change="upload" />
        </CCardHeader>
        <CCardBody>
          <CSearchBox
            :fields="searchFields"
            @fieldChanged="searchFieldChanged"
            @valueChanged="searchValueChanged"
          />
          <CDataTable
            hover
            striped
            :loading="loading"
            :items="items"
            :fields="fields"
            clickable-rows
            @row-clicked="rowClicked"
          >
            <template #title="{item}">
              <td>{{item.title ? item.title.name : 'Неопределено'}}</td>
            </template>
            <template #department="{item}">
              <td>{{item.department ? item.department.name : 'Неопределено'}}</td>
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
  name: "Users",
  components: {
    CSearchBox
  },
  data() {
    return {
      loading: true,
      items: null,
      fields: [
        { key: "id", label: "Код" },
        { key: "name", label: "Имя", _classes: "font-weight-bold" },
        { key: "email", label: "Email" },
        { key: "tel", label: "Номер телефон" },
        { key: "title", label: "Должность" },
        { key: "department", label: "Подразделение" }
      ],
      searchFields: [
        { value: "", label: "Все" },
        { value: "id", label: "Код" },
        { value: "name", label: "Имя" },
        { value: "email", label: "Email" },
        { value: "tel", label: "Номер телефон" },
        { value: "birthday", label: "Дата рождения" },
        { value: "title.name", label: "Должность" },
        { value: "department.name", label: "Подразделение" },
        { value: "created_at", label: "Дата создания" }
      ],
      currentPage: 1,
      pages: 0,
      size: 0,
      searchValue: "",
      searchField: ""
    };
  },
  created() {
    this.fetch();
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.page) {
          this.currentPage = Number(route.query.page);
        }
      }
    },
    currentPage: {
      handler(page) {
        this.pageChange(page);
        this.currentPage = page;
        this.fetch();
      }
    }
  },
  computed: {
    query() {
      return {
        ...this.withQuery,
        ...this.pageQuery,
        ...this.searchQuery,
        ...this.orderQuery
      };
    },
    orderQuery() {
      return {
        orderBy: "created_at",
        sortedBy: "desc"
      };
    },
    pageQuery() {
      return this.currentPage ? { page: this.currentPage } : {};
    },
    withQuery() {
      return {
        with: "title;department"
      };
    },
    searchQuery() {
      return this.searchValue
        ? {
            search: this.searchValue,
            searchFields: this.searchField || ''
          }
        : {};
    }
  },
  methods: {
    async fetch() {
      this.loading = true;
      const response = await services.user.all(this.query);
      this.items = response.data.data;
      this.currentPage = response.data.current_page;
      this.pages = response.data.last_page;
      this.loading = false;
    },
    rowClicked(item, index) {
      this.$router.push({ path: `users/${item.id}` });
    },
    createUser() {
      this.$router.push({ path: `users/create` });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
    searchFieldChanged(item) {
      this.searchField = item.value;
      this.fetch();
    },
    searchValueChanged(value) {
      this.searchValue = value;
      this.fetch();
    },
    onClickImport() {
      document.getElementById("fileimport").click();
    },
    upload(files) {
      this.loading = true;
      let file = files[0];
      let formData = new FormData();
      formData.append("data", file);
      services.user
        .import(formData)
        .then(response => {
          this.$toast.success("Đã nhập thành công");
          this.fetch();
        })
        .catch(error => {
          this.toastHttpError(error);
          this.loading = false;
        });
    },
    downloadExport() {
      services.user
        .export({
          export: "Xlsx",
          search: this.searchValue,
          searchFields: this.searchField
        })
        .then(response => {
          this.$toast.success("Exported");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
