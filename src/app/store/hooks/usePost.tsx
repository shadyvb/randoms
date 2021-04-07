import { Post } from '../types/post';

export const usePost = ( id: number ): Post => {
    const dummy = {
        id: 1,
        slug: 'slug-1',
        title: {
            rendered: 'Test title',
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
