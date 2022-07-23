import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import Layout from "./layout";
import Seo from "../components/seo";
import Author from "./author";
import {
  postNavWrapper,
  title,
  heroImg,
  photoCredit,
  article,
  sub,
  toc,
  list,
  prevNext,
} from "./post.module.css";
const getLocalizedRoute = require("../i18n/getLocalizedRoute");

const BlogPost = ({ data, pageContext }) => {
  // console.log(data.mdx.body);

  const { language } = useI18next();

  const navItems = data.mdx.tableOfContents.items;
  const image = getImage(data.mdx.frontmatter.hero_image);
  const titleHtml = data.mdx.frontmatter.title_html
    ? data.mdx.frontmatter.title_html
    : data.mdx.frontmatter.title_post;

  const titleArticle = data.mdx.frontmatter.title_post
    ? data.mdx.frontmatter.title_post
    : data.mdx.frontmatter.title_html;

  const dateModified =
    data.mdx.frontmatter.date_modified && data.mdx.frontmatter.date_modified;

  const wordcount = data.mdx.wordCount.words;

  const author = data.mdx.frontmatter.author && data.mdx.frontmatter.author;
  const authorLink =
    data.mdx.frontmatter.author_link && data.mdx.frontmatter.author_link;

  return (
    <Layout>
      <Seo
        type={"article"}
        position={3}
        title={titleHtml}
        articleTitle={titleArticle}
        author={author}
        authorLink={authorLink}
        // TODO: author link => moet mischien array worden voor structered data (same as...)
        description={data.mdx.frontmatter.description}
        release_date={data.mdx.frontmatter.date}
        modified_date={dateModified}
        image={image.images.fallback.src}
        imgAlt={data.mdx.frontmatter.hero_image_alt}
        wordcount={wordcount}
      />
      {image && (
        <figure className={heroImg}>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            loading="eager"
          />
          {data.mdx.frontmatter.photographer_name && (
            <figcaption className={photoCredit}>
              <a
                href={
                  data.mdx.frontmatter.photographer_link ||
                  "https://www.instagram.com/weonbikes_on_insta/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* &copy; */}
                {data.mdx.frontmatter.photographer_name}
              </a>
            </figcaption>
          )}
        </figure>
      )}
      <article className={article}>
        <header>
          <h1 className={title}>{data.mdx.frontmatter.title_post}</h1>
          <div className={postNavWrapper}>
            {navItems && (
              <nav className={toc} role="doc-toc">
                <p>
                  <Trans>In diesem Beitrag</Trans>
                </p>
                <ul className={list}>
                  {navItems.map((item, i) => (
                    <li key={i}>
                      <a href={item.url} key={i}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <Author author={author} link={authorLink} />
          </div>
        </header>

        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>

      <div className={prevNext}>
        {pageContext.previous && (
          <div>
            <Trans>Voriger Beitrag</Trans>:
            <br />
            <Link
              to={getLocalizedRoute(
                `/blog/${pageContext.previous.frontmatter.path}/`,
                language
              )}
            >
              {pageContext.previous.frontmatter.title_post}
            </Link>
          </div>
        )}
        <br />
        {pageContext.next && (
          <div>
            <Trans>Nächster Beitrag</Trans>:
            <br />
            <Link
              to={getLocalizedRoute(
                `/blog/${pageContext.next.frontmatter.path}/`,
                language
              )}
            >
              {pageContext.next.frontmatter.title_post}
            </Link>
          </div>
        )}
      </div>
      <div className={sub}>
        <p style={{ fontWeight: "bold" }}>
          <Trans>Bleib dran!</Trans>
        </p>
        <p>
          <i>
            <Trans>
              Abonniere am besten unseren Newsletter, um auf dem Laufenden zu
              bleiben.
            </Trans>
          </i>
        </p>
      </div>
    </Layout>
  );
};

// date(formatString: "MMMM D, YYYY")
export const query = graphql`
  query ($id: String, $language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["blog", "nav", "subs"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        date_modified
        lang
        title_post
        title_html
        hero_image_alt
        photographer_name
        photographer_link
        description
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 1600
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        author
        author_link
      }
      body
      tableOfContents
      wordCount {
        words
      }
      id
    }
  }
`;

export default BlogPost;
