import React, { type ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import type { Props } from "@theme/BlogListPage";
import BlogPostItems from "@theme/BlogPostItems";
import BlogListPageStructuredData from "@theme/BlogListPage/StructuredData";

function BlogListPageMetadata(props: Props): ReactNode {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function Preamble(): ReactNode {
  return (
    <div className="blog-preamble">
      <h2 className="blog-preamble__heading">Before you scroll —</h2>
      <p>
        Most of what's here started as a problem I couldn't stop thinking about
        — usually something at work that felt off, or a conversation that
        rewired how I saw things. I'd sit with it, poke at it. Why is this even
        a problem? What am I not seeing?
      </p>
      <p>
        I don't really <em>write</em> these. I talk them out — dictate into a
        whisper transcription running locally, let AI help me find structure in
        the mess, then go through rounds of pulling it apart. Somewhere in that
        process I bring in things I've read, patterns I've seen elsewhere, and
        try to make it stick. It's more self-journal than blog, honestly.
      </p>
      <p>
        If you're here — maybe don't read these line by line. Feed them to an
        agent, ask it questions. That's how this stuff sticks anyway.
      </p>
    </div>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const { metadata, items, sidebar } = props;
  const isFirstPage = metadata.page === 1;
  return (
    <BlogLayout sidebar={sidebar}>
      {isFirstPage && <Preamble />}
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
