<template>
  <CRow>
    <CCol col="md-8">
      <CFormList :service="service" :fields="fields" :title="title" />
    </CCol>
  </CRow>
</template>

<script>
import services from "../../services/factory";
import CFormList from "../../components/form/List";

export default {
  name: "Departments",
  components: {
    CFormList
  },
  data() {
    return {
      fields: [
        { key: "id", label: "Mã" },
        { key: "name", label: "Tên" },
        { key: "tel", label: "Số điện thoại" }
      ],
      service: services.department,
      title: "Phòng ban"
    };
  }
};
</script>
