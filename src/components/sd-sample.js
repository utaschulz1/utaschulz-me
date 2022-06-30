const sd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://weonbikes.com/#organization",
      name: "We On Bikes",
      url: "https://weonbikes.com/",
      sameAs: [
        "https://www.facebook.com/weonbikes",
        "https://www.instagram.com/weonbikes_on_insta/",
        "https://www.youtube.com/channel/UCsfAAH-YLEhkwrhZKM3R-Jw",
      ],
      logo: {
        "@type": "ImageObject",
        "@id": "https://weonbikes.com/#logo",
        url: "", // TODO
        caption: "We On Bikes Logo",
      },
      image: { "@id": "https://weonbikes.com/#logo" },
    },
    {
      "@type": "WebSite",
      "@id": "https://weonbikes.com/#website",
      url: "https://weonbikes.com/",
      name: "We On Bikes",
      publisher: { "@id": "https://weonbikes.com/#organization" },
    },
    {
      // De huidige pagina
      "@type": "WebPage",
      "@id": "https://weonbikes.com/blog/#webpage",
      url: "https://weonbikes.com/blog/",
      inLanguage: "de",
      name: "weonbikes | blog", // zelfde als title?!
      isPartOf: { "@id": "https://weonbikes.com/#website" },
      image: {
        "@type": "ImageObject",
        "@id": "https://weonbikes.com/blog/#primaryimage",
        url: "", //  TODO: img url
        caption: "",
      }, //TODO: img alt
      primaryImageOfPage: { "@id": "https://weonbikes.com/blog/#primaryimage" },
      datePublished: "2019-03-28T14:05:01+00:00",
      dateModified: "", // buildtime
      description: "", // description
      breadcrumb: { "@id": "https://yoast.com/wordpress-seo/#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://weonbikes.com/blog/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://yoast.com/",
            url: "https://yoast.com/",
            name: "Home",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://yoast.com/seo-blog/",
            url: "https://yoast.com/seo-blog/",
            name: "SEO blog",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "WebPage",
            "@id": "https://yoast.com/tag/wordpress/",
            url: "https://yoast.com/tag/wordpress/",
            name: "WordPress",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "WebPage",
            "@id": "https://yoast.com/wordpress-seo/",
            url: "https://yoast.com/wordpress-seo/",
            name: "WordPress SEO: the definitive guide",
          },
        },
      ],
    },
    {
      "@type": "Article",
      "@id": "https://yoast.com/wordpress-seo/#article",
      isPartOf: { "@id": "https://yoast.com/wordpress-seo/#webpage" },
      author: {
        "@id": "https://weonbikes/#author",
        name: "uta Schulz",
      },
      publisher: { "@id": "https://weonbikes.com/#organization" },
      headline: "", //TODO: title
      datePublished: "", // TODO: article date
      dateModified: "", // buildtime of weglaten
      mainEntityOfPage: "https://yoast.com/wordpress-seo/#webpage",
      image: { "@id": "https://yoast.com/wordpress-seo/#primaryimage" },
      keywords: "",
    },
    // {
    //   "@type": "Person",
    //   "@id": "https://yoast.com/about-us/team/joost-de-valk/#author",
    //   name: "Joost de Valk",
    //   image: {
    //     "@type": "ImageObject",
    //     "@id": "https://yoast.com/#personlogo",
    //     url: "https://yoast.com/app/uploads/2018/09/avatar_user_1_1537774226.png",
    //     caption: "Joost de Valk",
    //   },
    //   description:
    //     "Joost de Valk is the founder and Chief Product Officer of Yoast and the Lead Marketing & Communication for WordPress.org. He's a digital marketer, developer and an Open Source fanatic.",
    //   sameAs: [
    //     "https://www.facebook.com/jdevalk",
    //     "http://www.linkedin.com/in/jdevalk",
    //     "https://twitter.com/jdevalk",
    //   ],
    // },
  ],
};

const sd2 = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yoast.com/#organization",
      name: "Yoast",
      url: "https://yoast.com/",
      sameAs: [
        "https://www.facebook.com/yoast",
        "https://www.instagram.com/yoast/",
        "https://www.linkedin.com/company/1414157/",
        "https://www.youtube.com/yoast",
        "https://www.pinterest.com/yoast/",
        "https://en.wikipedia.org/wiki/Yoast",
        "https://twitter.com/yoast",
        "https://g.co/kgs/4H5sG2",
        "https://g.co/kgs/a9XfUu",
      ],
      logo: {
        "@type": "ImageObject",
        "@id": "https://yoast.com/#logo",
        inLanguage: "en-US",
        url: "https://yoast.com/app/uploads/2020/09/Yoast_Icon_SocialMedia_500x500.png",
        contentUrl:
          "https://yoast.com/app/uploads/2020/09/Yoast_Icon_SocialMedia_500x500.png",
        width: 500,
        height: 500,
        caption: "Yoast",
      },
      image: { "@id": "https://yoast.com/#logo" },
      founder: {
        "@type": "Person",
        name: "Joost de Valk",
        url: "https://yoast.com/about-us/team/joost-de-valk/",
        sameAs: "https://yoast.com/about-us/team/joost-de-valk/",
      },
      foundingDate: "2010-05-01",
      numberOfEmployees: 143,
      slogan: "SEO for Everyone",
      description:
        "Yoast helps you with your website optimization, whether it be through our widely used SEO software or our online SEO courses: we&#039;re here to help.",
      alternateName: "Yoast BV",
      legalName: "Yoast BV",
      parentOrganization: {
        "@type": "Organization",
        name: "Newfold Digital",
        description:
          "Newfold Digital is a leading web presence solutions provider serving millions of small-to-medium businesses globally.",
        url: "https://newfold.com/",
        sameAs: ["https://newfold.com/"],
        logo: "https://yoast.com/app/uploads/2022/01/newfold-logo.png",
      },
      memberOf: {
        "@type": "Organization",
        name: "World Wide Web Consortium (W3C)",
        description:
          "The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web.",
        url: "https://w3.org/",
        sameAs: ["https://w3.org/"],
        logo: "https://www.w3.org/Icons/w3c_main.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://yoast.com/#website",
      url: "https://yoast.com/",
      name: "Yoast.com",
      description: "SEO for everyone",
      publisher: { "@id": "https://yoast.com/#organization" },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://yoast.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
      copyrightHolder: { "@id": "https://yoast.com/#organization" },
    },
    {
      "@type": "ImageObject",
      "@id": "https://yoast.com/wordpress-seo/#primaryimage",
      inLanguage: "en-US",
      url: "https://yoast.com/app/uploads/2021/06/wordpress_seo_definitive_guide_OG.jpg",
      contentUrl:
        "https://yoast.com/app/uploads/2021/06/wordpress_seo_definitive_guide_OG.jpg",
      width: 1200,
      height: 675,
    },
    {
      "@type": "WebPage",
      "@id": "https://yoast.com/wordpress-seo/#webpage",
      url: "https://yoast.com/wordpress-seo/",
      name: "WordPress SEO Tutorial • The Definitive Guide • Yoast",
      isPartOf: { "@id": "https://yoast.com/#website" },
      primaryImageOfPage: {
        "@id": "https://yoast.com/wordpress-seo/#primaryimage",
      },
      datePublished: "2021-06-17T12:00:00+00:00",
      dateModified: "2022-02-02T17:18:18+00:00",
      description:
        "Want higher rankings? This is THE tutorial you need to hugely increase your search engine traffic by improving your WordPress SEO.",
      breadcrumb: { "@id": "https://yoast.com/wordpress-seo/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [
        { "@type": "ReadAction", target: ["https://yoast.com/wordpress-seo/"] },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://yoast.com/wordpress-seo/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://yoast.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SEO blog",
          item: "https://yoast.com/seo-blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "WordPress",
          item: "https://yoast.com/tag/wordpress/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "WordPress SEO: the definitive guide",
        },
      ],
    },
    {
      "@type": "Article",
      "@id": "https://yoast.com/wordpress-seo/#article",
      isPartOf: { "@id": "https://yoast.com/wordpress-seo/#webpage" },
      author: {
        "@id":
          "https://yoast.com/#/schema/person/2d72f7859830ea2d4a4911795c69dfbb",
      },
      headline: "WordPress SEO: the definitive guide",
      datePublished: "2021-06-17T12:00:00+00:00",
      dateModified: "2022-02-02T17:18:18+00:00",
      mainEntityOfPage: { "@id": "https://yoast.com/wordpress-seo/#webpage" },
      wordCount: 11074,
      commentCount: 23,
      publisher: { "@id": "https://yoast.com/#organization" },
      image: { "@id": "https://yoast.com/wordpress-seo/#primaryimage" },
      thumbnailUrl:
        "https://yoast.com/app/uploads/2020/06/wordpress_seo_definitive_guide_2400x1350.png",
      keywords: [
        "Content SEO",
        "Google Analytics",
        "Mobile SEO",
        "Security",
        "Site Speed",
        "Site structure",
        "Technical SEO",
        "WordPress",
        "Yoast SEO",
      ],
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "CommentAction",
          name: "Comment",
          target: ["https://yoast.com/wordpress-seo/#respond"],
        },
      ],
      copyrightYear: "2021",
      copyrightHolder: { "@id": "https://yoast.com/#organization" },
      accessibilityFeature: ["tableOfContents"],
    },
    {
      "@type": "Person",
      "@id":
        "https://yoast.com/#/schema/person/2d72f7859830ea2d4a4911795c69dfbb",
      name: "Joost de Valk",
      image: {
        "@type": "ImageObject",
        "@id": "https://yoast.com/#personlogo",
        inLanguage: "en-US",
        url: "https://yoast.com/app/uploads/2018/09/avatar_user_1_1537774226.png",
        contentUrl:
          "https://yoast.com/app/uploads/2018/09/avatar_user_1_1537774226.png",
        caption: "Joost de Valk",
      },
      description:
        "Joost de Valk is the founder and Chief Product Officer of Yoast. He's an internet entrepreneur, who next to founding Yoast has invested in and advised several startups. His main expertise is open source software development and digital marketing.",
      sameAs: [
        "https://joost.blog/",
        "https://www.facebook.com/jdevalk",
        "https://www.instagram.com/joostdevalk/",
        "http://www.linkedin.com/in/jdevalk",
        "https://twitter.com/jdevalk",
        "https://en.wikipedia.org/wiki/Joost_de_Valk",
        "https://github.com/jdevalk",
        "https://joost.blog/about-me/",
        "https://profiles.wordpress.org/joostdevalk/",
        "https://yoast.com/about-us/team/joost-de-valk/",
      ],
      birthDate: "1982-02-16",
      gender: "male",
      knowsAbout: ["SEO", "digital marketing"],
      knowsLanguage: ["Dutch", "English", "French", "German"],
      jobTitle: "Founder & Chief Product Officer",
      worksFor: { "@id": "https://yoast.com/#organization" },
      url: "https://yoast.com/about-us/team/joost-de-valk/",
    },
  ],
};
