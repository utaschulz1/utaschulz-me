import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { wrapper } from "./conceptsContent.module.css";

const ConceptsContent = () => {
  return (
    <div className={wrapper}>
      <h2>
        <Trans>Documentation Portals</Trans>
      </h2>
      <p>
        <Trans>
          <i>Docentation portal</i> is a rather broad concept, even if we limit
          it to the use in technical documentation.
        </Trans>
      </p>
      <p>
        <Trans>
          It is therefore necessary to define what I am talking about in this
          research when using <i>documentation portal</i>.
        </Trans>
      </p>

      <h3>
        <Trans>Other Words for Documentation Portal</Trans>
      </h3>
      <p>
        <Trans>
          In technical communication, documentation portals are also known as
          content delivery portals, content delivery systems, documentation
          hubs, self-help portals and more. They are software products for
          mobile and desktop devices used by various professional and
          non-professional user groups.
        </Trans>
      </p>

      <h3>
        <Trans>Characteristics of Documentation Portals</Trans>
      </h3>
      <p>
        <Trans>
          In this research, I will consider documentation portals that serve
          documentation for several physical products in one application for one
          or more user groups.
        </Trans>
      </p>
      <p>
        <Trans>
          The purpose of these documentation portals is to deliver technical
          ducumentation to various ends on request.
        </Trans>
      </p>
      <p>
        <Trans>
          Content modules, their size, relationships and capabilities
          characterize these documentation portals and are related to my
          research.
        </Trans>
      </p>

      <h3>
        <Trans>
          Which Documentation Portals Are Not Considered in this Research
        </Trans>
      </h3>
      <p>
        <Trans>
          I will not consider software applications that serve static documents
          only, where content modularization by definition does not play a role.
        </Trans>
      </p>
      <p>
        <Trans>
          Furthermore, I will not consider product centered software
          applications, like digital twin applications, since they do not put
          the technical documentation in the center of the application and come
          with different requirements.
        </Trans>
      </p>
      <p>
        <Trans>
          I will not consider documentation applications that serve the
          technical documentation of one specific product, for example, an
          application serving all the user documentation for a person's car.
        </Trans>
      </p>

      <h2>
        <Trans>Documentation and Documents</Trans>
      </h2>
      <h3>
        <Trans>Documentation</Trans>
      </h3>
      <p>
        <Trans>
          <i>Documentation</i> in this research is technical documentation of
          products containing information for use, not being limited to this.
        </Trans>
      </p>
      <h3>
        <Trans>Static and Dynamic Documents</Trans>
      </h3>
      <p>
        <Trans>
          Conventionally, the word <i>document</i> is used for larger units of
          information in a static file, for example, a full machine manual as
          pdf.
        </Trans>
      </p>
      <p>
        <Trans>
          In this research, <i>static documents</i> are files that will not be
          used in variable outputs, once uploaded into the documentation potal.
        </Trans>
      </p>
      <p>
        <Trans>
          <i>Dynamic documents</i> are files that can be used in various outputs
          in the documentation portal.
        </Trans>
      </p>

      <h2>
        <Trans>Classification of Content</Trans>
      </h2>
      <p>
        <Trans>Let's assume that content is created for the user.</Trans>
      </p>
      <p>
        <Trans>
          Then, metadata and classes, are assigned to the content in order to
          add context to the content, for example, a product category, a date or
          a user group. The content gets classified or categorized.
        </Trans>
      </p>
      <p>
        <Trans>
          Classification in this research is the subdivision of content-relevant
          dimensions into classes with the purpose of ordering.
        </Trans>
      </p>
      <p>
        <Trans>
          The classes and metadata can have a wide range of purposes. With
          regard to documentation portals, content needs to be classified
          according to several criteria that are related to this research.
        </Trans>
      </p>
      <p>
        <Trans>
          Raufmann and Wolf [2] describe how facets for content that was
          classified according to the PI standard in a CCMS were adapted for
          deployment in a documentation portal to enhance usability.
        </Trans>
      </p>

      <h2>
        <Trans>Content Module</Trans>
      </h2>
      <p>
        <Trans>
          A classifiable purposeful unit of content in a content system.
        </Trans>
      </p>

      <h2>
        <Trans>Modularization of Content</Trans>
      </h2>
      <p>
        <Trans>
          Modularization of content is the modeling of content into classifiable
          purposeful units to put them in context to each other and thus enable
          them to represent knowledge. This is the definition for this research
          so far.
        </Trans>
      </p>
      <h3>
        <Trans>Topics as Content Modules</Trans>
      </h3>
      <p>
        <Trans>
          While it is said that in the field of Technical Communication a topic
          is self-contained content that can be understood without further
          context [1], there are several assumptions about context in this
          statement.For example, that the content appears together with a
          product, and more. Context is always necessary, be it implicit or
          explicit.
        </Trans>
      </p>
      <p>
        <Trans>
          Context is thus the variable that defines the size or granularity of a
          topic.
        </Trans>
      </p>
      <h3>
        <Trans>Context and Modular Content</Trans>
      </h3>
      <p>
        <Trans>
          In contrast to conventional static publishing formats, documentation
          portals as self-help portals pose a challenge to the conflicting
          requirements of content to be modular as well as to have content
          modules be provided with sufficient context.
        </Trans>
      </p>
      <p>
        <Trans>
          User needs might come into play when modeling content modules. This is
          the subject of this research.
        </Trans>
      </p>

      <h2>
        <Trans>UX Factors</Trans>
      </h2>
      <p>
        <Trans>
          UX factors are quality characteristics of a product. In the present
          case, of documentation portals.
        </Trans>
      </p>
      <p>
        <Trans>
          If you assign quantifiable parameters to the factors, these UX factors
          can be translated into user needs, thus, into requirements.
        </Trans>
      </p>
      <p>
        <Trans>
          I will make use of the consolidated UX factors list for digital
          products of Hinderks, Winter, Schrepp and Thomaschewski [3].
        </Trans>
      </p>
      <p>
        <Trans>I chose 15 factors.</Trans>
      </p>

      <h2>
        <Trans>References</Trans>
      </h2>
      <p>
        <ol>
          <li>
            <Trans>
              S. Coss, Single Source Publishing – Modularer Content für EPUB &
              Co., 49, (2011)
            </Trans>
          </li>
          <li>
            <Trans>
              Approaches for deployment and access of content in delivery
              portals Theresa Rauffmann, Monika Wolf (2020)
            </Trans>
          </li>
          <li>
            <Trans>
              Applicability of User Experience and Usability Questionnaires
              (2019) Hinderks, Winter, Schrepp, Thomaschewski
            </Trans>
          </li>
        </ol>
      </p>
    </div>
  );
};

export default ConceptsContent;
