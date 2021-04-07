<template>
  <CCard>
    <CCardHeader>
      <strong>Tệp đính kèm</strong>
    </CCardHeader>
    <CCardBody>
      <CDataTable :loading="loading" :items="attachments" :fields="fields">
        <template #id="{item, index}">
          <td>
            <CButton size="sm" @click="downloadAttachment(item)" variant="outline" color="primary">
              <CIcon name="cil-cloud-download" />
            </CButton>
            <CButton
              size="sm"
              @click="deleteAttachment(item.id, index)"
              variant="outline"
              color="danger"
            >
              <CIcon name="cil-remove" />
            </CButton>
          </td>
        </template>
      </CDataTable>
      <CInputFile custom v-on:change="handleFileUpload" />
    </CCardBody>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Attachments",
  props: {
    documentId: {
      required: true
    }
  },
  data() {
    return {
      loading: true,
      fields: [
        { key: "name", label: "Tên", _classes: "w-50" },
        { key: "size", label: "Kích thước (KB)" },
        { key: "downloads", label: "Lượt tải" },
        { key: "id", label: "Hành động" }
      ],
      attachments: [
        {
          id: "",
          name: "",
          size: 0,
          downloads: 0
        }
      ],
      file: {}
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
    init() {
      this.fetch();
    },
    async fetch() {
      const attachmentResponse = await services.attachment.all({
        search: `document_id:${this.documentId}`
      });
      this.attachments = this.formatKeys(attachmentResponse.data, {
        id: "id",
        name: "name"
      });
      this.loading = false;
    },
    downloadAttachment(item) {
      services.attachment
        .download(item.id, item.name)
        .then(response => {
          item.downloads++;
          this.$toast.success("Đã tải xuống");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    deleteAttachment(id, index) {
      services.attachment
        .delete(id)
        .then(response => {
          this.attachments.splice(index, 1);
          this.$toast.success("Đã xóa");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    handleFileUpload(files, e) {
      this.file = files[0];
      this.uploadAttachment();
    },
    uploadAttachment() {
      let formData = new FormData();
      formData.append("attachments", this.file);
      formData.append("document_id", this.documentId);
      services.attachment
        .create(formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.attachments.push(response.data);
          this.$toast.success("Đã tải lên");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
