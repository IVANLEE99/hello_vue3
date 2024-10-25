import { reactive } from 'vue';
import axios from 'axios';
export default function () {
    const dogsList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_597.jpg',
    ]);
    const getDog = async () => {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random');
        dogsList.push(res.data.message);
    };
    return { dogsList, getDog };
}
