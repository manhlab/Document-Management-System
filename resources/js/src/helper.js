export default {
    methods: {
        /*
        Just know that it takes an array of properties to exclude from a given object
        @param: keysMap = { id: 'value', name: 'label' }
        @param: array = [{ id: 'x1', name: 'x2' }]
        @return  [{ value: 'x1', label: 'x2' }]
        */
        formatKeys(array, keysMap = { id: 'value', name: 'label' }) {
            return array.map(function (obj) {
                return Object.keys(obj).reduce(
                    (acc, key) => ({
                        ...acc,
                        ...{ [keysMap[key] || key]: obj[key] }
                    }),
                    {}
                )
            })
        },
        getErrorMessage(error) {
            try {
                return error.response.data.errors.message ?? error.response.data.message
            } catch {
                return error.response.data.message || 'Unknow error'
            }
        },
        toastHttpError(error) {
            this.$toast.error(this.getErrorMessage(error))
        }
    },

}