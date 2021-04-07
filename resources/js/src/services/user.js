const resource = '/api/users';

export default {
    all(params = null) {
        return axios.get(`${resource}`, { params })
    },
    get(id, params = null) {
        return axios.get(`${resource}/${id}`, { params })
    },
    create(data) {
        return axios.post(`${resource}`, data)
    },
    update(data, id) {
        return axios.put(`${resource}/${id}`, data)
    },
    delete(id) {
        return axios.delete(`${resource}/${id}`)
    },
    giveRole(role, id) {
        return axios.post(`${resource}/${id}/roles/${role}`)
    },
    revokeRole(role, id) {
        return axios.delete(`${resource}/${id}/roles/${role}`)
    },
    givePermission(permission, id) {
        return axios.post(`${resource}/${id}/permissions/${permission}`)
    },
    revokePermission(permission, id) {
        return axios.delete(`${resource}/${id}/permissions/${permission}`)
    },
    import(data) {
        return axios.post(`${resource}/io/import`, data)
    },
    export(params = null) {
        return axios.get(`${resource}/io/export`, {
            params: params,
            responseType: 'blob',
        }).then(response => {
            const blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            const contentDisposition = response.headers['content-disposition'];
            let fileName = 'unknown';
            if (contentDisposition) {
                const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
                if (fileNameMatch.length === 2)
                    fileName = fileNameMatch[1];
            }
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            return response
        })
    },
}
