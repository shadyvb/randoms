import React from 'react';
import { useAttachment } from '../store/hooks/useAttachment';

const Thumbnail = ({ id }: { id: number }) => {
    const thumb = useAttachment( id );

    return (
        <img
            loading='lazy'
            alt={thumb.alt_text || thumb.caption.rendered}
            src={thumb.source_url}
        />
    );
}

export default Thumbnail;
