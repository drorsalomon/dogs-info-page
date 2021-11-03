import axios from 'axios';

export default class Dog {
    constructor(id) {
        this.id = id;
    }

    async getDog() {
        console.log(this.id);
        try {
            const res = await axios(`https://api.TheDogAPI.com/v1/images/search?breed_ids=${this.id}`);
            console.log(res.data);
            this.name = res.data[0].breeds[0].name;
            this.heightImperial = res.data[0].breeds[0].height.imperial;
            this.heightMetric = res.data[0].breeds[0].height.metric;
            this.weightImperial = res.data[0].breeds[0].weight.imperial;
            this.weightMetric = res.data[0].breeds[0].weight.metric;
            this.temp = res.data[0].breeds[0].temperament;
            this.lifeSpan = res.data[0].breeds[0].life_span;
            this.bredFor = res.data[0].breeds[0].bred_for;
            this.breedGroup = res.data[0].breeds[0].breed_group;
            this.imgUrl = res.data[0].url;
            //this.origin = res.data[0].breeds[0].origin;
            //this.wikipediaUrl = res.data[0].breeds[0].wikipedia_url;      
        } catch (err) {
            console.log('Cannot find requested dog');
        }
    }
}