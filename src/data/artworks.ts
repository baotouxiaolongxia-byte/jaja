export type Artwork = {
  id: string;
  title: string;
  slug: string;
  category: "Landscape" | "Modern" | "Decorative";
  year: string;
  medium: string;
  size: string;
  images: string[];
  description: string;
  featured: boolean;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Window Series I",
    slug: "window-series-1",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "130 × 170 cm",
    images: [
      "/images/window-1.jpg",
      "/images/window-1.jpg",
      "/images/window-1.jpg",
    ],
    description:
      "From the 'Window' series, this work explores the interplay of light, space, and perception through layered oil painting techniques. The window motif serves as both a literal and metaphorical gateway to inner experience.",
    featured: true,
  },
  {
    id: "2",
    title: "Window Series II",
    slug: "window-series-2",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "130 × 170 cm",
    images: [
      "/images/window-2.jpg",
      "/images/window-2.jpg",
      "/images/window-2.jpg",
    ],
    description:
      "Part of the 'Window' series, this painting continues the exploration of light and shadow through the window motif. Each brushstroke captures moments of quiet contemplation and visual poetry.",
    featured: true,
  },
  {
    id: "3",
    title: "Window Series III",
    slug: "window-series-3",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "130 × 170 cm",
    images: [
      "/images/window-3.jpg",
      "/images/window-3.jpg",
      "/images/window-3.jpg",
    ],
    description:
      "The third work in the 'Window' series, this piece delves deeper into the relationship between interior space and exterior light, creating an atmosphere of serene meditation.",
    featured: true,
  },
  {
    id: "4",
    title: "Window Series IV",
    slug: "window-series-4",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "120 × 140 cm",
    images: [
      "/images/window-4.jpg",
      "/images/window-4.jpg",
      "/images/window-4.jpg",
    ],
    description:
      "Continuing the 'Window' series, this work presents a contemplative view through the window, where light becomes the primary subject and medium of expression.",
    featured: true,
  },
  {
    id: "5",
    title: "Window Series V",
    slug: "window-series-5",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "120 × 140 cm",
    images: [
      "/images/window-5.jpg",
      "/images/window-5.jpg",
      "/images/window-5.jpg",
    ],
    description:
      "The fifth piece in the series explores layered perspectives through the window frame, inviting viewers to contemplate the boundaries between inside and outside, self and world.",
    featured: false,
  },
  {
    id: "6",
    title: "Window Series VI",
    slug: "window-series-6",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "130 × 170 cm",
    images: [
      "/images/window-6.jpg",
      "/images/window-6.jpg",
      "/images/window-6.jpg",
    ],
    description:
      "Part of the 'Window' series, this painting continues the meditation on light, space, and visual perception through the evocative motif of the window.",
    featured: false,
  },
  {
    id: "7",
    title: "Window Series VII",
    slug: "window-series-7",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "120 × 140 cm",
    images: [
      "/images/window-7.jpg",
      "/images/window-7.jpg",
      "/images/window-7.jpg",
    ],
    description:
      "The seventh work in the 'Window' series presents a unique perspective on light and shadow, creating a dialogue between abstraction and representation.",
    featured: false,
  },
  {
    id: "8",
    title: "Window Series VIII",
    slug: "window-series-8",
    category: "Modern",
    year: "2025",
    medium: "Oil on canvas",
    size: "130 × 170 cm",
    images: [
      "/images/window-8.jpg",
      "/images/window-8.jpg",
      "/images/window-8.jpg",
    ],
    description:
      "Concluding the 'Window' series, this piece brings together all the themes explored throughout: light, space, memory, and the quiet beauty of everyday moments seen through the window.",
    featured: false,
  },
  {
    id: "9",
    title: "Landscape Creation II",
    slug: "landscape-creation-2",
    category: "Landscape",
    year: "2023",
    medium: "Oil on canvas",
    size: "100 × 120 cm",
    images: [
      "/images/study-1.jpg",
      "/images/study-1.jpg",
      "/images/study-1.jpg",
    ],
    description:
      "An early landscape exploration focusing on natural forms and atmospheric light. This work captures the essence of nature through careful observation and expressive brushwork.",
    featured: false,
  },
  {
    id: "10",
    title: "Landscape Creation III",
    slug: "landscape-creation-3",
    category: "Landscape",
    year: "2023",
    medium: "Oil on canvas",
    size: "100 × 100 cm",
    images: [
      "/images/study-2.jpg",
      "/images/study-2.jpg",
      "/images/study-2.jpg",
    ],
    description:
      "A contemplative landscape study exploring the relationship between sky, land, and water. The composition emphasizes balance and visual harmony.",
    featured: false,
  },
  {
    id: "11",
    title: "Landscape Creation IV",
    slug: "landscape-creation-4",
    category: "Landscape",
    year: "2023",
    medium: "Oil on canvas",
    size: "100 × 100 cm",
    images: [
      "/images/study-3.jpg",
      "/images/study-3.jpg",
      "/images/study-3.jpg",
    ],
    description:
      "This landscape work explores the interplay of light and shadow in natural environments. The muted palette creates a serene and introspective atmosphere.",
    featured: false,
  },
  {
    id: "12",
    title: "Landscape Creation V",
    slug: "landscape-creation-5",
    category: "Landscape",
    year: "2023",
    medium: "Oil on canvas",
    size: "100 × 120 cm",
    images: [
      "/images/study-4.jpg",
      "/images/study-4.jpg",
      "/images/study-4.jpg",
    ],
    description:
      "A landscape painting that captures the quiet beauty of nature at dusk. Soft, blended colors create an atmosphere of calm and contemplation.",
    featured: false,
  },
  {
    id: "13",
    title: "Night",
    slug: "night",
    category: "Modern",
    year: "2024",
    medium: "Oil on canvas",
    size: "160 × 140 cm",
    images: [
      "/images/modern-night.jpg",
      "/images/modern-night.jpg",
      "/images/modern-night.jpg",
    ],
    description:
      "An exploration of darkness and light, this work captures the mysterious atmosphere of night. Deep blues and subtle highlights create a sense of depth and mystery.",
    featured: true,
  },
  {
    id: "14",
    title: "Qingcheng Impression I",
    slug: "qingcheng-impression-1",
    category: "Modern",
    year: "2024",
    medium: "Oil on canvas",
    size: "160 × 140 cm",
    images: [
      "/images/modern-qingcheng-1.jpg",
      "/images/modern-qingcheng-1.jpg",
      "/images/modern-qingcheng-1.jpg",
    ],
    description:
      "Part of the 'Qingcheng' series, this work explores the architectural and cultural essence of ancient Chinese landscapes. Layered textures create depth and visual interest.",
    featured: false,
  },
  {
    id: "15",
    title: "Qingcheng Impression II",
    slug: "qingcheng-impression-2",
    category: "Modern",
    year: "2024",
    medium: "Oil on canvas",
    size: "100 × 120 cm",
    images: [
      "/images/modern-qingcheng-2.jpg",
      "/images/modern-qingcheng-2.jpg",
      "/images/modern-qingcheng-2.jpg",
    ],
    description:
      "Continuing the exploration of Qingcheng mountain architecture, this piece focuses on structural forms and spatial relationships.",
    featured: false,
  },
  {
    id: "16",
    title: "Mengma Spirit",
    slug: "mengma-spirit",
    category: "Modern",
    year: "2024",
    medium: "Oil on canvas",
    size: "100 × 140 cm",
    images: [
      "/images/modern-mengma.jpg",
      "/images/modern-mengma.jpg",
      "/images/modern-mengma.jpg",
    ],
    description:
      "An abstract exploration of movement and spirit. Bold brushstrokes and dynamic composition create a sense of energy and vitality.",
    featured: false,
  },
  {
    id: "17",
    title: "Qingcheng Impression III",
    slug: "qingcheng-impression-3",
    category: "Modern",
    year: "2024",
    medium: "Oil on canvas",
    size: "110 × 150 cm",
    images: [
      "/images/modern-qingcheng-3.jpg",
      "/images/modern-qingcheng-3.jpg",
      "/images/modern-qingcheng-3.jpg",
    ],
    description:
      "A comprehensive view of Qingcheng's architectural landscape, combining traditional forms with contemporary artistic expression.",
    featured: false,
  },
  {
    id: "18",
    title: "Qingcheng Impression IV",
    slug: "qingcheng-impression-4",
    category: "Modern",
    year: "2024",
    medium: "Mixed media on canvas",
    size: "160 × 120 cm",
    images: [
      "/images/modern-qingcheng-4.jpg",
      "/images/modern-qingcheng-4.jpg",
      "/images/modern-qingcheng-4.jpg",
    ],
    description:
      "Using mixed media techniques, this work explores texture and layering to create a multi-dimensional representation of Qingcheng's essence.",
    featured: false,
  },
  {
    id: "19",
    title: "Stories Within Walls",
    slug: "stories-within-walls",
    category: "Modern",
    year: "2024",
    medium: "Oil on canvas",
    size: "130 × 160 cm",
    images: [
      "/images/modern-story.jpg",
      "/images/modern-story.jpg",
      "/images/modern-story.jpg",
    ],
    description:
      "This work delves into the narratives embedded within architectural spaces. The walls become silent storytellers of history and human experience.",
    featured: true,
  },
  {
    id: "20",
    title: "Golden Morning Light",
    slug: "golden-morning-light",
    category: "Decorative",
    year: "2024",
    medium: "Oil on canvas",
    size: "80 × 100 cm",
    images: [
      "/images/window-1.jpg",
      "/images/window-1.jpg",
      "/images/window-1.jpg",
    ],
    description:
      "A decorative piece capturing the warm glow of morning light. The golden palette creates an inviting atmosphere perfect for residential interiors.",
    featured: false,
  },
  {
    id: "21",
    title: "Serene Abstraction",
    slug: "serene-abstraction",
    category: "Decorative",
    year: "2024",
    medium: "Oil on canvas",
    size: "90 × 90 cm",
    images: [
      "/images/window-2.jpg",
      "/images/window-2.jpg",
      "/images/window-2.jpg",
    ],
    description:
      "An elegant abstract composition designed for contemporary spaces. Soft gradients and gentle forms create a calming visual experience.",
    featured: false,
  },
  {
    id: "22",
    title: "Nature's Palette",
    slug: "natures-palette",
    category: "Decorative",
    year: "2024",
    medium: "Oil on canvas",
    size: "70 × 100 cm",
    images: [
      "/images/window-3.jpg",
      "/images/window-3.jpg",
      "/images/window-3.jpg",
    ],
    description:
      "A decorative work inspired by natural landscapes. Earth tones and organic forms bring a touch of nature into interior spaces.",
    featured: false,
  },
];

export const categories = ["All", "Landscape", "Modern", "Decorative"] as const;

export const categoryDescriptions: Record<string, string> = {
  Landscape:
    "Jada Han's landscape oil paintings capture the atmosphere of nature through layered colors, soft light, and expressive brushwork. Rather than simply depicting scenery, these works reflect memory, emotion, and a quiet sense of place.",
  Modern:
    "Her modern paintings explore contemporary forms, colors, and visual rhythm. These works combine abstraction, structure, and emotion, creating a refined balance between artistic expression and interior presence.",
  Decorative:
    "Designed for contemporary homes and refined interiors, Jada's decorative artworks bring warmth, texture, and artistic character into living spaces. Each piece is hand-painted and created with attention to color harmony, scale, and spatial atmosphere.",
};

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getArtworksByCategory(
  category: string
): Artwork[] {
  if (category === "All") return artworks;
  return artworks.filter((artwork) => artwork.category === category);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((artwork) => artwork.featured);
}