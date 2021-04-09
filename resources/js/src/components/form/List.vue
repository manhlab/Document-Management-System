<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-grid" />
        {{title}}
        <CButton
          v-if="canCreate"
          size="sm"
          class="float-right"
          color="primary"
          variant="outline"
          v-c-tooltip="'Создать'"
          @click="showCreate"
        >
          <CIcon name="cil-plus" />
        </CButton>
      </CCardHeader>
      <CCardBody class="p-0">
        <CDataTable
          hover
          :loading="loading"
          :items="items"
          :fields="fields"
          @row-clicked="showDetail"
          clickable-rows
          sorter
          column-filter
        ></CDataTable>
      </CCardBody>
    </CCard>
    <CModal :title="title" :show.sync="isShowDetail">
      <CInput
        v-for="field in fields"
        :label="field.label"
        :key="field.key"
        :value.sync="itemUpdating[field.key]"
      />
      <slot v-if="!createMode" name="append-body"></slot>
      <template #footer>
        <CButton
          v-if="canCreate && createMode"
          size="sm"
          class="float-right"
          color="success"
          @click="onClickCreate"
        >
          <CIcon name="cil-plus" /> Создать новый
        </CButton>
        <CButton
          v-if="canUpdate && !createMode"
          size="sm"
          class="float-right"
          color="success"
          @click="onClickSave"
        >
          <CIcon name="cil-check" /> Lưu
        </CButton>
        <CButton
          v-if="canDelete && !createMode"
          size="sm"
          class="float-right"
          color="danger"
          @click="onClickDelete"
        >
          <CIcon name="cil-x" /> Xóa
        </CButton>
      </template>
    </CModal>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    service: {
      required: true,
      type: Object
    },
    title: {
      required: false,
      type: String,
      default: "Список"
    },
    canCreate: {
      required: false,
      type: Boolean,
      default: true
    },
    canUpdate: {
      required: false,
      type: Boolean,
      default: true
    },
    canDelete: {
      required: false,
      type: Boolean,
      default: true
    },
    fields: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      loading: false,
      items: [],
      itemSelected: {},
      itemUpdating: {},
      isShowDetail: false,
      createMode: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.fetchList();
    },
    async fetchList() {
      this.loading = true;
      const response = await this.service.all();
      this.items = response.data;
      this.loading = false;
    },
    showDetail(item) {
      this.$emit("show", item);
      this.createMode = false;
      this.itemSelected = item;
      this.itemUpdating = _.clone(item);
      this.isShowDetail = true;
    },
    onClickSave() {
      this.service
        .update(this.itemUpdating, this.itemSelected.id)
        .then(response => {
          this.isShowDetail = false;
          this.$toast.success("Đã lưu");
          this.fetchList();
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    showCreate() {
      this.createMode = true;
      this.itemUpdating = {};
      this.isShowDetail = true;
    },
    onClickCreate() {
      this.service
        .create(this.itemUpdating)
        .then(response => {
          this.isShowDetail = false;
          this.$toast.success("Đã tạo");
          this.fetchList();
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    onClickDelete() {
      this.service
        .delete(this.itemSelected.id)
        .then(response => {
          this.isShowDetail = false;
          this.$toast.success("Đã xóa");
          this.fetchList();
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
