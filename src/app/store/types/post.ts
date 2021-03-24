import { Category } from './category';
import { User } from './user';
import { Attachment } from './attachment';

export type Post = {
    id: number,
    title: {
        rendered: string,
    },
    content: {
        rendered: string,
    },
    meta: {
        _thumbnail: Attachment,
    }
    categories: Category[],
    author: User,
}
