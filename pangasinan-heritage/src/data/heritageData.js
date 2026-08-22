import daylightView from '../assets/daylight-view.jpg';
import herosWebp from '../assets/heros.webp';
import ruinChurch from '../assets/ruinchurch.jpg';
import aImage from '../assets/a.jpg';
import boloImage from '../assets/bolo.jpg';
import eImage from '../assets/e.jpg';

export const heritageData = {
  iconic: [
    {
      id: 1,
      title: "St. Joseph Cathedral – Alaminos",
      description: "St. Joseph Cathedral is one of the oldest and most important churches in Alaminos. Built during the Spanish period, it serves as a center of faith for Catholics in the city. Its strong stone structure and simple but elegant design reflect its long history and religious significance.",
      category: "Religious / Historical",
      image: daylightView,
    },
    {
      id: 2,
      title: "Spirit of 1896 Monument – Alaminos",
      description: "Erected to honor the brave heroes of the Philippine Revolution, this towering monument serves as a powerful reminder of Alaminos' rich historical past. The detailed sculptures and bronze engravings depict the fierce struggle for freedom, offering visitors a profound glimpse into the local roots of national pride and resilience.",
      category: "Monument / Historical",
      image: herosWebp,
    },
    {
      id: 3,
      title: "Baleyadaan Church Ruins – Alaminos",
      description: "Wrapped in mystery and time, these ancient ruins whisper tales of a bygone era. The weathered coral stone walls and moss-covered foundations stand resilient against the elements, providing a hauntingly beautiful backdrop for photographers and a poignant lesson on the passage of history in the region.",
      category: "Historical Ruins",
      image: ruinChurch,
    },
  ],

  tourist: [
    {
      id: 4,
      title: "Hundred Islands National Park – Alaminos",
      description: "The crown jewel of Pangasinan, this national park is composed of 123 breathtaking islands scattered across the emerald waters of the Lingayen Gulf. Visitors can island-hop, snorkel amidst vibrant coral reefs, kayak through hidden lagoons, and hike up to panoramic viewing decks for an unforgettable tropical adventure.",
      category: "Nature / Island",
      image: aImage,
    },
    {
      id: 5,
      title: "Bolo Beach – Alaminos",
      description: "A hidden local gem perfect for relaxation, Bolo Beach features powdery white sand and crystal-clear shallow waters gently lapping at the shoreline. It is an ideal spot for picnics, sunbathing, and watching breathtaking sunsets, offering a tranquil and laid-back escape far from the crowded tourist hubs.",
      category: "Beach",
      image: boloImage,
    },
    {
      id: 6,
      title: "Lucap Wharf – Alaminos",
      description: "Serving as the main gateway to the Hundred Islands, Lucap Wharf is a vibrant hub filled with activity. The bustling market, fresh seafood stalls, and endless rows of colorful boats create a dynamic atmosphere, perfectly capturing the authentic maritime culture and daily life of the local fishermen.",
      category: "Port / Wharf",
      image: eImage,
    },
  ]
};