<template>
  <div>
    <CRow>
      <CCol col="md-6">
        <CInfo :userId="userId" :isMe="true" />
      </CCol>
      <CCol col="md-6">
        <CPassword :userId="userId" :isMe="true" />
      </CCol>
    </CRow>
    <CCard>
      <CCardHeader>
        <strong>Phân quyền</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol col="6">
            <CRole :userId="userId" />
          </CCol>
          <CCol col="6">
            <CPermission :userId="userId" />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import CInfo from "../../components/user/Info";
import CPassword from "../../components/user/Password";
import CRole from "../../components/user/TreeRole";
import CPermission from "../../components/user/TreePermission";

export default {
  name: "Me",
  components: {
    CInfo,
    CPassword,
    CRole,
    CPermission
  },
  data() {
    return {
      userId: this.$store.getters["auth/userId"]
    };
  }
};
</script>
