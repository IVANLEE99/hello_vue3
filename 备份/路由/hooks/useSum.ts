import { ref, computed, onMounted } from 'vue';
export default function () {
    const sum = ref(0);
    const add = () => {
        sum.value++;
    };
    const bigSum = computed(() => {
        return sum.value * 10;
    });
    onMounted(() => {
        add();
    });
    return { sum, add, bigSum };
}
