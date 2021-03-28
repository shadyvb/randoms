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
    },
    categories: number[],
    author: number,
}
