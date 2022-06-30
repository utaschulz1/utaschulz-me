import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

import "../book/de/Von Moskau zum Nordkap auf dem Fahrrad  - Uta Schulz/OEBPS/Styles/styles.css";

const Try1 = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div>
        <div>
          <h1 className="part">
            –<Trans>TEIL 2</Trans>–
            <br />
            <span className="title">
              Von Moskau zum <br />
              Onegasee
            </span>
          </h1>
          <figure className="img-div-vert">
            <StaticImage
              alt={t(
                "Fahrradroute von Moskau über Rybinsk, Wologda, Kirillow und Wytegra zum Onega-See"
              )}
              src="../book/de/Von Moskau zum Nordkap auf dem Fahrrad  - Uta Schulz/OEBPS/Images/moskau-oneagsee.jpg"
            />
            <figcaption>Karte von Westrussland mit unserer Route</figcaption>
          </figure>
        </div>
      </div>
      <div>
        <section role="doc-chapter" aria-labelledby="t1">
          <header id="t1">
            <h1 className="title">Tag 1</h1>
            <h5 role="doc-subtitle" className="center sigil_not_in_toc">
              Lobnja – Dimitrow, 60 km
            </h5>
          </header>

          <p className="no-indent">
            <span className="dropcap">F</span>ür mich ist es zunächst einmal
            gewöhnungsbedürftig, mit dem Fahrrad im dichten Straßenverkehr
            zwischen Autos und Lkws zu fahren. Da bin ich kein Held.
          </p>

          <p>
            Unsere Wahlheimat Portugal oder besser gesagt der Großraum Lissabon
            hätte sich mit seinem in den Kinderschuhen steckenden
            Fahrradwegenetz natürlich prima als Therapiestrecke für meine
            Verkehrsangst angeboten. Seit wir Lissabon allerdings einmal auf der
            N 118 Richtung Norden verließen, um dem Tagus bis nach Spanien zu
            folgen, habe ich mich für nicht therapierbar erklärt und nehme
            lieber viele Kilometer Umweg auf weniger Lkw-befahrenen Straßen in
            Kauf, als mein Leben zu riskieren. Um es gleich vorwegzunehmen: Die
            unvermeidliche Schocktherapie findet in einer späteren Phase unserer
            Reise in Russland statt (Stichwort Holzlaster). Der Großraum Moskau
            unterscheidet sich indes kaum vom Großraum Berlin, nur eben ohne
            Fahrradwege
          </p>

          <p>
            Einfach stur geradeaus fahren und hoffen, dass alles gut geht. Oder
            noch besser: gar nicht nachdenken. Der Straßenlärm ist anstrengend.
            Die Autoreifen machen viel mehr Lärm als bei uns. Außerdem überholen
            uns viele Straßenbaumaschinen. Nach einer Weile kommen wir auf eine
            ruhigere Straße. Davon ist allerdings eine Hälfte weggefräst und die
            andere so frisch, dass der Asphalt noch warm ist. Wir befinden uns
            in einer endlos langen Baustellenstrecke mit Wechselampelschaltung.
            Pkws und Lkws fahren für mein Gefühl allerdings rücksichtsvoller,
            als ich das beispielsweise in Südeuropa erlebt habe, wo ich so
            manches Mal von enthusiastischen oder genervten Fahrern beim
            Überholen von der Straße gehupt wurde. Hier überholen uns Autofahrer
            ohne unnötiges Hupen. Wenn nicht genug Platz ist, hupen sie einmal
            kurz. Uns wird somit eine faire Chance eingeräumt, schnell noch von
            der Straße zu weichen, bevor ein Fahrzeug beliebiger Größe mit nur
            wenigen Millimetern Abstand an uns vorbeirauscht. Bei der
            verhältnismäßig geringen Auswahl an Straßen in dem riesigen Land
            sind sie scheinbar daran gewöhnt, diese mit allen denkbaren
            Verkehrsmitteln teilen zu müssen. Trotzdem stressen mich die
            ständigen Baulaster. Urlaub will ich das noch nicht nennen.
          </p>

          <p>
            Irgendwann sind wir dann raus aus der Endlosbaustelle und die Straße
            hat wieder einen brauchbaren Seitenstreifen. Wir kommen in Dimitrow
            an und halten an einer großen BP-Tankstelle, weil wir Brennspiritus
            brauchen. Wir haben heute bereits in jedem Laden und an jeder
            Tankstelle nach Brennspiritus gefragt: immer nur Paraffin. In Moskau
            gibt es an allen Bahnhöfen Sicherheitsschranken mit Kontrolleuren
            und Scannern fürs Gepäck. Deshalb haben wir dort gar keinen Gedanken
            daran verschwendet, Spiritus zu kaufen (obwohl es wahrscheinlich
            nicht verboten ist, diesen im Zug mitzunehmen). Andernfalls hätten
            wir schon eher gemerkt, dass es keinen gibt und einen Gaskocher
            anschaffen können.
          </p>

          <p>
            Jetzt, in dieser großen Tankstelle in Dimitrow, mit umfangreicher
            Grillabteilung, gibt es erneut keinen Sprit für unseren Kocher. Na
            gut, dann nicht. Stinkt ja eh nur. Wir trinken stattdessen Kaffee
            und essen Teilchen. Noch können wir überall einkehren, denken wir.
            Dann suchen wir uns am nahegelegenen Moskaukanal einen schönen
            Zeltplatz mit Sonnenuntergang. Für den ersten Tag sind wir genug
            geradelt.
          </p>

          <figure className="img-div">
            <StaticImage
              className="img"
              src="..\book\de\Von Moskau zum Nordkap auf dem Fahrrad  - Uta Schulz\OEBPS\Images\18-05-04.jpg"
              alt="In Dimitrow vor der Uspenski- Kathedrale. Auf dem Platz eine Bronze-Statue von Fürst Yuri Dolgoruky, der die Stadt 1154 gründete."
            />
            <figcaption>In Dimitrow</figcaption>
          </figure>
        </section>

        <div>
          <section role="doc-chapter" aria-labelledby="t2">
            <header id="t2">
              <h1 className="title">Tag 2</h1>
              <h5 role="doc-subtitle" className="center sigil_not_in_toc">
                Dimitrow – Nähe Semjagino, 75 km
              </h5>
            </header>

            <p className="no-indent">
              <span className="dropcap">D</span>
              ie Nacht ist nicht sehr kalt gewesen und ich fand das Geräusch der
              Züge, keine 50 m von uns entfernt, irre romantisch. Wir stellen
              das Zelt zum Trocknen in die Sonne und fahren zurück zur
              Tankstelle an der Hauptstraße, wo wir im Warmen Kaffee trinken und
              essen können. Im Zentrum von Dimitrow macht Menno Fotos von der
              beachtlichen Kathedrale
            </p>

            <p>
              Ich will gerade unseren ersten Tag auf Facebook posten, als uns
              ein älterer Mann, der ein Mountainbike schiebt, erfreut anspricht.
              Er will wissen, woher und wohin. Wir unterhalten uns lange,
              worüber ist nicht ganz klar. Er empfiehlt uns, Landkarten auf
              Papier anzuschaffen und zeigt auf den Buchladen an der Ecke. Denn
              auf diesen hätte er uns gern gezeigt, welche Sehenswürdigkeiten
              wir im Oblast Moskau auf keinen Fall verpassen dürfen. Unsere
              OSM-App ist ihm suspekt. Er findet, dass wir uns schlecht
              vorbereitet haben für eine solch anstrengende Tour. Am Ende frage
              ich ihn noch, ob er weiß, wo man Spiritus kaufen könne.
              <span className="russian" lang="ru">
                У меня есть вопрос
              </span>
              (U menja jest wopros, ich habe eine Frage), beginne ich. Der Mann
              schaut mich erwartungsvoll an, freut sich über den vollständigen
              Satz, und hofft, uns nun helfen zu können: »Spiritus? Für
              Spiritusbrenner? Nein...«, er schüttelt enttäuscht den Kopf, »den
              gibt es hier nicht...« Sein erster Eindruck unserer mangelhaften
              Vorbereitung scheint bestätigt: Keine Papierkarten, kein
              Brennstoff und von unseren Russischkenntnissen ganz zu schweigen.
              Trotzdem gibt er seine Hilfsbereitschaft nicht auf: Er habe selbst
              einen Liter zu Hause, davon könne er uns ein wenig abgeben, bietet
              er unsicher an.
            </p>

            <p>
              Nun, wir wollen seine Gastfreundlichkeit nicht überstrapazieren.
              Brennspiritus gibt es in Russland anscheinend nicht öffentlich zu
              kaufen. Auch Alkohol über 40 % finden wir in den Läden nicht. Wir
              stellen uns auf Kaltessen ein.
            </p>

            <p>
              Verkehrstechnisch geht es heute besser als gestern. Langsam wird
              es ruhiger und wir haben uns an die Nähe der überholenden Laster
              gewöhnt. An einer Tankstelle kaufe ich Wasser und zwei Marsriegel
              und bezahle aus Versehen das Benzin für den nächsten Kunden. Die
              Kassiererin hat gerade wegen Schichtwechsel übellaunig das Bargeld
              gezählt und weder unsere bepackten Fahrräder noch mich vor dem
              Fenster gesehen. Sie hat also keine Ahnung, dass ich kein Benzin
              kaufen will und auch nicht, dass ich vermutlich Ausländerin bin
              und sie eventuell nicht verstehe. An der Kasse nuschelt sie
              irgendetwas in meine Richtung, das ich als »mit Karte?«
              interpretiere und bejahe. Da haben wir uns wohl falsch verstanden:
              Es war die Nummer der Pumpe. Ich schaue gerade auf den hohen
              Betrag auf meinem Kartenzahlungsbon – die Kasse hat sie ja nicht
              benutzt – als der nächste Kunde sein Benzin bezahlen möchte. Geht
              nicht, ist schon. Die Kassiererin schaut von ihrem Geldhaufen auf,
              sieht mich, die Fahrräder, begreift. Ihre Laune sackt auf den
              absoluten Nullpunkt. Welch eine Verwirrung und auch noch mit Karte
              bezahlt! Nach einer langen Schicht ist sie zu einer Lösung in
              meiner Sache weder fähig noch willig und starrt uns angepisst an.
              Ganz anders der Kunde, dessen Sprit auf meine Rechnung ging. Er
              ist zum Glück noch frisch und gibt mir den Betrag
              geistesgegenwärtig in bar. So ist glücklicherweise doch alles
              rasch geregelt.
            </p>

            <p>
              Die Straße nach Taldom ist dann wieder anstrengend, voller Laster
              und ohne Seitenstreifen. Das haben wir uns beim Blick auf die
              Karte schon gedacht und zwischen den spärlichen Nebenstraßen nach
              einer Alternative gesucht. Wir biegen auf eine kleinere Sandstraße
              ab. Zuerst fahren wir durch ein Dorf, in dem eine große Maschine
              die Sandstraße für den Asphalt vorbereitet. Wir quetschen uns
              durch den schmalen Streifen zwischen Walze und Zaun und überholen
              sie – aber falsch! Wir müssen wieder umdrehen und durch die
              Baustelle zurück. Mitten in der Baustelle halten wir beim
              Dorfladen und kaufen ein, woraufhin die Walze erneut an uns
              vorbeizieht. Der Laden bebt. Die freundliche Dame hinter der Theke
              fragt sich allen Ernstes, ob wir eigentlich eine Landkarte haben,
              wie sonst würden wir wohl hier landen? Verrückt findet sie unseren
              Plan natürlich – von Moskau nach Norwegen…
              <span className="russian" lang="ru">
                патриота
              </span>{" "}
              (Patriot), was auch immer sie damit meinen mag, sagt sie
              kopfschüttelnd und lacht.
            </p>

            <p>
              Wir fahren mit angehaltenem Atem erneut an der Walze vorbei,
              zwängen uns an einem Abpumptanker entlang und biegen auf die
              richtige Sandstraße ab, welche – ein schlechtes Zeichen - von
              Traktoren genutzt wird. Und tatsächlich, nach kurzer Zeit wird die
              Straße zu einem matschigen Landwirtschaftsweg mit riesigen Pfützen
              und wir brauchen ewig für die 4 km. Allerdings ist die Route
              unschlagbar ruhig und wir sehen Spuren von einem sehr großen Hund,
              aber ohne menschlichen Begleiter. Apropos Hunde. Mit denen hatten
              wir, entgegen unseren Erwartungen, noch keine Probleme. Bisher
              begegneten uns nur brave, ruhige Hunde und zweimal ein
              Kettenbeller, sonst nichts, niente, nitschewo. Freilaufende, wilde
              Hunde oder aggressive Dorfköter wie in Portugal: null. Damit ist
              eine meiner größten Sorgen unbegründet und soll es auch bleiben.
              Das erhoffte Urlaubsgefühl stellt sich langsam ein.
            </p>

            <p>
              Wir erreichen eine ruhige Asphaltstraße. Meine dünnen
              Billigschnorchelschuhe beweisen sich hier als praktisch. Ich kann
              sie nach der Schlammpartie einfach abspülen und sie trocknen
              schnell wieder. Am Nachmittag führt uns unsere Route wieder auf
              einen unbefestigten, mit Gras bewachsenen Weg, an dem wir unser
              Zelt aufschlagen. Wir hören haufenweise uns unbekannten
              Vogelgesang (zu Hause gibt es nur Tauben und Möwen). Zum
              Abendessen gibt es kalte Küche: Brot mit Wurst und Räucherkäse,
              Gurken, Tomaten und Rote-Beete-Salat. Dann sind nur noch Kekse und
              Knabberzeug übrig. Vielleicht sollten wir mehr Kalorien einplanen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Try1;
