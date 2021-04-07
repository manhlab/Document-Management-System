export default {
    login({ email, password }) {
        return this.csrf().then((response) => {
            return axios.post('/login', {
                email: email,
                password: password
            }).then(response => {
                return this.me()
            })
        })
    },

    csrf() {
        return axios.get('/sanctum/csrf-cookie')
    },

    me(params = null) {
        return axios.get('/api/me', {
            params
        })
    },

    logout() {
        return axios.post('/logout')
    },

    async namePermissions() {
        return await this.me({ with: 'roles.permissions;permissions' }).then(response => {
            const permissionsViaRoles = response.data.roles.map(role => {
                return role.permissions.map(permission => permission.name)
            })

            const directPermissions = response.data.permissions.map(permission => permission.name)

            return _.union([..._.union(...permissionsViaRoles.map(p => p)), ...directPermissions])
        })
    },

    update(data) {
        return axios.put('api/me', data)
    },
}