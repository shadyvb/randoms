export type Attachment = {
    id: number,
    title: {
        rendered: string,
    },
    description: {
        rendered: string,
    },
    source_url: string,
    alt_text?: string,
    caption: {
        rendered?: string,
    },
}