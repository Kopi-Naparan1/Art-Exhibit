import TemporaryArt from "@/app/assets/temporary-art.jpg";

import AnitaMagsaysay from "@/app/assets/artist-picture/anita-magsaysay.jpg.avif";
import RodelTapaya from "@/app/assets/artist-picture/rodeltapaya-e.jpg.avif";
import MarianoMadarang from "@/app/assets/artist-picture/mariano-madarang.jpg.avif";
import VicenteManansala from "@/app/assets/artist-picture/vicente-manansala.jpg.avif";
import CarlosFrancisco from "@/app/assets/artist-picture/carlos-francisco.jpg.avif";
import FernandoAmorsolo from "@/app/assets/artist-picture/Fernando_Amorsolo.jpg.avif";
import BenedictoCabrera from "@/app/assets/artist-picture/benedicto-bencab-cabrera.jpg.avif";
import GaloOcampo from "@/app/assets/artist-picture/galo-ocampo.jpg.avif";
import RomeoBallada from "@/app/assets/artist-picture/romeo-ballada.jpg.avif";
import DanteHipolito from "@/app/assets/artist-picture/dante-hipolito.jpg.avif";

import haranaSaBangka from "@/app/assets/arts/harana-sa-bangka.avif";
import malakasAtMaganda from "@/app/assets/arts/malakas-at-maganda.avif";
import plantingRice from "@/app/assets/arts/planting-rice.avif";
import pistaSaNayon from "@/app/assets/arts/pista-sa-nayon.avif";
import spiritOfTheForest from "@/app/assets/arts/spirit-of-the-forest.avif";
import theHarvest from "@/app/assets/arts/the-harvest.avif";
import theOldTree from "@/app/assets/arts/the-old-tree.avif";
import winnowingRice from "@/app/assets/arts/winnowing-rice.avif";
import marketVendors from "@/app/assets/arts/market-vendors.avif";
import mariangMakiling from "@/app/assets/arts/mariang-makiling.avif";

const fallbackArtwork = TemporaryArt;

const artworks = [
  {
    id: 1,
    title: "Malakas at Maganda",
    artist: "Galo Ocampo",
    artistSlug: "galo-ocampo",
    year: "c. 1940s",
    medium: "Oil on canvas",
    image: malakasAtMaganda,
    artistImage: GaloOcampo,
    description:
      "A modernist retelling of the Filipino creation myth, where humanity rises from bamboo and the natural world becomes the first source of identity, origin, and belonging.",
    insight:
      "The split bamboo figure and warm ground tones turn the myth into a grounded meditation on origin and belonging.",
  },
  {
    id: 2,
    title: "Harana sa Bangka",
    artist: "Romeo Ballada",
    artistSlug: "romeo-ballada",
    year: "c. 1990s",
    medium: "Oil on canvas",
    image: haranaSaBangka,
    artistImage: RomeoBallada,
    description:
      "A lyrical courtship scene set on water, where lilies, shoreline greens, and still reflections create a quiet atmosphere shaped by nature and tradition.",
    insight:
      "The still water and surrounding greenery soften the scene, giving the courtship moment a calm, intimate mood.",
  },
  {
    id: 3,
    title: "The Harvest",
    artist: "Dante Hipolito",
    artistSlug: "dante-hipolito",
    year: "c. 2023",
    medium: "Oil on canvas",
    image: theHarvest,
    artistImage: DanteHipolito,
    description:
      "A detailed rural image of collective labor and abundance, celebrating the generosity of Philippine farmland and the shared rhythm of harvest season.",
    insight:
      "The dense movement of figures and grain gives the scene its sense of shared labor and seasonal abundance.",
  },
  {
    id: 4,
    title: "Spirit of the Forest",
    artist: "Rodel Tapaya",
    artistSlug: "rodel-tapaya",
    year: "c. 2010s",
    medium: "Acrylic on canvas",
    image: spiritOfTheForest,
    artistImage: RodelTapaya,
    description:
      "A contemporary folklore-inflected work that frames the forest as a living spiritual landscape, full of guardianship, memory, and myth.",
    insight:
      "Mythic forms and layered foliage make the forest feel alive, guarded, and symbolic rather than merely scenic.",
  },
  {
    id: 5,
    title: "Mariang Makiling",
    artist: "Mariano Madarang",
    artistSlug: "mariano-madarang",
    year: "c. 1980s",
    medium: "Oil on canvas",
    image: mariangMakiling,
    artistImage: MarianoMadarang,
    description:
      "An image of the mountain guardian surrounded by flora and wildlife, presenting the forest as a sanctuary shaped by protection, generosity, and legend.",
    insight:
      "The surrounding plants and animals frame the guardian as part of the landscape, not separate from it.",
  },
  {
    id: 6,
    title: "The Old Tree",
    artist: "Vicente Manansala",
    artistSlug: "vicente-manansala",
    year: "c. 1960s",
    medium: "Watercolor",
    image: theOldTree,
    artistImage: VicenteManansala,
    description:
      "An expressive study of a weathered tree that emphasizes endurance, age, and the quiet authority of nature as witness to changing time.",
    insight:
      "The tree's worn texture and upright form give the piece a quiet sense of endurance and memory.",
  },
  {
    id: 7,
    title: "Pista sa Nayon",
    artist: 'Carlos "Botong" Francisco',
    artistSlug: "carlos-francisco",
    year: "c. 1950s",
    medium: "Mural-style painting",
    image: pistaSaNayon,
    artistImage: CarlosFrancisco,
    description:
      "A festive rural scene beneath tropical trees, showing how natural spaces become gathering grounds for music, dance, and community life.",
    insight:
      "The bright crowd and canopy of trees turn the village celebration into a communal scene shaped by place.",
  },
  {
    id: 8,
    title: "Planting Rice",
    artist: "Fernando Amorsolo",
    artistSlug: "fernando-amorsolo",
    year: "1921",
    medium: "Oil on canvas",
    image: plantingRice,
    artistImage: FernandoAmorsolo,
    description:
      "An iconic pastoral scene of farmers at work under radiant light, presenting cultivation as dignity, warmth, and harmony with the land.",
    insight:
      "The open field and glowing light frame farm work as a calm, dignified part of everyday life.",
  },
  {
    id: 9,
    title: "Winnowing Rice",
    artist: "Anita Magsaysay-Ho",
    artistSlug: "anita-magsaysay-ho",
    year: "c. 1950s",
    medium: "Oil on canvas",
    image: winnowingRice,
    artistImage: AnitaMagsaysay,
    description:
      "A modernist rendering of women working together, where agricultural labor becomes a study in rhythm, movement, and collective strength.",
    insight:
      "The repeated gestures and unified composition make teamwork the center of the image.",
  },
  {
    id: 10,
    title: "Market Vendors",
    artist: 'Benedicto "BenCab" Cabrera',
    artistSlug: "benedicto-cabrera",
    year: "c. 1970s",
    medium: "Oil on canvas",
    image: marketVendors,
    artistImage: BenedictoCabrera,
    description:
      "A powerful portrait of a figure carrying harvest produce, linking Filipino labor, abundance, and the physical weight of the land's gifts.",
    insight:
      "The burden of the harvest is carried directly in the composition, giving the piece its sense of labor and weight.",
  },
];
const artists = [
  {
    slug: "fernando-amorsolo",
    name: "Fernando Amorsolo",
    image: FernandoAmorsolo,
    style: "Luminous pastoral realism",
    bio: "First National Artist for Painting, known for sunlight-filled rural scenes that shaped the visual memory of Filipino countryside life.",
    contribution:
      "He gave the Philippine landscape an iconic visual language of warmth, labor, and national identity.",
  },
  {
    slug: "anita-magsaysay-ho",
    name: "Anita Magsaysay-Ho",
    image: AnitaMagsaysay,
    style: "Modernist figuration",
    bio: "The only female member of the Thirteen Moderns and a major voice in portraying women within agricultural and communal settings.",
    contribution:
      "Her paintings elevated everyday labor into modern art with clarity, rhythm, and dignity.",
  },
  {
    slug: "benedicto-cabrera",
    name: "Benedicto Cabrera",
    image: BenedictoCabrera,
    style: "Expressive figurative painting",
    bio: "A National Artist widely known as BenCab, celebrated for his human-centered imagery and strong statements on identity.",
    contribution:
      "His work bridges social observation and painterly elegance, making Filipino life feel immediate and personal.",
  },
  {
    slug: "rodel-tapaya",
    name: "Rodel Tapaya",
    image: RodelTapaya,
    style: "Folkloric contemporary painting",
    bio: "A contemporary artist whose paintings draw from myth, environment, and storytelling traditions.",
    contribution:
      "He expands Filipino nature art into a symbolic and imaginative register rooted in memory and legend.",
  },
  {
    slug: "galo-ocampo",
    name: "Galo Ocampo",
    image: GaloOcampo,
    style: "Symbolic modernism",
    bio: "A modernist painter who blended folklore, nationalism, and experimentation into a distinctive visual language.",
    contribution:
      "He helped connect mythology and modern art in a way that feels formally bold and culturally grounded.",
  },
  {
    slug: "carlos-francisco",
    name: "Carlos Francisco",
    image: CarlosFrancisco,
    style: "Muralism and historical narration",
    bio: "Known as Botong, he portrayed Filipino communal life through monumental compositions and energetic movement.",
    contribution:
      "His work makes ordinary gatherings and public life feel historically significant and visually dynamic.",
  },
  {
    slug: "romeo-ballada",
    name: "Romeo Ballada",
    image: RomeoBallada,
    style: "Romantic narrative painting",
    bio: "A Filipino painter associated with poetic scenes of everyday life, often set in quiet natural surroundings.",
    contribution:
      "His work adds a lyrical, human-centered view of nature and relationships to the exhibit.",
  },
  {
    slug: "dante-hipolito",
    name: "Dante Hipolito",
    image: DanteHipolito,
    style: "Realist rural imagery",
    bio: "An artist known for detailed depictions of agricultural life and the shared labor of farming communities.",
    contribution:
      "His paintings highlight harvest, cooperation, and the dignity of rural work in Philippine art.",
  },
  {
    slug: "mariano-madarang",
    name: "Mariano Madarang",
    image: MarianoMadarang,
    style: "Folkloric landscape painting",
    bio: "A painter connected with mythic and nature-inspired imagery rooted in Filipino folklore.",
    contribution:
      "His art strengthens the exhibit's focus on nature as a site of legend, memory, and protection.",
  },
  {
    slug: "vicente-manansala",
    name: "Vicente Manansala",
    image: VicenteManansala,
    style: "Transparent cubism",
    bio: "A National Artist who brought modernist structure to Filipino themes through layered, luminous forms.",
    contribution:
      "His work bridges modern technique with rural subject matter, enriching the exhibit's visual range.",
  },
];

const exhibitionConcept = {
  title: "Nature as Identity",
  body: "This exhibit shows how Filipino artists use forests, farms, water, mountains, and harvest scenes not as background only, but as symbols of memory, labor, myth, and belonging. Each selected work reveals how the natural world is tied to culture and daily life.",
};

const curatorNote = {
  title: "Curator's Note",
  body: "This collection reminded us that Filipino nature art is not simply about scenery. It is about how people live with the land, how stories are rooted in place, and how artists preserve cultural memory through scenes of work, wonder, and inheritance. We hope viewers leave with a deeper respect for both art and the environment that inspires it.",
};

export default artworks;
export { artists, exhibitionConcept, curatorNote };
