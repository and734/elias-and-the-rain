import { Character, ThemePoint } from './types';
import { CloudRain, Compass, BookOpen } from 'lucide-react';

// ASSETS REMOVED - PURE NOIR TYPOGRAPHY STYLE

export const BOOK_LINK = "https://www.amazon.it/Elias-pioggia-cospirazione-della-Loggia-ebook/dp/B0G6TK2YRT/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ZP809F7Y8C6A&dib=eyJ2IjoiMSJ9.4O4eMu1h9aQFVR1IEZszWsq70mJ5ohy1B8PvyXW87aF7DEpr_0VlDUG13EwqoUla-By4r_a7vQ2DHRIIUUY_Ds-8X_NTGf1VA8qcKKjbvinvXjZXp8gTYmjh-y9x9J0R12vbGbFm3HFCfnQLdqo9YgXtDpkVzw-2okR-p8b62T49Sba-l7cu3_bdslOAYSPDBhWk2vVOmL3yBCWpPP9_vrzMnoZ3BEYfZ17qhbje9Xw.D1sGOR73mP4yIMFBpU4mZ1RuXF5fxyv_uN3_0trz3FI&dib_tag=se&keywords=andrea+lamberti&qid=1765703210&s=digital-text&sprefix=andrea+lambe%2Cdigital-text%2C468&sr=1-1";

export const HERO_CONTENT = {
  title: "ELIAS E LA PIOGGIA",
  subtitle: "L'Ordine si costruisce sul Silenzio. E sul Sangue.",
  tagline: "LA LEGGE È CIECA. LA PIOGGIA NASCONDE.",
  cta: "LEGGI ORA"
};

export const SYNOPSIS = {
  intro: "Manila non è solo una città. È un mostro che respira. E quando piove, non piove per pulire, ma per aggredire e nascondere i segreti sepolti tra le mura antiche di Intramuros e i vicoli infetti di Tondo.",
  protagonist: "Al centro del caos, consumato dalla nicotina e da vent'anni di servizio, c'è il detective Elias De Marcado, un uomo segnato da una cicatrice che è il ricordo di un fallimento mai pagato.",
  hook: "La sua ultima indagine lo trascinerà oltre la linea di demarcazione tra la legge e la follia."
};

export const PLOT_POINTS = [
  {
    title: "La Scomparsa",
    content: "Marina \"Nina\" de la Cruz, giovane studentessa e attivista, scompare dopo aver scoperto un giro di tangenti per la ristrutturazione delle strade a Binondo. L'unica traccia lasciata è un orecchino con una pietra rossa, conficcato nel fango di Intramuros, accanto al simbolo di un compasso e una squadra."
  },
  {
    title: "La Loggia del Dragone",
    content: "Victor Lao, imprenditore intoccabile, è il \"Grande Architetto\". Lui e i suoi \"Fratelli del Silenzio\" hanno distorto i riti massonici per coprire omicidi. Nina non è stata solo rapita; è stata sottoposta a un \"rito dell'acqua\"."
  }
];

export const CHARACTERS: Character[] = [
  {
    name: "Elias De Marcado",
    role: "Il Detective",
    description: "Un uomo consumato dalla nicotina e dai rimpianti. Porta una cicatrice che pulsa ogni volta che piove.",
    quote: "La pioggia non lava via i peccati. Li rende solo più scivolosi."
  },
  {
    name: "Victor Lao",
    role: "L'Architetto",
    description: "Filantropo di giorno, mostro intoccabile di notte. Capo della Loggia del Dragone Silente.",
    quote: "Noi costruiamo l'ordine dal caos."
  },
  {
    name: "Isabel Maldera",
    role: "La Giornalista",
    description: "Segue la pista dei soldi sporchi tra i grattacieli di Makati. Figlia di un fondatore della Loggia.",
    quote: "La verità è un lusso che Manila non può permettersi."
  },
  {
    name: "Capitano Bautista",
    role: "Il Mentore",
    description: "Maestro Venerabile infiltrato nella polizia. Il marciume alla radice del sistema.",
    quote: "Fedeltà al distintivo, o fedeltà al giuramento?"
  }
];

export const THEMES: ThemePoint[] = [
  {
    title: "Noir Filippino",
    description: "L'atmosfera claustrofobica di una Manila sotto il monsone, dove la morale si scontra con la sopravvivenza.",
    icon: 'rain'
  },
  {
    title: "Riti e Potere",
    description: "Simboli esoterici (squadra e compasso) e rituali di sangue per vincolare i potenti al silenzio.",
    icon: 'symbol'
  },
  {
    title: "La Prova Regina",
    description: "La ricerca dei libri mastri segreti di Victor Lao, nascosti in una cintura di coccodrillo.",
    icon: 'book'
  }
];

export const THEME_ICONS = {
  rain: <CloudRain className="w-8 h-8 text-blue-400" />,
  symbol: <Compass className="w-8 h-8 text-noir-gold" />,
  book: <BookOpen className="w-8 h-8 text-noir-accent" />
};