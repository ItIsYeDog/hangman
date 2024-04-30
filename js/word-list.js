const wordList = [
    {
        word: "gitar",
        hint: "Et musikkinstrument med strenger."
    },
    {
        word: "oksygen",
        hint: "En fargeløs, luktfri gass som er essensiell for livet."
    },
    {
        word: "fjell",
        hint: "En stor naturlig heving av jordens overflate."
    },
    {
        word: "maleri",
        hint: "En kunstform som bruker farger på en overflate for å skape bilder eller uttrykk."
    },
    {
        word: "astronomi",
        hint: "Den vitenskapelige studien av himmellegemer og fenomener."
    },
    {
        word: "fotball",
        hint: "En populær idrett som spilles med en rund ball."
    },
    {
        word: "sjokolade",
        hint: "En søt godbit laget av kakaobønner."
    },
    {
        word: "sommerfugl",
        hint: "Et insekt med fargerike vinger og en slank kropp."
    },
    {
        word: "historie",
        hint: "Studiet av tidligere hendelser og menneskelig sivilisasjon."
    },
    {
        word: "pizza",
        hint: "En smaksrik rett bestående av en rund, flat base med pålegg."
    },
    {
        word: "jazz",
        hint: "En sjanger av musikk preget av improvisasjon og synkope."
    },
    {
        word: "kamera",
        hint: "En enhet brukt til å fange og spille inn bilder eller videoer."
    },
    {
        word: "diamant",
        hint: "En verdifull edelsten kjent for sin glans og hardhet."
    },
    {
        word: "eventyr",
        hint: "En spennende eller dristig opplevelse."
    },
    {
        word: "vitenskap",
        hint: "Den systematiske studien av strukturen og atferden til den fysiske og naturlige verden."
    },
    {
        word: "sykkel",
        hint: "Et menneskedrevet kjøretøy med to hjul."
    },
    {
        word: "solnedgang",
        hint: "Den daglige forsvinningen av solen under horisonten."
    },
    {
        word: "kaffe",
        hint: "En populær koffeinholdig drikke laget av ristede kaffebønner."
    },
    {
        word: "dans",
        hint: "En rytmisk bevegelse av kroppen ofte utført til musikk."
    },
    {
        word: "galakse",
        hint: "Et enormt system av stjerner, gass og støv holdt sammen av tyngdekraften."
    },
    {
        word: "orkester",
        hint: "Et stort ensemble av musikere som spiller ulike instrumenter."
    },
    {
        word: "vulkan",
        hint: "Et fjell eller en høyde med et hull gjennom hvilket lava, steinfragmenter, varm damp og gass blir utstøtt."
    },
    {
        word: "roman",
        hint: "Et langt fiktivt verk, vanligvis med en kompleks handling og karakterer."
    },
    {
        word: "skulptur",
        hint: "En tredimensjonal kunstform skapt ved å forme eller kombinere materialer."
    },
    {
        word: "symfoni",
        hint: "En lang musikalsk komposisjon for et fullt orkester, vanligvis i flere satser."
    },
    {
        word: "arkitektur",
        hint: "Kunsten og vitenskapen om å designe og konstruere bygninger."
    },
    {
        word: "ballett",
        hint: "En klassisk danseform preget av presise og grasiøse bevegelser."
    },
    {
        word: "astronaut",
        hint: "En person trent til å reise og jobbe i rommet."
    },
    {
        word: "foss",
        hint: "En foss av vann som faller fra en høyde."
    },
    {
        word: "teknologi",
        hint: "Anvendelsen av vitenskapelig kunnskap til praktiske formål."
    },
    {
        word: "regnbue",
        hint: "Et meteorologisk fenomen forårsaket av refleksjon, refraksjon og spredning av lys."
    },
    {
        word: "univers",
        hint: "All eksisterende materie, rom og tid som helhet."
    },
    {
        word: "piano",
        hint: "Et musikkinstrument spilt ved å trykke på tangenter som får hammere til å slå strenger."
    },
    {
        word: "ferie",
        hint: "En periode viet til glede, hvile eller avslapning."
    },
    {
        word: "regnskog",
        hint: "En tett skog preget av høy nedbør og biologisk mangfold."
    },
    {
        word: "teater",
        hint: "En bygning eller utendørs område der skuespill, filmer eller andre forestillinger blir satt opp."
    },
    {
        word: "telefon",
        hint: "En enhet brukt til å overføre lyd over lange avstander."
    },
    {
        word: "språk",
        hint: "Et kommunikasjonssystem bestående av word, gester og syntaks."
    },
    {
        word: "ørken",
        hint: "Et øde eller tørt landområde med lite eller ingen nedbør."
    },
    {
        word: "solsikke",
        hint: "En høy plante med en stor gul blomsterhode."
    },
    {
        word: "fantasi",
        hint: "En sjanger av fantasifull fiksjon som involverer magi og overnaturlige elementer."
    },
    {
        word: "teleskop",
        hint: "Et optisk instrument brukt til å se fjerne objekter i rommet."
    },
    {
        word: "bris",
        hint: "En mild vind."
    },
    {
        word: "oase",
        hint: "Et fruktbart sted i en ørken der vann finnes."
    },
    {
        word: "fotografi",
        hint: "Kunsten, prosessen eller praksisen med å skape bilder ved å registrere lys eller annen elektromagnetisk stråling."
    },
    {
        word: "safari",
        hint: "En ekspedisjon eller reise, vanligvis for å observere dyreliv i deres naturlige habitat."
    },
    {
        word: "planet",
        hint: "En himmellegeme som kretser rundt en stjerne og ikke produserer lys selv."
    },
    {
        word: "elv",
        hint: "En stor naturlig strøm av vann som flyter i en kanal til havet, en innsjø eller en annen slik strøm."
    },
    {
        word: "tropisk",
        hint: "Relatert til eller plassert i regionen mellom kreftens og steinbukkens vendekrets."
    },
    {
        word: "mystisk",
        hint: "Vanskelig eller umulig å forstå, forklare eller identifisere."
    },
    {
        word: "gåte",
        hint: "Noe som er mystisk, forvirrende eller vanskelig å forstå."
    },
    {
        word: "paradoks",
        hint: "En uttalelse eller situasjon som motsier seg selv eller utfwordrer intuisjonen."
    },
    {
        word: "puslespill",
        hint: "Et spill, leketøy eller problem designet for å teste oppfinnsomhet eller kunnskap."
    },
    {
        word: "hviske",
        hint: "Å snakke svært mykt eller stille, ofte på en hemmelighetsfull måte."
    },
    {
        word: "skygge",
        hint: "Et mørkt område eller form produsert av et objekt som blokkerer lyset."
    },
    {
        word: "hemmelighet",
        hint: "Noe holdt skjult eller ukjent for andre."
    },
    {
        word: "nysgjerrighet",
        hint: "En sterk ønske om å vite eller lære noe."
    },
    {
        word: "uforutsigbar",
        hint: "Ikke i stand til å bli forutsett eller kjent på forhånd; usikker."
    },
    {
        word: "tilsløre",
        hint: "Å forvirre eller forbløffe noen; å gjøre noe uklart eller vanskelig å forstå."
    },
    {
        word: "avsløre",
        hint: "Å gjøre kjent eller avsløre noe tidligere hemmelig eller ukjent."
    },
    {
        word: "illusjon",
        hint: "En falsk oppfatning eller tro; et bedragersk utseende eller inntrykk."
    },
    {
        word: "måneskinn",
        hint: "Lyset fra månen."
    },
    {
        word: "levende",
        hint: "Full av energi, lys og liv."
    },
    {
        word: "nostalgi",
        hint: "En sentimental lengsel eller vemodig hengivenhet for fortiden."
    },
    {
        word: "briljant",
        hint: "Eksepsjonelt intelligent, talentfull eller imponerende."
    },
];
