import { Post } from './post';

export type PostQueryStatus = 'pending' | 'finished' | 'failed';

export type PostQuery = {
    status: string,
    args: PostQueryArgs,
    result: {
        posts: Post[],
        total: number,
        pages: number,
    },
    actions: {
        getNextPage: () => void,
    },
    isPending: boolean,
    isFailed: boolean,
    isFinished: boolean,
}

export type PostQueryArgs = {
    page: number,
    /** @default 10 */
    per_page: number,
    /** @default 'post' */
    type?: string,

}
