import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Container from '../components/Container';

function Post(props) {
    const post = props.data.markdownRemark;
    const siteTitle = props.data.site.siteMetadata.title;

    const Root = styled.div`
        padding: 10vw;
    `;

    return (
        <Root>
            <Helmet title={`${post.frontmatter.title} » ${siteTitle}`} />
            <h1>{post.frontmatter.title}</h1>
            <Container dangerouslySetInnerHTML={{ __html: post.html }} />
        </Root>
    );
}

export default Post;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
