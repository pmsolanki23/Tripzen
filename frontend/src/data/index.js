export const asset = (name) => `/image/${name}`;

export const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["destinations", "Destinations"],
  ["details", "Details"],
  ["blog", "Blog"],
  ["contact", "Contact"],
];

export const heroSlides = [
  {
    city: "Indonesia",
    image: asset("indonesia.jpg"),
    copy: "Island sanctuaries, private guides, and slow mornings shaped around the ocean.",
  },
  {
    city: "Australia",
    image: asset("Australia .jpg"),
    copy: "Wide-open coastlines, design-led lodges, and wild landscapes without the friction.",
  },
  {
    city: "Italy",
    image: asset("itali.jpg"),
    copy: "A cinematic route through lakes, galleries, villas, and tables worth travelling for.",
  },
  {
    city: "Switzerland",
    image: asset("Switzerland.jpg"),
    copy: "Alpine quiet, glassy trains, lake hotels, and every transfer timed beautifully.",
  },
];

export const destinationTiles = [
  ["Italy", "8 curated routes", asset("carditali.jpg")],
  ["India", "14 cultural escapes", asset("cardindia.jpeg")],
  ["Brazil", "6 coastal retreats", asset("cardbrazil.jpg")],
  ["London", "10 city breaks", asset("cardlondon.jpg")],
  ["Bali", "12 wellness stays", asset("cardbali.jpeg")],
  ["Maldives", "9 island villas", asset("c2maldivesjpg.jpg")],
];

export const places = [
  {
    id: "atal-bridge",
    title: "Atal Bridge",
    location: "Ahmedabad, India",
    price: "$440",
    days: "4 days",
    rating: "4.9",
    image: asset("c2atalbridge.jpeg"),
    category: "Urban Icon",
    mood: "Architecture, riverfront evenings, design walks",
    description:
      "A polished city escape built around Ahmedabad's modern riverfront, heritage neighbourhoods, boutique cafes, and private sunset photography on the bridge.",
    highlights: ["Riverfront drive", "Old city heritage walk", "Rooftop dinner", "Private photo host"],
    hotel: "House of MG Heritage Suite",
  },
  {
    id: "miami-beach",
    title: "Miami Beach",
    location: "Florida, USA",
    price: "$720",
    days: "5 days",
    rating: "4.8",
    image: asset("c2miamebeach.jpg"),
    category: "Beach",
    mood: "Beach clubs, art deco, coastal dining",
    description:
      "A sunlit premium beach break with art-deco streets, oceanfront stays, curated nightlife, and slow mornings by the water.",
    highlights: ["Oceanfront suite", "Art Deco walk", "Yacht sunset", "Chef-led seafood crawl"],
    hotel: "The Setai Oceanfront Room",
  },
  {
    id: "sun-temple",
    title: "Sun Temple",
    location: "Modhera, India",
    price: "$380",
    days: "3 days",
    rating: "4.7",
    image: asset("Sun temple.jpg"),
    category: "Heritage",
    mood: "Ancient craft, temple geometry, slow culture",
    description:
      "A refined cultural route to Modhera with a specialist storyteller, golden-hour temple access, regional lunch, and heritage stays nearby.",
    highlights: ["Temple storytelling", "Stepwell stop", "Craft market", "Regional thali"],
    hotel: "Heritage Courtyard Retreat",
  },
  {
    id: "rani-ki-vav",
    title: "Rani Ki Vav",
    location: "Patan, India",
    price: "$360",
    days: "3 days",
    rating: "4.8",
    image: asset("c2.jpg"),
    category: "UNESCO",
    mood: "UNESCO details, textile trails, quiet luxury",
    description:
      "A private heritage day plan around Patan's UNESCO stepwell, Patola weaving studios, and a calm countryside dining experience.",
    highlights: ["UNESCO guide", "Patola studio", "Countryside lunch", "Private transfer"],
    hotel: "Patan Heritage Villa",
  },
  {
    id: "golden-gate",
    title: "Golden Gate",
    location: "California, USA",
    price: "$890",
    days: "6 days",
    rating: "4.9",
    image: asset("cardcalifonia.jpg"),
    category: "Roadtrip",
    mood: "Bridge views, coastal road, wine country",
    description:
      "A high-comfort California route combining San Francisco icons, Marin viewpoints, a coastal drive, and a day in wine country.",
    highlights: ["Bridge sunrise", "Sausalito lunch", "Napa tasting", "Coastal convertible"],
    hotel: "Fairmont Bay View Room",
  },
  {
    id: "ladakh",
    title: "Ladakh",
    location: "Himalayas, India",
    price: "$640",
    days: "7 days",
    rating: "5.0",
    image: asset("c2ladakh.jpg"),
    category: "Adventure",
    mood: "High passes, monasteries, stargazing",
    description:
      "An adventure-luxury Himalayan itinerary with acclimatised pacing, monastery visits, private drivers, and premium camps under clear night skies.",
    highlights: ["Pangong sunrise", "Monastery route", "Stargazing camp", "Oxygen-backed transfers"],
    hotel: "Ladakh Sarai Premium Cottage",
  },
];

export const packages = [
  {
    name: "Signature Honeymoon",
    tag: "Private island energy",
    price: "$2,840",
    image: asset("romantic res.jpg"),
    inclusions: ["Sea-view stay", "Candlelight dinner", "Airport lounge", "Couple spa"],
  },
  {
    name: "Royal Heritage Route",
    tag: "Palaces, food, culture",
    price: "$1,960",
    image: asset("cardindia.jpeg"),
    inclusions: ["Boutique haveli", "Private guide", "Heritage walk", "Chef table"],
  },
  {
    name: "Alpine Luxe Escape",
    tag: "Trains, lakes, peaks",
    price: "$3,420",
    image: asset("Switzerland.jpg"),
    inclusions: ["Panorama rail", "Lake hotel", "Wellness pass", "Snow transfer"],
  },
];

export const itinerary = [
  ["Day 1", "Arrival styling", "Airport meet, lounge transfer, and a calm first evening."],
  ["Day 2", "Local immersion", "Private city route, hidden food stops, and slow shopping windows."],
  ["Day 3", "Signature moment", "A hero experience: sail, rail, desert, temple, or mountain sunrise."],
  ["Day 4", "Unhurried luxury", "Spa, chef table, boutique stay, and a flexible late checkout."],
];

export const testimonials = [
  [
    "Pruthvi Solanki",
    "Tripzen turned a complex family route into a calm, premium experience from airport to checkout.",
    asset("pm.JPG"),
  ],
  [
    "Pradhuman Solanki",
    "The hotels, guides, and small surprises felt genuinely personal. Zero wasted travel days.",
    asset("pn.png"),
  ],
  [
    "Pran Solanki",
    "A polished itinerary with the right balance of comfort, food, and offbeat places.",
    asset("pms (2).jpg"),
  ],
];

export const trips = [
  ["Santorini evenings and secret coves", asset("t2.jpg"), "Jan 12, 2026"],
  ["Luxury train windows through the Alps", asset("t1.jpg"), "Feb 18, 2026"],
  ["Desert camps under a clean night sky", asset("t3.jpg"), "Mar 03, 2026"],
];

export const posts = [
  {
    id: "premium-city-breaks",
    title: "Premium city breaks are becoming more intentional",
    image: asset("blog-01.jpg.webp"),
    excerpt: "Travel infrastructure is changing the way premium city breaks are planned.",
    body: "The best city trips are no longer about checking off every landmark. They are about sharp neighbourhood selection, excellent transfers, one signature table, and enough white space to enjoy the city without fatigue.",
  },
  {
    id: "multi-city-escape",
    title: "How to plan a graceful multi-city escape",
    image: asset("blog-02.jpg.webp"),
    excerpt: "Our travel designers explain how to protect energy while seeing more.",
    body: "A multi-city plan works when the route respects energy. We keep early transfers rare, place recovery nights after high-movement days, and use private local hosts to remove decision friction.",
  },
  {
    id: "boutique-hotels",
    title: "Boutique hotels worth building a trip around",
    image: asset("blog-03.jpg.webp"),
    excerpt: "Atmosphere, food, service, and neighbourhoods that make a stay sing.",
    body: "A hotel becomes the heart of a trip when it has a strong sense of place: breakfast with a view, a team that remembers preferences, and a location that makes spontaneous walks feel natural.",
  },
  {
    id: "heritage-walks",
    title: "Why guided heritage walks are having a moment",
    image: asset("blog-04.jpg.webp"),
    excerpt: "Culture feels different when the route is personal, paced, and precise.",
    body: "The right guide changes the texture of a place. Instead of generic facts, guests get stories, access, context, and the confidence to notice what most travellers pass by.",
  },
  {
    id: "private-beach-stays",
    title: "Beach stays that still feel private",
    image: asset("blog-05.jpg.webp"),
    excerpt: "A shortlist of coastlines where quiet luxury still exists.",
    body: "Privacy on the coast comes from timing, room category, beach orientation, and restaurant strategy. We pair excellent hotels with quieter coves and late-morning starts.",
  },
];

export const gallery = [
  "itali.jpg",
  "Switzerland.jpg",
  "indonesia.jpg",
  "Australia .jpg",
  "norve.jpeg",
  "saharad.webp",
].map(asset);

export const priceNumber = (price) => Number(price.replace(/[^0-9]/g, ""));
