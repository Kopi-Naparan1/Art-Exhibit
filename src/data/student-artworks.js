import NaparanArt from "@/app/assets/our-arts/naparan-coffee.avif";
import VerulaArt from "@/app/assets/our-arts/verula-mountain.avif";
import EchavezArt1 from "@/app/assets/our-arts/echaves-mountain.avif";
import EchavezArt2 from "@/app/assets/our-arts/echaves-trees.avif";
import BardagoArt1 from "@/app/assets/our-arts/bardago-sunrise.avif";
import BardagoArt2 from "@/app/assets/our-arts/bardago-tree.avif";
import FontanosArt1 from "@/app/assets/our-arts/fontanos-blooming.avif";
import FontanosArt2 from "@/app/assets/our-arts/fontanos-garden.avif";
import BejecArt1 from "@/app/assets/our-arts/bejec-god.avif";
import BejecArt2 from "@/app/assets/our-arts/bejec-music.avif";
import MejaresArt1 from "@/app/assets/our-arts/mejares-bamboo.avif";
import MejaresArt2 from "@/app/assets/our-arts/mejares-butterfly.avif";
import LaureArt1 from "@/app/assets/our-arts/laure-flower.avif";
import LaureArt2 from "@/app/assets/our-arts/laure-sunset.avif";
import LaureArt3 from "@/app/assets/our-arts/laure-river.avif";
import LaureArt4 from "@/app/assets/our-arts/laure-parrot.avif";
import LaureArt5 from "@/app/assets/our-arts/laure-twilight.avif";
import CastilArt1 from "@/app/assets/our-arts/castil-comic.avif";

import NaparanProfile from "@/app/assets/student-artist-pic/naparan.jpg";
import VerulaProfile from "@/app/assets/student-artist-pic/verula.jpg";
import EchavezProfile from "@/app/assets/student-artist-pic/echaves.jpg";
import BardagoProfile from "@/app/assets/student-artist-pic/bardago.jpg";
import FontanosProfile from "@/app/assets/student-artist-pic/fontanos.jpg";
import BejecProfile from "@/app/assets/student-artist-pic/bejec.jpg";
import MejaresProfile from "@/app/assets/student-artist-pic/mejares.jpg";
import LaureProfile from "@/app/assets/student-artist-pic/laure.jpg";
import CastilProfile from "@/app/assets/student-artist-pic/castil.jpg";

const studentArtworks = [
  {
    id: 1,
    artistSlug: "naparan",
    category: "Coffee Painting",
    title: "Maple Leaves Coffee Painting",
    artist: "Kopi Anan P. Naparan",
    artistImage: NaparanProfile,
    image: NaparanArt,
    medium: "Coffee Painting",
    year: "2026",
    description:
      "This coffee painting features maple leaves created using rich coffee tones and natural shading. The artwork highlights the delicate details of each leaf, symbolizing change, warmth, and the beauty of nature through soft textures and earthy elegance.",
    insight:
      "The coffee tones soften the leaf forms and give the study a warm, seasonal character.",
  },
  {
    id: 2,
    artistSlug: "verula",
    category: "Coffee Painting",
    title: "Mt. Kitanglad",
    artist: "Decerien G. Verula",
    artistImage: VerulaProfile,
    image: VerulaArt,
    medium: "Coffee Painting",
    year: "2026",
    description:
      "Painted using coffee as a medium, this artwork captures the beauty of Mt. Kitanglad, the artist's birthplace and first home. The sepia tones symbolize a deep connection to the land, while textured layers emphasize the mountain's earthy essence.",
    insight:
      "Layered coffee tones build the mountain's depth and reinforce the artist's personal connection to the land.",
  },
  {
    id: 3,
    artistSlug: "echavez",
    category: "Pencil Drawing",
    title: "Mountain",
    artist: "Fidel B. Echavez Jr.",
    artistImage: EchavezProfile,
    image: EchavezArt1,
    medium: "Pencil Drawing",
    year: "2026",
    description:
      "This pencil sketch of a mountain landscape shows depth and distance using shading techniques. The foreground is darker and more detailed, while the background is lighter to create perspective and calm.",
    insight:
      "The shifting pencil values create distance and make the mountain feel quiet and spacious.",
  },
  {
    id: 4,
    artistSlug: "echavez",
    category: "Pencil Drawing",
    title: "Tree and Branches",
    artist: "Fidel B. Echavez Jr.",
    artistImage: EchavezProfile,
    image: EchavezArt2,
    medium: "Pencil Drawing",
    year: "2026",
    description:
      "This drawing focuses on a tree as the main subject, using detailed lines and shading to highlight texture and form. It reflects appreciation for nature and resilience through careful contrast and structure.",
    insight:
      "The dense line work gives the tree a sturdy presence and turns texture into the main subject.",
  },
  {
    id: 5,
    artistSlug: "bardago",
    category: "Cubism",
    title: "Sunrise",
    artist: "John Pennie A. Bardago",
    artistImage: BardagoProfile,
    image: BardagoArt1,
    medium: "Cubism",
    year: "2026",
    description:
      "This artwork uses Cubism style with geometric shapes and bold lines. The sun and rays are divided into sections, while warm colors show light and energy against layered hills and a new beginning.",
    insight:
      "The fractured shapes keep the sunrise energetic while still feeling structured and deliberate.",
  },
  {
    id: 6,
    artistSlug: "bardago",
    category: "Cubism",
    title: "Tree",
    artist: "John Pennie A. Bardago",
    artistImage: BardagoProfile,
    image: BardagoArt2,
    medium: "Cubism",
    year: "2026",
    description:
      "This artwork uses Cubism style with geometric shapes and bold lines. The leaves and branches are divided into sections, while different green shades create depth and texture through abstraction.",
    insight:
      "The broken leaf forms turn the tree into a rhythmic study of shape, shade, and abstraction.",
  },
  {
    id: 7,
    artistSlug: "fontanos",
    category: "Scribbling",
    title: "Blooming Harmony",
    artist: "Sarah Mae Chelin A. Fontanos",
    artistImage: FontanosProfile,
    image: FontanosArt1,
    medium: "Scribbling Art",
    year: "2026",
    description:
      "This artwork reflects nature through overlapping petal-like shapes resembling a vibrant flower in bloom. Warm colors suggest sunlight, while bold black lines create balance and harmony.",
    insight:
      "The layered petals and strong outlines make the bloom feel active, balanced, and full of motion.",
  },
  {
    id: 8,
    artistSlug: "fontanos",
    category: "Scribbling",
    title: "Garden of Seasons",
    artist: "Sarah Mae Chelin A. Fontanos",
    artistImage: FontanosProfile,
    image: FontanosArt2,
    medium: "Scribbling Art",
    year: "2026",
    description:
      "This artwork captures nature through flowing organic shapes and bright colors. Greens represent growth, blues reflect water and sky, while reds, oranges, and yellows symbolize seasonal change.",
    insight:
      "The color shifts and flowing shapes make the garden feel like a changing season in motion.",
  },
  {
    id: 9,
    artistSlug: "bejec",
    category: "Calligraphy",
    title: "Calligraphy I",
    artist: "Ashton S. Bejec",
    artistImage: BejecProfile,
    image: BejecArt1,
    medium: "Calligraphy",
    year: "2026",
    description:
      "This piece pairs Dante Alighieri's quote with fern imagery to symbolize sincerity and natural beauty. Two shades of green create depth, while the word God is highlighted with gold, silver, and red accents.",
    insight:
      "The fern forms and layered lettering give the quote a calm, devotional presence.",
  },
  {
    id: 10,
    artistSlug: "bejec",
    category: "Calligraphy",
    title: "Calligraphy II",
    artist: "Ashton S. Bejec",
    artistImage: BejecProfile,
    image: BejecArt2,
    medium: "Calligraphy",
    year: "2026",
    description:
      "This piece visualizes George Santayana's quote with leaf shapes representing nature's diversity. Green shades create a lush backdrop, while the word Music is highlighted with gold, silver, and red accents.",
    insight:
      "The leaf-filled composition turns the quote into a visual rhythm of growth and variation.",
  },
  {
    id: 11,
    artistSlug: "mejares",
    category: "Paper Art",
    title: "Bamboo",
    artist: "Princess Joy H. Mejares",
    artistImage: MejaresProfile,
    image: MejaresArt1,
    medium: "Origami / Paper Art",
    year: "2026",
    description:
      "This origami artwork shows bamboo, representing strength and flexibility in nature. Simple folding techniques form its structure, reflecting how nature remains strong and continues to grow.",
    insight:
      "The folded bamboo keeps the form simple while still carrying a strong sense of resilience.",
  },
  {
    id: 12,
    artistSlug: "mejares",
    category: "Paper Art",
    title: "Butterfly",
    artist: "Princess Joy H. Mejares",
    artistImage: MejaresProfile,
    image: MejaresArt2,
    medium: "Origami / Paper Art",
    year: "2026",
    description:
      "This origami artwork shows a butterfly, symbolizing change, growth, and beauty in nature. Careful folding creates its wings and shape, showing how living things transform over time.",
    insight:
      "The folded wings keep the butterfly delicate while making transformation visible in the form.",
  },
  {
    id: 13,
    artistSlug: "laure",
    category: "Photography",
    title: "Flower",
    artist: "Yadi Zernis L. Laure",
    artistImage: LaureProfile,
    image: LaureArt1,
    medium: "Photography",
    year: "2026",
    description:
      "This photograph uses the rule of thirds by placing the flower on the left side of the frame. A shallow depth of field blurs the background, creating negative space and helping the flower stand out.",
    insight:
      "The shallow focus isolates the flower cleanly and gives the image a quiet, composed feel.",
  },
  {
    id: 14,
    artistSlug: "laure",
    category: "Photography",
    title: "Sunset Tree Landscape",
    artist: "Yadi Zernis L. Laure",
    artistImage: LaureProfile,
    image: LaureArt2,
    medium: "Photography",
    year: "2026",
    description:
      "This photograph uses the rule of thirds by placing the tree and horizon strategically. Leading lines from the bridge and road guide the viewer's eyes toward the mountains and glowing sunset sky.",
    insight:
      "The horizon and leading lines guide the eye into the sunset and anchor the scene with structure.",
  },
  {
    id: 15,
    artistSlug: "laure",
    category: "Photography",
    title: "River and Mountain",
    artist: "Yadi Zernis L. Laure",
    artistImage: LaureProfile,
    image: LaureArt3,
    medium: "Photography",
    year: "2026",
    description:
      "This photograph uses leading lines from the flowing river to guide the eye toward the mountains. Foreground water adds texture and depth, while surrounding trees softly frame the landscape.",
    insight:
      "The river acts as a visual path, pulling the landscape together from foreground to distance.",
  },
  {
    id: 16,
    artistSlug: "laure",
    category: "Photography",
    title: "Vibrant Sentinel",
    artist: "Yadi Zernis L. Laure",
    artistImage: LaureProfile,
    image: LaureArt4,
    medium: "Photography",
    year: "2026",
    description:
      "This image uses the rule of thirds with the parrot placed slightly to the right. Contrast between the dark background and bright feathers emphasizes the subject and its strong presence.",
    insight:
      "The dark background lets the bird's color stand out sharply and gives it strong visual presence.",
  },
  {
    id: 17,
    artistSlug: "laure",
    category: "Photography",
    title: "Twilight Silhouette",
    artist: "Yadi Zernis L. Laure",
    artistImage: LaureProfile,
    image: LaureArt5,
    medium: "Photography",
    year: "2026",
    description:
      "This image uses a strong silhouette technique with a dark tree against a bright sunset sky. The composition uses negative space, warm colors, and leading lines to create calm and depth.",
    insight:
      "The silhouette and warm sky work together to create a quiet, balanced ending to the day.",
  },
  {
    id: 18,
    artistSlug: "castil",
    category: "Animation",
    title: "Animation Concept Art",
    artist: "Racel Rey T. Castil",
    artistImage: CastilProfile,
    image: CastilArt1,
    medium: "Animation",
    year: "2026",
    description:
      "This artwork imitates what a standard animation adaptation would look like from original literature. It combines sarcastic and action themes with anime-inspired visual elements.",
    insight:
      "The stylized framing hints at motion and story, giving the concept art a strong narrative edge.",
  },
];

export default studentArtworks;
