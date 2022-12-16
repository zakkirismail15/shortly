import React, { useState } from 'react'
import { LinkItemButton, LinkResultContainer, LinkResultItem, OriginalLinkWrapper, ShortenedLinkWrapper } from './LinkItem.style'
import { H1, H2, H3, H4, H5 } from "../../styles/Typography"
import { useEffect } from 'react'
import { Button } from '../../styles/Common'
import { LinkShortenerButton } from './LinkShortener.style'

function LinkItem({ links }) {

    const [lastCopied, setLastCopied] = useState(null)

    const onClick = (link, idx) => {
        navigator.clipboard.writeText(link.result.short_link);
        setLastCopied(idx)
    }


    return (
        <LinkResultContainer>
            {links.length > 0 && links.map((link, idx) => {
                console.log(links)
                return (
                    <LinkResultItem>
                        <OriginalLinkWrapper>
                            <H5 className='link'>{link.result.original_link}</H5>
                        </OriginalLinkWrapper>
                        <ShortenedLinkWrapper>
                            <H5 className='shortened-link'>{link.result.short_link}</H5>
                        </ShortenedLinkWrapper>
                        <LinkItemButton onClick={() => onClick(link, idx)} className={`${lastCopied === idx ? "copied" : ""}`}>{lastCopied === idx ? "Copied!" : "Copy"}</LinkItemButton>
                    </LinkResultItem>)
            })}
        </LinkResultContainer>
    )
}

export default LinkItem