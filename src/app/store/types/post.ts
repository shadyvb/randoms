import {Category} from './category';
import {User} from './user';

export type Post = {
    id: number,
    title: {
        rendered: string,
    },
    content: {
        rendered: string,
    },
    meta: {
        _thumbnail_id: number,
    }
    categories: Category[],
    author: User,
}
