import { PostQuery, PostQueryArgs } from '../types/post-query';
import { usePost } from './usePost';

export const usePostQuery = ( args: PostQueryArgs ): PostQuery => {
    const dummy = {
        status: 'finished',
        args: {
            page: 1,
            per_page: args.per_page,
        },
        result: {
            posts: Array( args.per_page ).fill( usePost( 1 ) ),
            total: args.per_page * 3,
            pages: 3,
        },
        actions: {
            getNextPage: () => null,
        }
    };

    return dummy;
}
