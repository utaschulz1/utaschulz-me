import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import BuyButton from "../utils/buyButton";
import "../styles/book.css";
import SampleDownload from "../utils/sampleDownload";

const BookPage = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const coverDe = data.coverde.childImageSharp.fixed.src;
  const coverEn = data.coveren.childImageSharp.fixed.src;

  // const lng = language;
  // let isbn;
  let img;
  if (language === "de") {
    // isbn = "9783755793021";
    img = coverDe;
  } else if (language === "en") {
    // isbn = "9783755792734";
    img = coverEn;
  }
  // else if (language === "nl") {
  //   isbn = ""
  // } else {
  //   isbn = ""
  // }

  return (
    <Layout>
      <Seo
        // type={"website"}
        position={2}
        title={t("Von Moskau zum Nordkap auf dem Fahrrad - Reisebericht")}
        description={t(
          "Radwandern im Nordosten Europas. 60 Tage mit Fahrrad und Zelt durch Russland, Finnland, Lappland und Norwegen. Spannender Reisebericht zum Nachradeln mit vielen Fotos. Leseprobe, Galerie, GPS-Route herunterladen."
        )}
        // author={"Uta schulz"}
        // isbn={isbn}
        // release_date={"2022-02-18"}
        image={img}
        imgAlt={
          t("Buchumschlag") +
          ", " +
          t("Von Moskau zum Nordkap auf dem Fahrrad - Reisebericht")
        }
      />
      <div className="book-page-wrapper">
        <h1 className="title">
          <Trans>Von Moskau Zum Nordkapp</Trans>
          <br />
          <Trans>auf dem Fahrrad</Trans>
        </h1>
        <div className="cover">
          {language === "de" && (
            <StaticImage
              alt={t("Buchumschlag")}
              src="../images/cover-de.jpg"
              placeholder="blurred"
              loading="eager"
              width={1200}
            />
          )}
          {language === "en" && (
            <StaticImage
              alt={t("Buchumschlag")}
              src="../images/cover-en.jpg"
              placeholder="blurred"
              loading="eager"
              width={1200}
            />
          )}
        </div>
        <div className="txt">
          <p>
            <Trans>
              Die OSM-Karte punktet heute besonders, weil sie Trinkwasserstellen
              anzeigt. Direkt neben dem Bahnübergang ist eine Pumpe. Es ist
              mittlerweile sehr warm, beinahe 30 °C. Wir füllen alles auf, was
              wir an Behältern haben. Ein Mann kommt aus seinem Hof gelaufen und
              will seine Eimer füllen. Menno fragt, ob er ein Foto machen darf.
              »Klar«, sagt Sergej und lädt uns direkt zum Tee ein.
            </Trans>
          </p>
          <p>
            <Trans>
              Begegnungen, Gastfreundschaft, verlassene Dörfer und einsame
              Landstriche: Dieses Tagebuch nimmt euch mit auf die 4000 Kilometer
              lange Reise durch wenig besuchte Ecken dreier Länder im Nordosten
              Europas. Mit Fahrrad und Zelt radeln wir fernab vom Tourismus von
              Russland nach Karelien, durch Finnland und über den Polarkreis.
              Mit uns zieht auch der Frühling gen Norden, samt Blumenwiesen,
              Kuckucksruf und Mückenschwärmen. 60 Tage lang erleben wir statt
              Alltag Abenteuer und treten statt im Hamsterrad auf dem Fahrrad.
            </Trans>
          </p>
          <p>
            <Trans>Kapitel:</Trans>
          </p>
          <ol>
            <li>
              <Trans>Reisevorbereitungen - Fahrräder und Reiseausrüstung</Trans>
            </li>
            <li>
              <Trans>
                Von Moskau zum Onegasee - auf dem Fahrrad in Russland:
                Hauptstadt, Goldener Ring, Wologda, Kirilow
              </Trans>
            </li>
            <li>
              <Trans>
                Karelien - der große Onegasee, ein Bär, Medwjeschegorsk,
                Staubwege, Holzlaster und FSB
              </Trans>
            </li>
            <li>
              <Trans>
                Finnland - fantastische Campingstellen, jede Menge Regen
              </Trans>
            </li>
            <li>
              <Trans>Lappland - Rentiere, Holzhütten im Wald</Trans>
            </li>
            <li>
              <Trans>Norwegen - Barentssee, weite Landschaften</Trans>
            </li>
          </ol>
          <p>
            <Trans>
              Das Buch ist mit 37 farbigen Fotos und Karten mit der Route
              illustriert.
            </Trans>
          </p>
          <div className="book-buttons">
            <SampleDownload />
            <BuyButton />
          </div>
          <div className="img">
            <figure>
              <StaticImage
                alt={t(
                  "Fahrradroute von Moskau über Rybinsk, Wologda, Kirillow und Wytegra zum Onega-See"
                )}
                src="..\images\moskau-oneagsee.jpg"
              />
              <figcaption>
                <Trans>Karte von Westrussland mit unserer Route</Trans>
              </figcaption>
            </figure>
          </div>
        </div>
        <h2 className="h2-title">
          <Trans>Tag 2 Dimitrow – Nähe Semjagino, 75 km</Trans>
        </h2>
        <div className="txt">
          {language === "de" && (
            <p>
              [...] Ich will gerade unseren ersten Tag auf Facebook posten, als
              uns ein älterer Mann, der ein Mountainbike schiebt, erfreut
              anspricht. Er will wissen, woher und wohin. Wir unterhalten uns
              lange, worüber ist nicht ganz klar. Er empfiehlt uns, Landkarten
              auf Papier anzuschaffen und zeigt auf den Buchladen an der Ecke.
              Denn auf diesen hätte er uns gern gezeigt, welche
              Sehenswürdigkeiten wir im Oblast Moskau auf keinen Fall verpassen
              dürfen. Unsere OSM-App ist ihm suspekt. Er findet, dass wir uns
              schlecht vorbereitet haben für eine solch anstrengende Tour. Am
              Ende frage ich ihn noch, ob er weiß, wo man Spiritus kaufen könne.{" "}
              <span lang="ru">У меня есть вопрос</span> (U menja jest wopros,
              ich habe eine Frage), beginne ich. Der Mann schaut mich
              erwartungsvoll an, freut sich über den vollständigen Satz, und
              hofft, uns nun helfen zu können: »Spiritus? Für Spiritusbrenner?
              Nein...«, er schüttelt enttäuscht den Kopf, »den gibt es hier
              nicht...« Sein erster Eindruck unserer mangelhaften Vorbereitung
              scheint bestätigt: Keine Papierkarten, kein Brennstoff und von
              unseren Russischkenntnissen ganz zu schweigen. Trotzdem gibt er
              seine Hilfsbereitschaft nicht auf: Er habe selbst einen Liter zu
              Hause, davon könne er uns ein wenig abgeben, bietet er unsicher
              an.
            </p>
          )}
          {language === "en" && (
            <p>
              [...] I’m just about to post on Facebook about our first day when
              an older gentleman pushing a mountain bike approaches and is
              delighted to speak with us. He wants to know where we’re from and
              where we’re heading. We have a long conversation, the subject of
              which isn’t entirely clear. He recommends that we buy paper maps
              and points to the bookshop on the corner. He would’ve shown us on
              a papermap the sights in Oblast Moscow we absolutely shouldn’t
              miss. He finds our OSM app suspect and thinks we’re unprepared for
              such a difficult tour. I end up asking him if he knows where we
              can get denatured alcohol. I start with{" "}
              <span lang="ru">У меня ест вопрос</span> (oo minya yest vopros; I
              have a question). He stares at me expectantly, happy to hear a
              complete sentence and hoping he can finally help us. “Denatured
              alcohol? For an alcohol stove? No, we don’t have that here.” This
              probably confirms his impression regarding our preparations: No
              paper maps, and no fuel. Not to mention our limited knowledge of
              Russian. Nevertheless, he continues trying to help us. He has a
              liter of alcohol at home and could give us some of it, he says
              hesitantly. Okay, apparently there is no fuel alcohol in Russia.
              We haven’t found any alcohol over 40% in the stores. So we give up
              for the time being and resign ourselves to cold food.
            </p>
          )}
          <p>
            <Trans>
              Nun, wir wollen seine Gastfreundlichkeit nicht überstrapazieren.
              Brennspiritus gibt es in Russland anscheinend nicht öffentlich zu
              kaufen. Auch Alkohol über 40 % finden wir in den Läden nicht. Wir
              stellen uns auf Kaltessen ein.
            </Trans>
          </p>
          <p>
            <Trans>
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
            </Trans>{" "}
            [...]
          </p>
          <div className="book-buttons">
            <SampleDownload />
            <BuyButton />
          </div>
        </div>
        <h2 className="h2-title">
          <Trans>Tag 3 Semjagino – Nähe Malachowo, 91 km</Trans>
        </h2>
        <div className="txt">
          {language === "de" && (
            <p>
              [...] Ein Schild macht uns darauf aufmerksam, dass wir den Oblast
              Moskau verlassen und uns nun im Oblast Twer befinden. Es wird
              direkt ruhiger auf der Straße. An den Strommasten am Straßenrand
              sind Holzschilder mit den Worten <span lang="ru">Tворог</span>{" "}
              (Tworog), <span lang="ru">сыр</span> (Syr),{" "}
              <span lang="ru">молоко</span>
              (Moloko) und <span lang="ru">сметана</span> (Smetana) angebracht.
              Gut, wenn man zumindest die Wörter für Nahrungsmittel auf Russisch
              kennt. Tworog ist eine Art körniger weißer Käse, aber viel
              kräftiger als Hüttenkäse, Syr ist normaler junger Käse, wie wir
              ihn kennen, Moloko heißt Milch und Smetana saure Sahne. Mit
              knurrendem Magen biegen wir zum Milchbauern ab. Der Hof sieht nach
              Ökobauer aus. Nicht, dass ich viel Ahnung von Landwirtschaft
              hätte, aber ich sehe zumindest keinen geschlossenen Stall mit
              Abluftanlage und Silo, große Maschinen oder schnurgerade Furchen
              auf dem Feld. Vorne am Weg steht ein Holzhaus. Kinderwagen,
              Fahrräder, Spielzeug. Kein Hund. Zurückgesetzt wird eine große
              Scheune oder vielleicht ein weiteres Haus gebaut, alles aus Holz.
              Der Bauer kommt mit großen Schritten über das Feld auf uns zu,
              lacht uns an und begrüßt uns mit einem kräftigen Händedruck und
              einem
              <span lang="ru">Добро пожаловать</span> (Dobro Poschalowatj,
              herzlich willkommen). Er nimmt uns mit ins Haus, in die kleine
              Küche, die als Verkaufsraum dient, und ruft seine Frau, die mit
              drei kleinen Kindern im Schlepptau die Treppe herunterkommt. Die
              beiden lassen uns den Tworog und die Sahne kosten, sehr
              schmackhaft. Der Bauer füllt aus einem Eimer eine große
              PET-Flasche mit Milch ab, aus einem anderen Eimer Tworog in eine
              Plastiktüte, außerdem aus einem großen Glas noch Sahne in einen
              Becher. Auch Speck wird uns angeboten, brauchen wir aber nicht.
              Wir zahlen umgerechnet etwa 3 € und trinken direkt ein paar große
              Schlucke aus der Milchflasche gegen den Hunger. Der Bauer schickt
              uns mit dem ältesten Kind, einem etwa 8-jährigen Mädchen, auf den
              Hof. Sie soll uns alles zeigen: die Schweine, das Gemüse, die
              Kaninchen und das neue Kälbchen [...]
            </p>
          )}
          {language === "en" && (
            <p>
              [...] A sign tells us we’ve left the Moscow region, and are now in
              Oblast Twer. The street immediately becomes quieter. There are
              wooden signs on electricity poles with the words{" "}
              <span lang="ru">творог, сур, молоко</span> and{" "}
              <span lang="ru">сметана</span>. It’s good to know at least the
              Russian words for food: <span lang="ru">творог</span> (tvorog) is
              a grainy white cheese, much stronger than cottage cheese and cyp
              (syr) is what we’d call a young cheese.{" "}
              <span lang="ru">Молоко</span> (moloko) means milk and{" "}
              <span lang="ru">сметана</span> (smetana) means sour cream. With
              our stomachs growling, we turn toward the dairy farm. It looks
              organic. Not that I know much about agriculture, but at least I
              don’t see a closed stable with an exhaust system and silo, or
              perfectly straight furrows in the field. There’s a wooden house in
              front of the path. Strollers, bicycles, toys. No dog. In the back
              a large barn or maybe another wooden house will be built from
              wood. The farmer takes big strides towards us. He smiles and
              greets us with a firm handshake and{" "}
              <span lang="ru">Добро пожаловать</span> (dobra pazhalavatch;
              welcome). He takes us into the house, to the small kitchen that
              also serves as a salesroom, and calls for his wife, who comes down
              the stairs with three small children in tow. They let us taste the
              tvorog and the sour cream, which are very tasty. The farmer fills
              up a PET bottle with milk from a bucket, a plastic bag with tvorog
              from another bucket, and a mug with sour cream from a large glass.
              We’re also offered bacon, but we don’t need any. We pay the
              equivalent of around € 3, and immediately take a few gulps of milk
              to assuage our hunger. Then the farmer sends us out on the farm
              with the eldest child (a girl of about 8) to show us everything:
              pigs, vegetables, rabbits, and a new calf. [...]
            </p>
          )}
          <div className="book-buttons">
            <SampleDownload />
            <BuyButton />
          </div>
        </div>
        <h2 className="h2-title">
          <Trans>Tag 4 Malachowo – Uglitsch – Utschma, 68 km</Trans>
        </h2>
        <div className="txt">
          <p>
            [...]{" "}
            <Trans>
              Am späten Nachmittag sehen wir ein Schild Museumsdorf. Der Ort
              heißt Utschma. Wir sind in Sightseeing-Laune und biegen ab, fahren
              zunächst durch ein normales kleines Dorf mit ein oder zwei Wegen
              und kommen beim vorletzten Hof am Museum an. Auf dem nicht allzu
              großen Gelände stehen mehrere Holzhäuser, die nicht wie sonst in
              bunten Farben bemalt, sondern naturbelassen und mit den typischen
              Nalitschniki versehen sind, den aufwendigen Verzierungen an
              Fensterrahmen und Giebeln.
            </Trans>
          </p>
          <p>
            <Trans>
              Wir stellen die Räder auf dem Weg vor dem Eingang ab und öffnen
              das Tor. Ein großer Hund liegt träge in der Sonne und blinzelt uns
              an. Die Nachmittagssonne taucht das Ensemble in goldenes Licht,
              ein paar Gänse wackeln über das Gras. Das Gelände fällt zum Fluss
              hin ab und geht nahtlos in Sumpf und dann in die Wolga über. Aus
              einem der Gebäude hören wir Filmgeräusche und öffnen die Tür. Eine
              Frau empfängt uns. Sie spricht Englisch. Wir sind im Museum Das
              russische Dorf, in dem das Leben des Dorfes von Nachkriegsrussland
              bis Perestroika ausgestellt ist.
            </Trans>
          </p>
          <div className="img">
            <figure>
              <StaticImage
                alt={t(
                  "Uta steht hinter der Theke des Ladens aus früheren Zeiten und spielt mit dem Abakus. Zu sehen sind Produkte von früher und eine alte Waage."
                )}
                src="..\images\oldshop.jpg"
              />
              <figcaption>
                <Trans>
                  Einkaufen früher: im Netz die Papirossy, statt Kasse ein
                  Abakus
                </Trans>
              </figcaption>
            </figure>
          </div>
          <p>
            <Trans>
              Hier gab es Viehzucht und Fischerei. Landwirtschaft natürlich
              auch. Wir schauen uns Werkzeuge, Kleidung und Einrichtung von
              damals an und machen lustige Fotos mit den historischen
              Sowjet-Accessoires. Heutzutage, meint die Frau vom Museum, fische
              hier keiner mehr. Kommerzieller Fischfang sei sogar untersagt. Und
              Landwirtschaft gebe es auch keine mehr. »Eine Tragödie für
              Russland«, sagt sie. Vielleicht sollte ich ihr von dem Ökobauern
              70 km weiter südlich erzählen?
            </Trans>
          </p>
          <p>
            <Trans>
              Vermutlich will sie darauf hinaus, dass in den Supermärkten kein
              Obst und Gemüse aus Russland zu finden ist. Das ist uns schon
              aufgefallen. Auch in den kleinen Läden auf den Dörfern gibt es nur
              sehr begrenzt Obst und Gemüse. Jetzt wächst ja noch nichts.
              Natürlich will sie wissen, wie es uns hierher verschlagen hat und
              wie unsere Route aussieht. Menno will ihr unsere Route auf seinem
              Handy zeigen, als ihm auffällt, dass er es im Handyhalter auf dem
              Fahrrad vergessen hat.
            </Trans>{" "}
            [...]
          </p>
          <div className="book-buttons">
            <SampleDownload />
            <BuyButton />
          </div>
        </div>
        <div className="img">
          <figure>
            <StaticImage
              alt={t(
                "Fahrradroute vom Onega-See über Petrosawodsk, Medweschegorsk, Porososero und Wjartsila nach Finnland."
              )}
              src="..\images\karelien.jpg"
            />
            <figcaption>
              <Trans>Karte von Karelien mit unserer Route</Trans>
            </figcaption>
          </figure>
        </div>
        <h2 className="h2-title">
          <Trans>Tag 18 Petrosawodsk – Velikaja Guba, 90 km (per Fähre)</Trans>
        </h2>
        <div className="txt">
          {language === "de" && (
            <p>
              [...] So fahren wir zur Fähre und warten bis 18 Uhr ab. Es sind
              schon etliche Leute da, die auch warten, alle mit Großeinkäufen,
              viele mit Pflanzen. Eine Frau fragt mich, ob ich mal ein Auge auf
              ihre Taschen haben könne. »Ja, sicher.« Sie kommt zurück und
              beginnt, uns auszufragen. Woher, wohin, weshalb. Sie sagt, sie sei
              aus finnisch Karelien, lebe hier in Petrosawodsk und habe eine
              Datscha auf Kischi. Da wolle sie jetzt hin. Sie will genau wissen,
              wo uns unsere Reise entlangführt. Irgendwie ist sie nicht so
              richtig zufrieden mit meinen Antworten. Sie zeigt auf Menno:{" "}
              <span lang="ru">он тоже не говорит по-русски</span>? (On tosche
              nje govorit po russki, spricht er auch kein Russisch?) Was soll
              das denn heißen, <span lang="ru">тоже</span>!? Ich schlage mich
              nun schon seit einer Viertelstunde auf Russisch durch diese
              Unterhaltung und dann fragt sie, ob der »auch« kein Russisch
              könne. »Nein«, sage ich. Dann zieht sie eine 8-fach gefaltete
              karelische Zeitung aus ihrer mittelgroßen Damenhandtasche und hält
              mir die finnischsprachige Titelseite unter die Nase. »Hier, das
              bin ich«, sagt sie. Dann spricht sie finnisch. Ich versichere ihr
              auf Deutsch, dass mein Finnisch zweifelsfrei noch schlechter sei
              als mein Russisch und sie schaltet wieder zurück.
            </p>
          )}
          {language === "en" && (
            <p>
              [...] So we drive to the ferry and wait until 6 p.m. There are
              already quite a few people waiting, all with bulk purchases, many
              with plants. A woman asks me if I can keep an eye on her bags.
              Yes, of course. When she comes back, she starts interrogating us.
              Where from, where to, why. She says she is from Finnish Karelia,
              lives here in Petrozavodsk and has a dacha in Kizhi. That’s where
              she’s headed now. She wants to know exactly where our journey will
              take us. Somehow she’s not really happy with my answers. She
              points to Menno:{" "}
              <span lang="ru">Он тоже не говорит по-русски</span>? (on tosche
              nje govorit po russki), he also doesn’t speak Russian? What’s that
              supposed to mean, <span lang="ru">тоже</span>!? I’ve been
              struggling through this conversation in Russian for a quarter of
              an hour and then she asks whether he “also” doesn’t speak Russian?
              No, I say.
            </p>
          )}
          <p>
            <Trans>
              Sie habe diesen Artikel anlässlich der 9.-Mai-Demo geschrieben,
              die auf der Titelseite abgebildet ist, verstehe ich. Auf dem Bild
              hält die Frau ein Schild mit einem Foto aus den Vierzigern hoch,
              auf dem eine junge Frau zu sehen ist. Ihre Schwester, erklärt sie,
              Ärztin, sehr schön sei sie gewesen. Vermutlich hat sie den Krieg
              nicht überlebt. Dann folgen Jahreszahlen und Kriegsereignisse,
              denen ich nicht folgen kann. Karelien als Republik bleibt für uns
              auch nach dem Studium des Wikipedia-Artikels ein unscharfer
              autonomer Landstrich, der das Ergebnis mehrerer verschwommener
              Kriege zu sein scheint.
            </Trans>
          </p>
          {language === "de" && (
            <p>
              Immerhin erkenne ich, dass ich eine Regionalpatriotin vor mir
              habe, mache eine wissbegierige Mine und zeige, dass ich
              Informationen aufnehme, indem ich ab und an Wortfetzen ihrer
              Erzählung wiederhole. Plötzlich schaut sie wieder streng zu Menno:
              »Ist das dein Mann?« »Ja«, sage ich und befürchte, dass Menno
              nicht den angemessenen Gesichtsausdruck gezeigt hat. »Habt ihr
              Kinder?« »Nein.« »Wollt ihr welche?« Vorsicht, Glatteis!{" "}
              <span lang="ru">Может быть</span> (Moschet bytj, vielleicht), sage
              ich und ahne Schlimmes. Tatsächlich schaut sie wieder streng zu
              Menno. Keine Ahnung, was ihr Problem ist.{" "}
              <span lang="ru">И он? Он хочет?</span> (I on? On chotschet?) Und
              er, will er?. [...]
            </p>
          )}
          {language === "en" && (
            <p>
              In any case, I recognize that I’m looking at a regional patriot. I
              make a teachable face and emphasize my receptivity by now and then
              repeating her phrases. Suddenly she looks sternly at Menno again:
              Is that your husband? Yes, I say, and fear that Menno is not
              sporting the appropriate facial expression. Do you have children?
              No. Do you want some? A minefield!{" "}
              <span lang="ru">Может быть</span> (moschet byitj), maybe, I say
              and sense something bad is coming. In fact, she looks sternly at
              Menno again. I have no idea what her problem is. И он? Он хочет?
              And him? Does he want them? [...]
            </p>
          )}
          <div className="book-buttons">
            <SampleDownload />
            <BuyButton />
          </div>
        </div>
        <h2 className="h2-title">
          <Trans>Tag 24 Porososero – Liepaniemi, 78 km</Trans>
        </h2>
        <div className="txt">
          <p>
            [...]{" "}
            <Trans>
              In Lachkolampi wollen wir Eis kaufen. Wir stehen an, als ein Mann
              in Uniform inklusive Uniformmütze reinkommt und irgendetwas in die
              Runde blafft. Außer uns und der Verkäuferin stehen eine Frau, ein
              Paar und noch drei Kinder im Laden, die schon seit unserer Ankunft
              mit einem Schokoriegel und einer Tafel Milka-Schokolade in der
              Hand dort herumlungern und uns neugierig mustern. Niemand
              antwortet. Der Uniformierte spricht mich direkt an. Ich sage ihm,
              dass ich kein Russisch spreche. Er sagt wieder einen Satz, den ich
              nicht verstehe, wahrscheinlich Amtsrussisch, so etwas wie: Weisen
              Sie sich aus! Ob das auf Russisch auch so lustig zweideutig ist
              wie im Deutschen? »Passport!«, fällt der Uniformmütze dann doch
              noch ein.
            </Trans>
          </p>
          {language === "de" && (
            <p>
              Ich laufe mit ihm nach draußen zu den Fahrrädern und zeige meinen
              Pass. Menno kommt auch.{" "}
              <span lang="ru">Вы тоже не говорите по русски</span>? (Wyi tosche
              ne govoritje po russki?), fragt er Menno. »Nein, auch kein
              Russisch.« »Ich spreche Englisch«, sage ich. »Google«, sagt er nur
              und lacht. Er holt sein Handy raus und will die Pässe mit den
              Migrationspapierchen fotografieren. Der Wind bläst das Papier aber
              immer weg. Kooperativ halte ich Pass und Papierchen fest, sodass
              er unsere Pässe fotografieren kann. Er ist mit einem zivilen Auto
              da, einem recht schäbigen Kleinwagen. Ich tippe mit dem
              Zeigefinger auf seine Marke und lese laut: »Ka-re-li-en.« Er nickt
              beifällig. Ich frage, als könne ich seine Marke nicht selbst
              lesen: <span lang="ru">Вы полиция или армия</span>? (Wyi polizia
              ili armia?) Sind Sie Polizei oder Militär?.{" "}
              <span lang="ru">ФСБ</span> (FSB), antwortet er geduldig, während
              er in der prallen Sonne auf seinem Handy herumtippt.
            </p>
          )}
          {language === "en" && (
            <p>
              I walk with him outside to the bikes and show him my passport.
              Menno comes too.{" "}
              <span lang="ru">Вы тоже не говорите по русски</span>? (Vi tozhe ne
              gavarite pa ruski), he asks Menno. No, he doesn’t speak Russian
              either. I speak English, I say. “Google,” he says and laughs. He
              takes out his cell phone and wants to photograph the passports
              with the migration papers. The wind keeps blowing the paper away.
              Cooperatively, I hold the passport and paper so that he can
              photograph our passports. He’s there with a civilian car, a rather
              shabby small car. I tap his tag with my index finger and read
              aloud: Ka-re-li-a. He nods approvingly. I ask as if I could not
              read his stamp myself: <span lang="ru">Вы полиция или армия</span>
              ? Are you police or military, <span lang="ru">ФСБ</span>, FSB, he
              answers patiently while typing on his cell phone in the blazing
              sun. Aha, so he’s actually just surprised to see us here and now
              of course curious. It’s fine. As a foreigner, you’re likely to be
              stopped by the FSB near the border. I’d expected controls much
              earlier.
            </p>
          )}
          <p>
            <Trans>
              Aha, er ist also tatsächlich nur überrascht, uns hier zu sehen,
              und neugierig. Das ist gut. Dass man als Ausländer in Grenznähe
              vom FSB angehalten wird, ist ja wahrscheinlich. Ich habe schon
              viel früher mit Kontrollen gerechnet. Die Mütze ist fertig damit,
              die Fotos zu verschicken. »Google Perewodschik«, ruft er in sein
              Handy. Google fragt uns nach unserer Route. Ich erkläre sie ihm.
              Er will sehen, wo wir waren. Als ich ihm den Track auf OSM zeige,
              wird er munter, schaut ihn sich genau an. Dann will er wissen,
              wann genau wir angekommen sind. »Am 30. April.« Er zählt an seinen
              Fingerknöcheln ab, ob es einen 31. April gibt. Das ist wichtig,
              wenn wir am 29. Mai, dem Ende unseres Visas, ausreisen wollen,
              sowie für unseren Aufenthalt vom Ankunftstag bis zum 2. Mai in
              Moskau, womöglich mehr als die erlaubten drei Tage ohne Meldung.
              Seine Knöchel bestätigen, einen 31. gibt es im April nicht, und
              alles hat seine Richtigkeit.
            </Trans>
          </p>
          {language === "de" && (
            <p>
              Der Google-Übersetzer fragt uns nun, ob wir einen Marshall-Plan
              haben – <span lang="ru">Маршрутная листа</span> (Marschrutnaja
              Lista) steht bei Ausgangssprache, also einen Routenplan. Nein,
              einen Marshall-Plan haben wir leider nicht, gestehen wir ratlos
              und machen ernste Gesichter, nur Open-Street-Map auf dem Handy
              eben. Die Mütze ruft seinen Kollegen Aleksej an und erzählt, wen
              er vor sich hat: »Deutsche, und alles mit dem Fahrrad«, sagt er am
              Ende noch. [...]
            </p>
          )}
          {language === "en" && (
            <p>
              Uniform Cap is finished sending photos.“Google Perevodshik,” he
              says into his cell phone. Google asks us for our route. I explain
              it. He wants to see where we’ve been. When I show him the track on
              OSM, he perks up and looks at it closely. He wants to know exactly
              when we arrived. April 30th. He counts on his knuckles to see if
              there is an April 31st. There isn’t. This is important if we leave
              on May 29th and stayed in Moscow on May 1st and 2nd, and wisely
              nowhere more than three days. The Google translator is now asking
              us if we have a Marshall plan -{" "}
              <span lang="ru">Маршрутная листа</span> (marshrutnaya lista) in
              the original, i.e. a route plan. No, unfortunately we don’t have a
              Marshall Plan, we confess cluelessly and make serious faces, just
              Open Street Map on the mobile phone. Mr. Cap calls his colleague
              Aleksei and tells him who he has here: Germans, and all by
              bicycle, he concludes. [...]
            </p>
          )}
          <div className="book-buttons">
            <SampleDownload />
            <BuyButton />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookPage;

export const query = graphql`
  query ($language: String) {
    locales: allLocale(
      filter: {
        ns: { in: ["buch", "nav", "subs"] }
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
    coverde: file(relativePath: { eq: "cover-de.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          src
        }
      }
    }
    coveren: file(relativePath: { eq: "cover-en.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          src
        }
      }
    }
  }
`;

// const imgQuery = graphql`
//   query {
//     coverde: file(relativePath: { eq: "cover-de.jpg" }) {
//       childImageSharp {
//         fixed(width: 500) {
//           srcWebp
//         }
//       }
//     }
//     coveren: file(relativePath: { eq: "cover-en.jpg" }) {
//       childImageSharp {
//         fixed(width: 500) {
//           srcWebp
//         }
//       }
//     }
//   }
// `;
