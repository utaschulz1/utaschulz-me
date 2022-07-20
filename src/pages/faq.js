import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import Seo from "../components/seo";
import "../styles/mission.css";
// const faq = require("../faq/faq");

const Faq = (data) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const img =
    data.data.file.childImageSharp.gatsbyImageData.images.fallback.src;

  return (
    <Layout>
      <Seo
        typeFaq={true}
        position={2}
        title={t(
          "WeOnBikes | FAQ Häufige Fragen zum Radwandern, Radrouten, Fahrradreisen und unserem Buch"
        )}
        description={t(
          "Radwandern: was kostet es, muss ich trainieren, welches Werkzeug für mein Fahrrad? Hier findest du schnelle Antworten zum Thema Fahrradreisen zu unsere Reise von Moskau zum Nordkap."
        )}
        image={img}
        imgAlt={t(
          "Reisefahrrad steht vor einem überflutetem Weg, wo es nicht mehr weiter geht."
        )}
        release_date="2022-03-17"
        modified_date="2022-03-24"
      />

      <div className="mission-page-wrapper">
        <h1 className="mission-h1">
          <Trans>FAQ</Trans>
        </h1>
        <h2 className="mission-h2">
          <Trans>Ist Fahrradfahren eine gute Art zu reisen?</Trans>
        </h2>
        <p className="mission-h2">
          <Trans>Ja. Hier die Vorteile:</Trans>
        </p>
        <ul className="list-3">
          <li>
            <Trans>
              Du brauchst dein Gepäck nicht auf dem Rücken schleppen wie beim
              Wandern.
            </Trans>
          </li>
          <li>
            <Trans>
              Du sparst die Kosten für Benzin und die Nerven für den Stau.
            </Trans>
          </li>
          <li>
            <Trans>
              Körperlich und mental kannst du dich auf dem Fahrrad viel besser
              entspannen als im Auto.
            </Trans>
          </li>
          <li>
            <Trans>
              Deine Reisegeschwindigkeit ist perfekt: Du bekommst viel von der
              Landschaft mit, kannst unterwegs Leute kennenlernen und kommst
              trotzdem gut voran. Auch wenn du dich mal verfährst, ist die Route
              schneller korrigiert als zu Fuß.
            </Trans>
          </li>
        </ul>

        <h2 className="mission-h2">
          <Trans>Wie weit kann man mit dem Fahrrad an einem Tag reisen?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Wir schaffen in bergigem Gebiet oder off-road etwa 50 km. Auf der
            Straße so ca. 100 km, abhängig von Wind und Gepäck.
          </Trans>
        </p>
        <h2 className="mission-h2">
          <Trans>
            Wie war die Erfahrung in körperlicher Hinsicht auf der Reise von
            Moskau zum Nordkap?
          </Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Wir sind untrainiert los. Die ersten paar Tage waren demnach von
            Muskelkater begleitet 🙂 Allerdings sind wir Radfahren gewöhnt und
            haben ein gutes Fitnessniveau. Daher waren wir nicht ausgelaugt. Die
            Bewegung hat uns gut getan. Anstrengend waren tiefe Sandwege mit
            starker Steigung. Wenn man schieben muss, macht es manchmal Sinn,
            das Gepäck ohne Fahrrad den Hügel hochzutragen, oder das Gepäck auf
            den Rücken zu nehmen, sodass das Fahrrad nicht so tief einsinkt. Vor
            der Sonne hat uns Sonnencreme und ein Hut geschützt. Bei Hitze haben
            wir einfach länger Mittagspause gemacht. Schließlich hatten wir ja
            Urlaub!
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>Macht euch Fahrradurlaub zusammen glücklicher?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Ja. In gemütlicher Reisegeschwindigkeit können wir je nach Weg
            nebeneinander fahren und quatschen, singen oder einfach nur
            genießen. Mal mehr Abstand halten ist auch kein Problem. Menschen
            lernen wir zusammen kennen und bereichernde Erfahrungen erleben wir
            gemeinsam - auch die weniger schönen. Ständig diskutieren wir die
            Route und entscheiden uns dann dauernd um. Wir können uns
            gegenseitig motivieren, helfen und inspirieren. Im Alltag zu Hause
            kann die Beziehung mit dem stetigen Strom der Alltagsprobleme den
            Bach runtergehen, noch ehe man sich's versieht. Im Fahrradurlaub
            dagegen tritt der Alltag in den Hintergrund, die glücklichen Momente
            stehen dafür im Rampenlicht.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>Wie lange habt ihr diese Tour im Voraus geplant?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            6 Monate vor der Reise hatten wir die Idee und haben dann einen
            Monat gebraucht, um uns über die Richtung und den Startpunkt einig
            zu werden. Etwa 5 Monate vorher haben wir Flüge gebucht. Die Visa
            für Russland konnten wir erst einen Monat vorher beantragen.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>
            Wie viel hat eure Fahrradreise von 60 Tagen insgesamt gekostet?
          </Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            3500 Euro insgesamt zu zweit. Ein Fahrrad mussten wir vorher noch
            kaufen (gebraucht) = 450 Euro. Flüge nach Moskau = 360 Euro, Flüge
            vom Nordkap nach Hause = 500 Euro, 160 Euro Ausrüstung nachkaufen,
            u.a. Schlafsäcke, 2 extra Packtaschen, Mützen, Kocher, Gas. Etwa 300
            Euro haben wir in Restaurants ausgegeben und ca. 600 Euro für
            Unterkünfte. Da gibt es also Sparpotential 🙂 Dann noch etwa 1000
            Euro für Supermarkt und sonstiges. Das war 2018.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>Kann jeder Fahrrad-Trekking machen?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Ja. Das gute am Reisen per Rad ist, dass es sich genau anpassen
            lässt. Nicht besonders fit? Einfach kürzere Etappen fahren. Keine
            Ahnung von Technik? Wähle eine Route in der Nähe von Zivilisation.
            Die Knie wollen nicht mehr so? Einfach in einer flachen Gegend
            fahren oder ein E-Bike anschaffen. Allergisch gegen Regen? Such dir
            eine trockene Jahreszeit aus. Wenig Geld? Mit Zelt und Kocher kommst
            du auch mit Mikro-Budget richtig weit.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>Was ist mit Sattelschmerz?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Dem musst du unbedingt vorbeugen! Zwei gut passende Fahrradhosen und
            der richtige Sattel - so du solltest keine Probleme bekommen. Deinen
            Sattel solltest du unbedingt vorher testen. Je weniger Sitzfläche,
            desto weniger kann scheuern. Aber auch der Sitzwinkel spielt eine
            Rolle. Wenn du schmerzende Stellen bekommst, korrigiere die Ursache
            unverzüglich. Denn einmal wund, ist der Spaß für längere Zeit
            vorbei.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>
            Muss ich Ahnung von Fahrradreparatur haben, wenn ich auf Radreise
            gehe?
          </Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Ein bisschen. Einfache Reparaturen solltest du ausführen können:
            Schlauch flicken, Bremsen nachstellen und Schaltung einjustieren
            sind die wichtigsten. Dazu braust du eine Luftpumpe, Flickzeug und
            je nach Fahrrad die passenden Schlüssel.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>Wo finde ich die besten Routen?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Open Street Map ist gratis, funktioniert offline und hat einen
            Fahrradkarten-Modus. Es gibt viele weitere Apps, kostenlose und
            bezahlte, zum Beispiel Komoot, mit denen du deine Route planen
            kannst. Achte darauf, dass du die Karten herunterladen kannst, um
            sie ohne Internet zu nutzen. Ein tolle Website für Fernradwege in
            Europa ist beispielsweise
          </Trans>{" "}
          {language === "de" && (
            <a
              href="https://de.eurovelo.com/"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="de"
            >
              https://de.eurovelo.com/
            </a>
          )}
          {language === "en" && (
            <a
              href="https://en.eurovelo.com/"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              https://en.eurovelo.com/
            </a>
          )}
          .
        </p>

        <h2 className="mission-h2">
          <Trans>Wie lade ich mein Handy?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Es gibt verschiedene Möglichkeiten. Eine günstige Lösung ist ein
            leichtes, zusammenklappbares Solarpanel. Damit haben wir gute
            Erfahrungen gemacht. Eine weitere Möglichkeit bieten Ladedynamos.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>Brauche ich für lange Fahrradreisen ein teures Fahrrad?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Nein. Für lange Touren mit Gepäck brauchst du vor allem ein robustes
            Rad. Unsere herkömmlichen Touring-Räder haben uns nie im Stich
            gelassen. Gebraucht konnten wir sie günstig bekommen. Aber auch
            Mountainbikes mit der richtigen Ausstattung kommen in Frage.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>
            Welches der Länder, die ihr durchquert habt, ist am besten zum
            Radwandern?
          </Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Jedes Land hat Vor- und Nachteile: Russland punktet mit endlosen
            Weiten und der großen Freiheit (wenn man erst einmal drin und fern
            der Grenze ist). Außerdem sind die Menschen neugierig und offen.
            Auch Skandinavien ist keineswegs überfüllt und kann zudem mit
            exzellenten Straßen aufwarten. Man wird allerdings nur selten
            angesprochen.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>Trainiert ihr für so lange Fahrradtouren?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Besser ist das. Wer unvorbereitet gleich in die vollen geht, bekommt
            schnell ein geschwollenes Knie. Wir fahren natürlich ohnehin
            regelmäßig Fahrrad, aber vor der Reise versuchen wir mehrmals mit
            Gepäck ein paar Höhenmeter zu machen, um auch die ersten Urlaubstage
            genießen zu können.
          </Trans>
        </p>

        <h2 className="mission-h2">
          <Trans>
            Was ist mit der Sprachbarriere, wenn man durch verschiedene Länder
            in Europa reist?
          </Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Auch Menschen mit derselben Muttersprache erliegen regelmäßig
            Missverständnissen und Kommunikationsschwierigkeiten. Um einander zu
            verstehen braucht es mehr als nur dieselbe Sprache. Versuch es
            einfach. Such dir die wichtigsten Wörter im Wörterbuch raus: #1
            Danke, #2 Wasser.
          </Trans>
        </p>

        {/* <h2 className="mission-h2">
          <Trans>Warum ist eure Website in 4 Sprachen?</Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Weil unser tägliches Leben in diesen 4 Sprachen stattfindet:
            Englisch für die Arbeit und mit Freunden, wenn Englisch die einzige
            gemeinsame Sprache ist. Portugiesisch in unserer Umgebung und mit
            Freunden, denn wir wohnen in Portugal. Deutsch und Niederländisch
            sprechen wir mit der Familie und mit allen, die Lust haben, Deutsch
            oder Niederländisch zu sprechen.
          </Trans>
        </p> */}
        <h2 className="mission-h2">
          <Trans>
            Wo kann ich das Buch 'Von Moskau zum Nordkap auf dem Fahrrad'
            kaufen?
          </Trans>
        </h2>

        {language === "de" && (
          <p className="mission-content">
            Bei{" "}
            <a
              href="https://www.bod.de/buchshop/catalogsearch/result/?q=Uta+Schulz"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="de"
            >
              BoD
            </a>
            . Suche am besten nach Uta Schulz. Dann findest du alle Titel in
            Deutsch und Englisch. Das Buch hat 168 Seiten und enthält 37
            Farbfotos. Es wird in Deutschland gedruckt.
          </p>
        )}
        {language === "en" && (
          <p className="mission-content">
            The e-book (and soon the hardcover) is available at{" "}
            <a
              href="https://www.amazon.com/Uta-Schulz/e/B09SVCVM7H?ref=sr_ntt_srch_lnk_1&qid=1646236280&sr=1-1"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              Amazon.com
            </a>
            . You can order the paperback at{" "}
            <a
              href="https://www.bod.de/buchshop/catalogsearch/result/?q=From+Moscow+to+the+North+Cape+by+bicycle"
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="de"
            >
              BOD.de
            </a>
            . The book has 168 pages and contains 37 color photos.
          </p>
        )}

        <h2 className="mission-h2">
          <Trans>
            Was ist der Unterschied zwischen den verschiedenen Ausgaben?
          </Trans>
        </h2>
        <p className="mission-content">
          <Trans>
            Auf Deutsch ist 'Von Moskau zum Nordkap auf dem Fahrrad' als E-Book
            (7,99€), Paperback im normalen Farbdruck (12,99€) und als Hardcover
            im Fotodruck (21,99€) erhältlich. Auf Englisch ist das Buch 'From
            Moscow to the North Cape' als E-Book (7,99€) und als Paperback im
            normalen Farbdruck (12,99€) erhältlich.
          </Trans>
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["faq", "nav", "subs"] }
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
    file(relativePath: { eq: "dead-end.jpg" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, width: 800)
      }
    }
  }
`;

export default Faq;
