import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID uYszh--WHShfLjPQZ1qcOzKsjnbnP64m-NcSx289Hdg'
    }
});