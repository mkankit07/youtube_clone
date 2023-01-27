import axios from 'axios'

const BASE_URL = 'https://youtbe-v31.p.rapidapi.com'
const options = {
    params: { maxResults: '100' },
    headers: {
        'X-RapidAPI-Key': '198148f0eemsh30217f8bb05f447p1aef02jsn5ea7529987e3',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
};

export const fatchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}