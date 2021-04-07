<template>
  <div>
    <div class="card">
      <div class="card-header">
        CKEditor
      </div>
      <div class="card-body">
        <ckeditor :editor="editor" @ready="onReady" v-model="editorData"></ckeditor>
      </div>
    </div>
  </div>
</template>

<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

export default {
  name: 'CKEditor',
  data() {
      return {
        editor: DecoupledEditor,
        editorData: '',
      }
  },
  methods: {
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
    }
  }
}
</script>
