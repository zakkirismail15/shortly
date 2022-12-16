import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "../../styles/Common";
import LinkItem from "./LinkItem";
import {
  LinkShortenerButton,
  LinkShortenerContent,
  LinkShortenerWidget,
  LinkShortenerWidgetWrapper,
  LinkShortenerInput,
} from "./LinkShortener.style";
function LinkShortener() {
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);

  useEffect(() => {
    console.log(shortenedLinks);
  }, [shortenedLinks]);

  const getShortenedLink = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("error");
      }
      const result = await response.json();
      setShortenedLinks([...shortenedLinks, result])
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
      setLink("");
    }
  };

  return (
    <>
      <LinkShortenerContent>
        <Container>
          <LinkShortenerWidget>
            <LinkShortenerWidgetWrapper>
              <LinkShortenerInput
                placeholder='Shorten a link here...'
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <LinkShortenerButton onClick={getShortenedLink}>Shorten It!</LinkShortenerButton>
            </LinkShortenerWidgetWrapper>
          </LinkShortenerWidget>
          <LinkItem links={shortenedLinks} />
        </Container>
      </LinkShortenerContent>
    </>
  );
}

export default LinkShortener;
