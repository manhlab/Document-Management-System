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
        src="data:image/png;base64,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"
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
        name: 'Trang chủ',
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
            _children: ["Sổ văn bản"]
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
          _children: ["Điều hành"]
        },
        {
          _name: "CSidebarNavItem",
          name: "Thống kê",
          to: "/statistic",
          icon: "cil-notes",
          permission: "Báo cáo thống kê"
        }
      ],
      system: [
        {
          _name: "CSidebarNavTitle",
          _children: ["Hệ thống"]
        },
        {
          _name: "CSidebarNavItem",
          name: "Người dùng",
          to: "/users",
          icon: "cil-people",
          permission: "Quản lý người dùng"
        },
        {
          _name: "CSidebarNavItem",
          name: "Chức danh",
          to: "/titles",
          icon: "cil-contact",
          permission: "Quản lý chức danh"
        },
        {
          _name: "CSidebarNavItem",
          name: "Phòng ban",
          to: "/departments",
          icon: "cil-lan",
          permission: "Quản lý phòng ban"
        },
        {
          _name: "CSidebarNavItem",
          name: "Người ký",
          to: "/signers",
          icon: "cil-touch-app",
          permission: "Quản lý người ký"
        },
        {
          _name: "CSidebarNavItem",
          name: "Nơi ban hành",
          to: "/publishers",
          icon: "cil-institution",
          permission: "Quản lý nơi ban hành"
        },
        {
          _name: "CSidebarNavItem",
          name: "Loại văn bản",
          to: "/document-types",
          icon: "cil-text-size",
          permission: "Quản lý loại văn bản"
        },
        {
          _name: "CSidebarNavItem",
          name: "Sổ văn bản",
          to: "/books",
          icon: "cil-book",
          permission: "Quản lý sổ văn bản"
        },
        {
          _name: "CSidebarNavItem",
          name: "Nhóm",
          to: "/roles",
          icon: "cil-address-book",
          permission: "Quản lý nhóm"
        },
        {
          _name: "CSidebarNavItem",
          name: "Quyền",
          to: "/permissions",
          icon: "cil-lock-locked",
          permission: "Quản lý quyền"
        },
        {
          _name: "CSidebarNavItem",
          name: "Hướng dẫn",
          to: "/help",
          icon: "cil-touch-app"
        },
        {
          _name: "CSidebarNavItem",
          name: "Cài đặt",
          to: "/settings",
          icon: "cil-settings"
        }
      ]
    };
  }
};
</script>
