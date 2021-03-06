import React from "react";
import { Styled, css } from "theme-ui";

import PostFooter from "../components/post-footer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";

/* the Post Layout */
const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <Styled.root>
      <Styled.h1>{post.title}</Styled.h1>

      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3,
        })}
      >
        {post.date}
      </Styled.p>
      <div
        css={{
          paddingTop: `50px`,
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      <PostFooter {...{ previous, next }} />
    </Styled.root>
  </Layout>
);

export default Post;
