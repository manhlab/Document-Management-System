<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon
        class="c-sidebar-brand-full"
        src="data:image/png;base64,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bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wNC0wNzwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD42MzkyMTAzNS1hZmE5LTQxZDItOWM3Zi0wMTJlYmM4NTkxMjY8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+UkFDQSBIQU1BPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+QNGCbQAAAABJRU5ErkJggg=="
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction :key="RFKey" flat :content-to-render="$options.nav" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from "./_nav";
import services from "../services/factory";

export default {
  name: "TheSidebar",
  nav,
  created() {
    this.init();
  },
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
    dashboard() {
      return {
        _name: 'CSidebarNavItem',
        name: 'Домашняя страница',
        to: '/dashboard',
        icon: 'cil-home',
      }
    },
  },
  methods: {
    async init() {
      const books = await this.fetchDocument();
      const system = await this.fetchSystem();
      const operating = await this.fetchOperating();
      this.$options.nav[0]._children = [this.dashboard , ...books, ...operating, ...system];
      this.RFKey += 1;
    },

    async fetchDocument() {
      return await services.book.all().then(response => {
        return [
          {
            _name: "CSidebarNavTitle",
            _children: ["Документы"]
          },
          ...response.data.map(item => {
            return {
              _name: "CSidebarNavItem",
              name: item.name,
              to: `/books/${item.id}/documents`,
              icon: "cil-notes"
            };
          })
        ];
      });
    },

    async fetchSystem() {
      return await services.auth.namePermissions().then(permissions => {
        return this.system.filter(item => {
          return !!item.permission
            ? permissions.includes(item.permission)
            : true;
        });
      });
    },

    async fetchOperating() {
      return await services.auth.namePermissions().then(permissions => {
        return this.operating.filter(item => {
          return !!item.permission
            ? permissions.includes(item.permission)
            : true;
        });
      });
    }
  },
  data() {
    return {
      RFKey: 0, // key for rerender sidebar
      operating: [
        {
          _name: "CSidebarNavTitle",
          _children: ["Разрешении"]
        },
        {
          _name: "CSidebarNavItem",
          name: "Статистическая",
          to: "/statistic",
          icon: "cil-notes",
          permission: "Статистическая"
        }
      ],
      system: [
        {
          _name: "CSidebarNavTitle",
          _children: ["Система"]
        },
        {
          _name: "CSidebarNavItem",
          name: "Пользователь",
          to: "/users",
          icon: "cil-people",
          permission: "Разрешении пользователь"
        },
        {
          _name: "CSidebarNavItem",
          name: "Должность",
          to: "/titles",
          icon: "cil-contact",
          permission: "Разрешении должность"
        },
        {
          _name: "CSidebarNavItem",
          name: "Подразделение",
          to: "/departments",
          icon: "cil-lan",
          permission: "Разрешении подразделение"
        },
        {
          _name: "CSidebarNavItem",
          name: "Подписал",
          to: "/signers",
          icon: "cil-touch-app",
          permission: "Разрешении подписал"
        },
        {
          _name: "CSidebarNavItem",
          name: "Место выдачи",
          to: "/publishers",
          icon: "cil-institution",
          permission: "Разрешении место выдачи"
        },
        {
          _name: "CSidebarNavItem",
          name: "Вид документа",
          to: "/document-types",
          icon: "cil-text-size",
          permission: "Разрешении вид документа"
        },
        {
          _name: "CSidebarNavItem",
          name: "Документы",
          to: "/books",
          icon: "cil-book",
          permission: "Разрешении книги"
        },
        {
          _name: "CSidebarNavItem",
          name: "Группа",
          to: "/roles",
          icon: "cil-address-book",
          permission: "Разрешении группа"
        },
        {
          _name: "CSidebarNavItem",
          name: "Разрешение",
          to: "/permissions",
          icon: "cil-lock-locked",
          permission: "Разрешении разрешение"
        },
        {
          _name: "CSidebarNavItem",
          name: "Интрукция",
          to: "/help",
          icon: "cil-touch-app"
        },
        {
          _name: "CSidebarNavItem",
          name: "Настройки",
          to: "/settings",
          icon: "cil-settings"
        }
      ]
    };
  }
};
</script>
