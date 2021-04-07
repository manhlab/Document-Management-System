<template>
  <div>
    <CRow>
      <CCol col="md-6">
        <CInfo :userId="userId" />
      </CCol>
      <CCol col="md-6">
        <CPassword :userId="userId" />
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
  name: "User",
  components: {
    CInfo,
    CPassword,
    CRole,
    CPermission
  },
  data() {
    return {
      userId: ""
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params && route.params.id) {
          this.userId = route.params.id;
        }
      }
    }
  }
};
</script>
