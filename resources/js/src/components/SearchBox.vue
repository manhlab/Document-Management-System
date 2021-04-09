<template>
  <CRow>
    <CCol sm="3">
      <CSelect :options="fields" @update:value="fieldChanged" />
    </CCol>
    <CCol sm="9">
      <CInput placeholder="Искать" :value.sync="value" @update:value="valueChanged" />
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    fields: {
      type: Array,
      default: function () {
        return [{ value: "", label: "Все" }];
      },
    },
  },
  data() {
    return {
      field: String,
      value: "",
      searching: {},
    };
  },
  watch: {
    field: {
      handler(value) {
        this.$emit("fieldChanged", value);
        this.value = value.defaultValue;
        this.fireSearching();
      },
    },
    value: {
      handler(value) {
        this.$emit("valueChanged", value);
        this.fireSearching();
      },
    },
    searching: {
      handler(value) {
        this.$emit("searching", value);
      },
    }
  },
  methods: {
    fieldChanged(field) {
      this.field = this.fields.find((e) => {
        return e.value == field;
      });
    },
    valueChanged(value) {
      this.value = value;
    },
    fireSearching(){
      this.searching = {field: this.field.value, value: this.value};
    }
  },
};
</script>
