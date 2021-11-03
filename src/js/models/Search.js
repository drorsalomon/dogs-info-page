import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    /* 'axios' is used instead of 'fetch' which doesn't work on newer browsers. */
    async getResults() {
        let idArray = [];
        let resultsArray = [];
        try {
            //axios.defaults.headers.common['x-api-key'] = "32e744a3-4829-42fe-ba22-fdf68bb4c785";
            const res = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${this.query}`);
            idArray = res.data.map(element => element.id);
        } catch (error) {
            console.log(error);
        }

        for (let i = 0; i < idArray.length; i++) {
            try {
                // axios.defaults.headers.common['x-api-key'] = "32e744a3-4829-42fe-ba22-fdf68bb4c785";
                const res = await axios(`https://api.TheDogAPI.com/v1/images/search?breed_ids=${idArray[i]}`);
                if (res.data.length != 0) {
                    resultsArray.push(res.data);
                }
                this.result = resultsArray;
            } catch (error) {
                console.log(error);
            }
        }
    }
}