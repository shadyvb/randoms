import { Category } from '../types/category';

const categories = [
    { slug: 'science-and-astronomy', title: 'علوم وفلك' },
    { slug: 'general', title: 'عامة' },
    { slug: 'wild-and-nature', title: 'برية وطبيعة' },
    { slug: 'bizzare-and-weird', title: 'عجائب وغرائب' },
];

export const useCategory = (id: number): Category => {
    const dummy = {
        id: 1,
        name: categories[Math.floor(Math.random() * categories.length)].title,
        slug: categories[Math.floor(Math.random() * categories.length)].slug,
    };

    return dummy;
}
