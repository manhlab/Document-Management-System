const resource = '/api/attachments';

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
    download(id, filename) {
        return axios.get(`/api/download/attachments/${id}`, {
            responseType: 'blob',
        }).then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', filename);
            document.body.appendChild(fileLink);

            fileLink.click();

            return response
        });
    }
}
