import { Post } from '../types/post';

const posts = [
    'الاقمار الصناعية',
    'ماذا لو .. عاش الانسان ١٠٠ عام؟',
    'حقائق مذهلة عن البوم',
    'أكثر 10 كتب غامضة على مر التاريخ',
];

export const usePost = ( id: number ): Post => {
    const dummy = {
        id: 1,
        slug: 'slug-1',
        title: {
            rendered:  posts[Math.floor(Math.random() * posts.length)],
        },
        content: {
            rendered: 'Test content',
        },
        meta: {
            _thumbnail_id: 1,
        },
        categories: [1],
        author: 1,
    };

    return dummy;
}
