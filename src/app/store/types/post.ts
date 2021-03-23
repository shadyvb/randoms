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
    category: number,
    author: number,
}
