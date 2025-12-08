export interface CityLocation {
  slug: string;
  name: string;
  county: string;
  state: string;
  stateAbbr: string;
  industries: string[];
  transportTypes: string[];
}

export const TRANSPORT_INSURANCE_TYPES = [
  {
    slug: "limo",
    name: "Limousine Insurance",
    description: "Comprehensive coverage for limousine and chauffeured transportation services including sedans, stretch limos, SUVs, and party buses.",
    avgCost: "$3,000-$8,000 per vehicle per year",
    icon: "car"
  },
  {
    slug: "nemt",
    name: "NEMT Insurance",
    description: "Specialized coverage for Non-Emergency Medical Transportation providers including wheelchair vans, stretcher transport, and medical appointment services.",
    avgCost: "$4,000-$12,000 per vehicle per year",
    icon: "heart"
  },
  {
    slug: "paratransit",
    name: "Paratransit Insurance",
    description: "Coverage for paratransit and accessible transportation services serving seniors, disabled individuals, and those with mobility challenges.",
    avgCost: "$3,500-$10,000 per vehicle per year",
    icon: "accessibility"
  },
  {
    slug: "bus",
    name: "Bus & Motorcoach Insurance",
    description: "Protection for charter buses, school buses, shuttle services, and motorcoach operators with passenger liability and physical damage coverage.",
    avgCost: "$8,000-$25,000 per bus per year",
    icon: "bus"
  },
  {
    slug: "ambulance",
    name: "Ambulance & EMS Insurance",
    description: "Specialized coverage for ambulance services and emergency medical transportation including professional liability and auto coverage.",
    avgCost: "$10,000-$30,000 per unit per year",
    icon: "ambulance"
  },
  {
    slug: "taxi",
    name: "Taxi & Cab Insurance",
    description: "Commercial auto coverage for taxi and cab operators including liability, collision, comprehensive, and uninsured motorist protection.",
    avgCost: "$4,000-$10,000 per vehicle per year",
    icon: "taxi"
  },
  {
    slug: "tnc",
    name: "TNC & Rideshare Insurance",
    description: "Coverage for Transportation Network Company operators and rideshare fleet managers operating with Uber, Lyft, and other platforms.",
    avgCost: "$2,500-$6,000 per vehicle per year",
    icon: "smartphone"
  }
];

export const CALIFORNIA_CITIES: CityLocation[] = [
  { slug: "los-angeles", name: "Los Angeles", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc"] },
  { slug: "san-francisco", name: "San Francisco", county: "San Francisco County", state: "California", stateAbbr: "CA", industries: ["Technology", "Tourism"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc"] },
  { slug: "san-diego", name: "San Diego", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Military", "Biotech"], transportTypes: ["limo", "nemt", "paratransit", "bus", "ambulance"] },
  { slug: "sacramento", name: "Sacramento", county: "Sacramento County", state: "California", stateAbbr: "CA", industries: ["Government", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "san-jose", name: "San Jose", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Manufacturing"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc"] },
  { slug: "fresno", name: "Fresno", county: "Fresno County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "oakland", name: "Oakland", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Shipping", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "bus", "taxi"] },
  { slug: "long-beach", name: "Long Beach", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Shipping", "Aerospace"], transportTypes: ["limo", "nemt", "paratransit", "bus"] },
  { slug: "bakersfield", name: "Bakersfield", county: "Kern County", state: "California", stateAbbr: "CA", industries: ["Oil & Gas", "Agriculture"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "anaheim", name: "Anaheim", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Tourism", "Entertainment"], transportTypes: ["limo", "bus", "taxi", "tnc"] },
  { slug: "santa-ana", name: "Santa Ana", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["nemt", "paratransit", "taxi"] },
  { slug: "riverside", name: "Riverside", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "stockton", name: "Stockton", county: "San Joaquin County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Shipping"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "irvine", name: "Irvine", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Technology", "Biotech"], transportTypes: ["limo", "nemt", "paratransit", "tnc"] },
  { slug: "chula-vista", name: "Chula Vista", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "fremont", name: "Fremont", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Technology", "Manufacturing"], transportTypes: ["limo", "nemt", "paratransit", "tnc"] },
  { slug: "san-bernardino", name: "San Bernardino", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "modesto", name: "Modesto", county: "Stanislaus County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "fontana", name: "Fontana", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "moreno-valley", name: "Moreno Valley", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Healthcare"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "glendale", name: "Glendale", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Entertainment"], transportTypes: ["limo", "nemt", "paratransit", "taxi"] },
  { slug: "huntington-beach", name: "Huntington Beach", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Oil & Gas", "Tourism"], transportTypes: ["limo", "nemt", "taxi"] },
  { slug: "santa-clarita", name: "Santa Clarita", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Retail"], transportTypes: ["limo", "nemt", "paratransit"] },
  { slug: "garden-grove", name: "Garden Grove", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Retail"], transportTypes: ["nemt", "paratransit", "taxi"] },
  { slug: "oceanside", name: "Oceanside", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Military", "Tourism"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "rancho-cucamonga", name: "Rancho Cucamonga", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "ontario", name: "Ontario", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Aviation"], transportTypes: ["limo", "nemt", "bus"] },
  { slug: "santa-rosa", name: "Santa Rosa", county: "Sonoma County", state: "California", stateAbbr: "CA", industries: ["Wine", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit"] },
  { slug: "elk-grove", name: "Elk Grove", county: "Sacramento County", state: "California", stateAbbr: "CA", industries: ["Government", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "corona", name: "Corona", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "pasadena", name: "Pasadena", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Education", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi"] },
  { slug: "torrance", name: "Torrance", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Retail"], transportTypes: ["limo", "nemt", "paratransit"] },
  { slug: "pomona", name: "Pomona", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Education", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "palmdale", name: "Palmdale", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "salinas", name: "Salinas", county: "Monterey County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "hayward", name: "Hayward", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "escondido", name: "Escondido", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "sunnyvale", name: "Sunnyvale", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Aerospace"], transportTypes: ["limo", "nemt", "tnc"] },
  { slug: "visalia", name: "Visalia", county: "Tulare County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "concord", name: "Concord", county: "Contra Costa County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "roseville", name: "Roseville", county: "Placer County", state: "California", stateAbbr: "CA", industries: ["Retail", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "santa-clara", name: "Santa Clara", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Manufacturing"], transportTypes: ["limo", "nemt", "tnc"] },
  { slug: "thousand-oaks", name: "Thousand Oaks", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Biotech", "Retail"], transportTypes: ["limo", "nemt", "paratransit"] },
  { slug: "simi-valley", name: "Simi Valley", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "victorville", name: "Victorville", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Retail"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "vallejo", name: "Vallejo", county: "Solano County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Shipping"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "berkeley", name: "Berkeley", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Education", "Technology"], transportTypes: ["limo", "nemt", "paratransit", "tnc"] },
  { slug: "el-monte", name: "El Monte", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Retail"], transportTypes: ["nemt", "paratransit", "taxi"] },
  { slug: "downey", name: "Downey", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Healthcare"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "costa-mesa", name: "Costa Mesa", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Retail", "Arts"], transportTypes: ["limo", "nemt", "taxi"] },
  { slug: "inglewood", name: "Inglewood", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Aviation"], transportTypes: ["limo", "taxi", "tnc"] },
  { slug: "carlsbad", name: "Carlsbad", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Biotech", "Tourism"], transportTypes: ["limo", "nemt", "paratransit"] },
  { slug: "san-mateo", name: "San Mateo", county: "San Mateo County", state: "California", stateAbbr: "CA", industries: ["Technology", "Biotech"], transportTypes: ["limo", "nemt", "tnc"] },
  { slug: "ventura", name: "Ventura", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Agriculture"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "fairfield", name: "Fairfield", county: "Solano County", state: "California", stateAbbr: "CA", industries: ["Military", "Distribution"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "west-covina", name: "West Covina", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "taxi"] },
  { slug: "murrieta", name: "Murrieta", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "richmond", name: "Richmond", county: "Contra Costa County", state: "California", stateAbbr: "CA", industries: ["Oil & Gas", "Shipping"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "norwalk", name: "Norwalk", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "antioch", name: "Antioch", county: "Contra Costa County", state: "California", stateAbbr: "CA", industries: ["Retail", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "temecula", name: "Temecula", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Wine", "Tourism"], transportTypes: ["limo", "nemt", "bus"] },
  { slug: "burbank", name: "Burbank", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Media"], transportTypes: ["limo", "nemt", "taxi", "tnc"] },
  { slug: "daly-city", name: "Daly City", county: "San Mateo County", state: "California", stateAbbr: "CA", industries: ["Retail", "Healthcare"], transportTypes: ["nemt", "paratransit", "taxi"] },
  { slug: "el-cajon", name: "El Cajon", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "san-buenaventura", name: "San Buenaventura", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "napa", name: "Napa", county: "Napa County", state: "California", stateAbbr: "CA", industries: ["Wine", "Tourism"], transportTypes: ["limo", "bus", "taxi"] },
  { slug: "santa-maria", name: "Santa Maria", county: "Santa Barbara County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "redding", name: "Redding", county: "Shasta County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Government"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "chico", name: "Chico", county: "Butte County", state: "California", stateAbbr: "CA", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "newport-beach", name: "Newport Beach", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Finance", "Real Estate"], transportTypes: ["limo", "nemt", "taxi"] },
  { slug: "beverly-hills", name: "Beverly Hills", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Luxury Retail", "Entertainment"], transportTypes: ["limo", "taxi", "tnc"] },
  { slug: "santa-barbara", name: "Santa Barbara", county: "Santa Barbara County", state: "California", stateAbbr: "CA", industries: ["Tourism", "Education"], transportTypes: ["limo", "nemt", "paratransit", "bus"] },
  { slug: "palo-alto", name: "Palo Alto", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Venture Capital"], transportTypes: ["limo", "nemt", "tnc"] },
  { slug: "mountain-view", name: "Mountain View", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Healthcare"], transportTypes: ["limo", "nemt", "tnc"] },
  { slug: "santa-monica", name: "Santa Monica", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Technology"], transportTypes: ["limo", "nemt", "taxi", "tnc"] },
  { slug: "redwood-city", name: "Redwood City", county: "San Mateo County", state: "California", stateAbbr: "CA", industries: ["Technology", "Biotech"], transportTypes: ["limo", "nemt", "tnc"] }
];

export const NEVADA_CITIES: CityLocation[] = [
  { slug: "las-vegas", name: "Las Vegas", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Gaming", "Tourism"], transportTypes: ["limo", "nemt", "paratransit", "bus", "taxi", "tnc", "ambulance"] },
  { slug: "henderson", name: "Henderson", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Healthcare", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "reno", name: "Reno", county: "Washoe County", state: "Nevada", stateAbbr: "NV", industries: ["Technology", "Gaming"], transportTypes: ["limo", "nemt", "paratransit", "bus", "taxi"] },
  { slug: "north-las-vegas", name: "North Las Vegas", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Distribution", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "sparks", name: "Sparks", county: "Washoe County", state: "Nevada", stateAbbr: "NV", industries: ["Distribution", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "carson-city", name: "Carson City", county: "Carson City", state: "Nevada", stateAbbr: "NV", industries: ["Government", "Tourism"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "mesquite", name: "Mesquite", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Tourism", "Retail"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "boulder-city", name: "Boulder City", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Tourism", "Government"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "laughlin", name: "Laughlin", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Gaming", "Tourism"], transportTypes: ["limo", "bus", "taxi"] },
  { slug: "pahrump", name: "Pahrump", county: "Nye County", state: "Nevada", stateAbbr: "NV", industries: ["Retail", "Healthcare"], transportTypes: ["nemt", "paratransit", "ambulance"] }
];

export const ALL_CITIES = [...CALIFORNIA_CITIES, ...NEVADA_CITIES];

export function getCityBySlug(slug: string): CityLocation | undefined {
  return ALL_CITIES.find(city => city.slug === slug);
}

export function getTransportTypeBySlug(slug: string) {
  return TRANSPORT_INSURANCE_TYPES.find(type => type.slug === slug);
}

export function getCitiesByState(stateAbbr: string): CityLocation[] {
  return ALL_CITIES.filter(city => city.stateAbbr === stateAbbr);
}

export function getNearbyCities(citySlug: string, limit: number = 5): CityLocation[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  
  return ALL_CITIES
    .filter(c => c.slug !== citySlug && c.stateAbbr === city.stateAbbr && c.county === city.county)
    .slice(0, limit);
}
