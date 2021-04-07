import { Post } from '../types/post';

export function usePostBySlug( slug: string ): Post {
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
        categories: [1, 2],
        author: 1,
    };

    return dummy;
}
