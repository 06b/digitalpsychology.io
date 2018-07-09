import React from 'react';
import styled from 'styled-components';

import { colors, fonts, linkStyle, sizes } from '../css/variables';
import Container from './Container';
import OutgoingLink from './OutgoingLink';

const Root = styled.div`
    padding: ${sizes.l} 2rem;
    background-color: ${colors.highlight};
    border-top: 1px solid ${colors.border};

    @media (min-width: 500px) {
        padding: ${sizes.l} ${sizes.xl};
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li + li {
        margin-top: 1rem;
    }

    a {
        ${linkStyle};
    }
`;

const Info = styled.div`
    margin-bottom: 2.5rem;
`;

const Anchor = styled(OutgoingLink)`
    ${fonts.heading};
`;

function Footer() {
    const siteDescription
        = `Digital Psychology – a free library of psychological principles`
        + ` and examples for inspiration to enhance the customer experience and`
        + ` influence your user's behavior`;

    return (
        <Root>
            <Container>
                <Info>
                    {siteDescription}. Brought to you by{' '}
                    <OutgoingLink to={`https://nolt.io?utm_source=partner&utm_campaign=digitalpsychology`}>
                        Nolt
                    </OutgoingLink>.
                </Info>

                <ul>
                    <li>
                        <Anchor to="http://bit.ly/digital-psychology-updates">
                            {`Subscribe to updates`}
                        </Anchor>
                    </li>
                    <li>
                        <Anchor
                            to={`http://twitter.com/share?text=${encodeURIComponent(
                                siteDescription
                            )}&url=http://digitalpsychology.io`}>
                            {`Share on Twitter`}
                        </Anchor>
                    </li>
                </ul>
            </Container>
        </Root>
    );
}

export default Footer;
