import React from 'react';
import { useAttachment } from '../store/hooks/useAttachment';

interface Props {
    id: number;
    width?: string;
    height?: string;
}

export default function Thumbnail( props: Props ) {
    const thumb = useAttachment( props.id );

    return (
        <img
            loading='lazy'
            alt={thumb.alt_text || thumb.caption.rendered}
            src={thumb.source_url}
            width={props.width}
            height={props.height}
        />
    );
}
