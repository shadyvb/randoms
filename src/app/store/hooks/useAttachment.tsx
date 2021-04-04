import { Attachment } from '../types/attachment';

export const useAttachment = ( id: number ): Attachment => {
    const dummy = {
        id: 2,
        title: {
            rendered: 'test-image.jpg',
        },
        caption: {
            rendered: 'Some caption here',
        },
        description: {
            rendered: '<p class="attachment"><a href="https://picsum.photos/200/300"><img width="300" height="200" src="https://picsum.photos/300/200" class="attachment-medium size-medium" alt="" loading="lazy" srcset="https://picsum.photos/300/200 300w, https://picsum.photos/1024/682 1024w, https://picsum.photos/768/511 768w, https://picsum.photos/1536/1022 1536w, https://picsum.photos/2048/1363 2048w" sizes="100vw" /></a></p>',
        },
        source_url: 'https://picsum.photos/1000/562',
    }

    return dummy;
}
