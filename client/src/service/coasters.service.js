import axios from 'axios'

class CoastersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/coasters',
            withCredentials: true
        })
    }

    getAllCoasters = () => this.app.get('/getAllCoasters')
    getOneCoaster = coaster_id => this.app.get(`/getOneCoaster/${coaster_id}`)
    createCoaster = coasterDetails => this.app.post(`/newCoaster`, coasterDetails)
}

export default CoastersService