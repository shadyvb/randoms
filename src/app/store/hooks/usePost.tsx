import { Post } from '../types/post';
import {useCategory} from './useCategory';
import {useUser} from './useUser';

export const usePost = ( id: number ): Post => {
    const dummy = {
        id: 1,
        title: {
            rendered: 'Test title',
        },
        content: {
            rendered: 'Test content',
        },
        meta: {
            _thumbnail_id: 2,
        },
        categories: [useCategory(1)],
        author: useUser(1),
    };

    return dummy;
}
