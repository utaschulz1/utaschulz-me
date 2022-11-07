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
          it to the use in technical documentation. It is therefore necessary to
          define what I am talking about in this research when using{" "}
          <i>documentation portal</i>.
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
          documentation for several physical roducts in one application for one
          or more user groups.
        </Trans>
      </p>

      <p>
        <Trans>
          The purpose of these documentation portals is to find information to
          various ends
        </Trans>
      </p>
      <p>
        <Trans>
          Content units, their size, relationships and capabilities characterize
          these documentation portals and are related to my research.
        </Trans>
      </p>
      <h3>
        <Trans>
          What Documentstion Portals Are Not Considered in this Research
        </Trans>
      </h3>
      <p>
        <Trans>
          I will not consider software applications that serve static documents,
          where content modularization by definition does not play a role.
        </Trans>
      </p>
      <p>
        <Trans>
          I will not consider product centered software applications, like
          digital twin applications, since they do not put the technical
          documentation in the middle center of the application and come with
          different requirements.
        </Trans>
      </p>
      <p>
        <Trans>
          I will not consider documentation applications that serve the
          technical documentation of one specific product, for example, and
          application serving all the user documentation for a person's car
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
          <i>Documentation</i> in this reseach is technical documentation of
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
          used in variable outputs, once uploaded into the documentation potal,
          while <i>dynamic documents</i> are files that can be used in various
          outputs in the documentation portal.
        </Trans>
      </p>
      <h2>
        <Trans>Classification of Content</Trans>
      </h2>
      <p>
        <Trans>A classifiable purposeful unit of content in a system.</Trans>
      </p>
      <h2>
        <Trans>Modularization of Content</Trans>
      </h2>
      <p>
        <Trans>
          Modularization of content is the act of modeling content into
          classifiable purposeful units. That is my own definition so far.
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
          statement.
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
          requirements of content to be modular as wel as to have content
          modules be provided with sufficient context.
        </Trans>
      </p>
      <p>
        <Trans>
          User needs might come into play to a certain extent when modeling
          content modules. This is subject of this research.
        </Trans>
      </p>

      <h2>
        <Trans>UX Factors</Trans>
      </h2>
      <p>
        <Trans>
          UX factors are quality characteristics of a product. In this case of
          documentation portals.
        </Trans>
      </p>
      <p>
        <Trans>
          If you can assign quantifiable parameters to them, these UX factors
          can be translated into user needs, thus, into requirements.
        </Trans>
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
        </ol>
      </p>
    </div>
  );
};

export default ConceptsContent;
