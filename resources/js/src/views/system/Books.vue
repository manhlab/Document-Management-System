<template>
  <CRow>
    <CCol col="md-6">
      <CFormList :service="service" :fields="fields" :title="title" />
    </CCol>
  </CRow>
</template>

<script>
import services from "../../services/factory";
import CFormList from "../../components/form/List";

export default {
  name: "Books",
  components: {
    CFormList
  },
  data() {
    return {
      fields: [
        { key: "id", label: "Код" },
        { key: "name", label: "Имя" }
      ],
      service: services.book,
      title: "Документы"
    };
  }
};
</script>
