import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
const getLocalizedRoute = require("../i18n/getLocalizedRoute");
const faq = require("../faq/faq");

const SEO = ({
  type,
  typeFaq,
  url,
  position,
  title,
  articleTitle,
  description,
  image,
  imgAlt,
  release_date,
  modified_date,
  tags,
  author,
  authorLink,
  isbn,
  wordcount,
}) => {
  // release_date format: string "yyyy-mm-dd"
  // tags format: array with strings ["tag1", "tag2", "tag3"]
  // if type=article: published_time, author, tags
  // if type=book: release_date, author, isbn, tags
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { language, languages, defaultLanguage, originalPath } = useI18next();
  const orgPath = originalPath;

  const data = useStaticQuery(query);
  const { defaultTitle, defaultDescription, siteUrl } = data.site.siteMetadata;
  const defaultImage = data.image.childImageSharp.fixed.srcWebp;
  const defaultImageAlt =
    "Uta und Menno fahren im Sonnenschein auf einem steinigen Pfad an der Küste der Barentssee auf dem Fahrrad. Im Hintergrund das Nordkap.";

  const buildTime = data.site.buildTime;

  const seo = {
    type: type || "website",
    typeFaq: typeFaq || false,
    url: `${siteUrl}${pathname}` || url,
    position: position || 1,
    title: title || t(defaultTitle),
    description: description || t(defaultDescription),
    image: `${siteUrl}${image || defaultImage}`,
    alt: imgAlt || t(defaultImageAlt),
    date: release_date || "2022-03-03",
    author: author || "Uta Schulz",
    authorLink:
      authorLink ||
      "https://www.amazon.com/kindle-dbs/entity/author/B09SVCVM7H?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default#formatSelectorHeader",
  };

  const logoUrl =
    siteUrl + data.logo.childImageSharp.gatsbyImageData.images.fallback.src;

  const localizedBaseUrl =
    language === defaultLanguage
      ? siteUrl + "/"
      : siteUrl + "/" + language + "/";

  const sd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteUrl + "/#organization",
        name: "We On Bikes",
        url: siteUrl + "/",
        sameAs: [
          "https://www.facebook.com/weonbikes",
          "https://www.instagram.com/weonbikes_on_insta/",
          "https://www.youtube.com/channel/UCsfAAH-YLEhkwrhZKM3R-Jw",
        ],
        logo: {
          "@type": "ImageObject",
          "@id": siteUrl + "/#logo",
          url: logoUrl,
          caption: "We On Bikes Logo",
        },
        image: { "@id": siteUrl + "/#logo" },
        slogan: "Life by bicycle",
      },
      {
        "@type": "WebSite",
        "@id": siteUrl + "/#website",
        url: localizedBaseUrl,
        name: "We On Bikes",
        inLanguage: language,
        publisher: { "@id": siteUrl + "/#organization" },
        copyrightHolder: { "@id": siteUrl + "/#organization" },
      },
      {
        "@type": "ImageObject",
        "@id": seo.url + "#primaryimage",
        url: seo.image,
        caption: seo.alt,
      },
      {
        "@type": "WebPage",
        "@id": seo.url + "#webpage",
        url: seo.url,
        inLanguage: language,
        name: seo.title,
        isPartOf: { "@id": siteUrl + "/#website" },
        primaryImageOfPage: {
          "@id": seo.url + "#primaryimage",
        },
        datePublished: seo.date,
        dateModified:
          seo.url === siteUrl + "/" ? buildTime : modified_date || seo.date,
        description: seo.description,
        accessibilityFeature: ["resizeText/CSSEnabled", "alternativeText"],
        breadcrumb: { "@id": seo.url + "#breadcrumb" },
      },
    ],
  };

  const sdArticle = {
    "@type": "Article",
    "@id": seo.url + "#article",
    isPartOf: { "@id": seo.url + "#webpage" },
    author: {
      "@id": siteUrl + "/#author",
    },
    publisher: { "@id": siteUrl + "/#organization" },
    headline: articleTitle,
    datePublished: seo.date,
    wordCount: wordcount,
    mainEntityOfPage: { "@id": seo.url + "#webpage" },
    image: { "@id": seo.url + "#primaryimage" },
    // keywords: "",
    inLanguage: language,
    copyrightYear: release_date && release_date.slice(0, 4),
    dateModified: modified_date || seo.date,
    copyrightHolder: { "@id": siteUrl + "/#organization" },
    accessibilityFeature: [
      "tableOfContents",
      "resizeText/CSSEnabled",
      "alternativeText",
    ],
  };
  let sdPerson;
  if (seo.author === "Uta Schulz") {
    sdPerson = {
      "@type": "Person",
      "@id": siteUrl + "/#author",
      name: "Uta Schulz",
      sameAs: [
        "https://qr.umtranslation.com/",
        "https://www.linkedin.com/in/uta-schulz-11b442117",
        "https://www.facebook.com/uta.schulz.12",
        "https://www.instagram.com/uta_on_insta/",
        "https://www.amazon.com/kindle-dbs/entity/author/B09SVCVM7H?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default#formatSelectorHeader",
        "https://www.amazon.de/Uta-Schulz/e/B09SVCVM7H%3Fref=dbs_a_mng_rwt_scns_share"
      ],
      worksFor: { "@id": siteUrl + "/#organization" },
      url: siteUrl + "/",
    };
  } else {
    sdPerson = {
      "@type": "Person",
      "@id": siteUrl + "/#author",
      name: seo.author,
      sameAs: [seo.authorLink],
    };
  }

  if (seo.type === "article") sd["@graph"].push(sdArticle, sdPerson);

  const sdFaq = {
    "@type": "FAQPage",
    isPartOf: { "@id": seo.url + "#webpage" },
    mainEntityOfPage: { "@id": seo.url + "#webpage" },
    lastReviewed: buildTime,
    datePublished: seo.date,
    dateModified: modified_date || seo.date,
    inLanguage: language,
    mainEntity: [],
  };

  faq.default.forEach((question) => {
    const obj = {
      "@type": "Question",
      name: t(question[0]),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(question[1]),
      },
    };
    sdFaq.mainEntity.push(obj);
  });

  if (seo.typeFaq) sd["@graph"].push(sdFaq);

  // Stuctured data breadcrumb list

  // Initial breadcrumb position
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: t(defaultTitle),
      item: localizedBaseUrl,
    },
  ];

  if (seo.position === 2) {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: seo.title,
      item: seo.url,
    });
  }

  if (seo.position === 3) {
    const pathArray = pathname.split("/");
    let posTwoslug;
    if (pathArray.length === 4) {
      posTwoslug = `/${pathArray[1]}/`;
    } else {
      posTwoslug = `/${pathArray[1]}/${pathArray[2]}/`;
    }
    itemListElement.push(
      {
        "@type": "ListItem",
        position: 2,
        name: t(
          "Uta Schulz | TCLoc Master Theses Research"
        ),
        item: siteUrl + posTwoslug,
      },
      {
        "@type": "ListItem",
        position: seo.position,
        name: seo.title,
        item: seo.url,
      }
    );
  }

  const breadcrumb = {
    "@id": seo.url + "#breadcrumb",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  sd["@graph"].push(breadcrumb);

  return (
    <Helmet title={seo.title}>
      <html lang={language} />
      <meta name="description" content={seo.description} />

      {/* OG metadata */}
      {seo.type && <meta property="og:type" content={seo.type} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.alt && <meta property="og:image:alt" content={seo.alt} />}
      {seo.type === "article" && (
        <meta property="og:site_name" content="WeOnBikes.com" />
      )}
      {seo.type === "article" && release_date && (
        <meta property="article:published_time" content={release_date} />
      )}
      {seo.type === "article" && modified_date && (
        <meta property="article:modified_time" content={modified_date} />
      )}
      {seo.type === "article" && (
        <meta property="article:author" content={seo.author} />
      )}
      {seo.type === "article" &&
        tags &&
        tags.map((tag) => {
          return <meta property="article:tag" content={tag} key={tag} />;
        })}
      {seo.type === "book" && release_date && (
        <meta property="booke:release_date" content={release_date} />
      )}
      {seo.type === "book" && author && (
        <meta property="book:author" content={author} />
      )}
      {seo.type === "book" && isbn && (
        <meta property="book:isbn" content={isbn} />
      )}
      {seo.type === "book" &&
        tags &&
        tags.map((tag) => {
          return <meta property="book:tag" content={tag} key={tag} />;
        })}
      {languages.map((lng) => {
        if (lng !== language) {
          return (
            <meta property="og:locale:alternate" content={lng} key={lng} />
          );
        } else {
          return <meta property="og:locale" content={language} key={lng} />;
        }
      })}

      {/* twitter specific metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.alt && <meta name="twitter:image:alt" content={seo.alt} />}

      {/* google links */}
      {seo.url && <link rel="canonical" href={seo.url} />}
      {languages.map((lng) => {
        const localizedPath = getLocalizedRoute(orgPath, lng);
        const lang = lng !== defaultLanguage ? "/" + lng : "";
        return (
          <link
            rel="alternate"
            href={siteUrl + lang + localizedPath}
            hrefLang={lng}
            key={lng}
          />
        );
      })}
      <link
        rel="alternate"
        href={siteUrl + "/en" + getLocalizedRoute(orgPath, "en")}
        hrefLang="x-default"
      />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(sd)}</script>
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
      }
    }
    image: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fixed(width: 500) {
          srcWebp
        }
      }
    }
    logo: file(relativePath: { eq: "icon.png" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: WEBP)
      }
    }
  }
`;
