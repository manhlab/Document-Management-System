const resource = '/api/documents';

export default {
    all(params = null){
        return axios.get(`${resource}`, { params })
    },
    get(id, params = null){
        return axios.get(`${resource}/${id}`, { params })
    },
    create(data){
        return axios.post(`${resource}`, data)
    },
    update(data, id){
        return axios.put(`${resource}/${id}`, data)
    },
    delete(id){
        return axios.delete(`${resource}/${id}`)
    },
    assignReceivers(id, receiverIds){
        return this.update({
            action: 'attach',
            params: JSON.stringify(["receivers", ...receiverIds])
        }, id);
    },
    unassignReceivers(id, receiverIds){
        return this.update({
            action: 'detach',
            params: JSON.stringify(["receivers", ...receiverIds])
        }, id);
    },
    assignRecipients(id, organizeIds){
        return this.update({
            action: 'attach',
            params: JSON.stringify(["organizes", ...organizeIds])
        }, id);
    },
    unassignRecipients(id, organizeIds){
        return this.update({
            action: 'detach',
            params: JSON.stringify(["organizes", ...organizeIds])
        }, id);
    },
}
