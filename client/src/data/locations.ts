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
    slug: "uber-black",
    name: "Uber Black Insurance",
    description: "Specialized TCP insurance for Uber Black drivers and fleet operators. Commercial coverage meeting all Uber Black requirements including $1M liability.",
    avgCost: "$4,000-$10,000 per vehicle per year",
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
    slug: "limo",
    name: "Limousine Insurance",
    description: "Comprehensive coverage for limousine and chauffeured transportation services including sedans, stretch limos, SUVs, and party buses.",
    avgCost: "$3,000-$8,000 per vehicle per year",
    icon: "car"
  },
  {
    slug: "motorcoach",
    name: "Motorcoach Insurance",
    description: "Protection for charter buses, tour buses, and motorcoach operators with passenger liability, physical damage coverage, and DOT compliance.",
    avgCost: "$12,000-$30,000 per coach per year",
    icon: "bus"
  },
  {
    slug: "taxi",
    name: "Taxi Insurance",
    description: "Commercial auto coverage for taxi and cab operators including liability, collision, comprehensive, and uninsured motorist protection.",
    avgCost: "$4,000-$10,000 per vehicle per year",
    icon: "taxi"
  },
  {
    slug: "school-bus",
    name: "School Bus Insurance",
    description: "Comprehensive coverage for school bus operators including student transportation liability, physical damage, and specialized endorsements for child safety.",
    avgCost: "$6,000-$15,000 per bus per year",
    icon: "bus"
  },
  {
    slug: "tnc",
    name: "TNC Insurance",
    description: "Coverage for Transportation Network Company operators and rideshare fleet managers operating with Uber, Lyft, and other platforms.",
    avgCost: "$2,500-$6,000 per vehicle per year",
    icon: "smartphone"
  },
  {
    slug: "paratransit",
    name: "Paratransit Insurance",
    description: "Coverage for paratransit and accessible transportation services serving seniors, disabled individuals, and those with mobility challenges.",
    avgCost: "$3,500-$10,000 per vehicle per year",
    icon: "accessibility"
  },
  {
    slug: "ambulance",
    name: "Ambulance & EMS Insurance",
    description: "Specialized coverage for ambulance services and emergency medical transportation including professional liability and auto coverage.",
    avgCost: "$10,000-$30,000 per unit per year",
    icon: "ambulance"
  }
];

export const CALIFORNIA_CITIES: CityLocation[] = [
  { slug: "los-angeles", name: "Los Angeles", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "san-francisco", name: "San Francisco", county: "San Francisco County", state: "California", stateAbbr: "CA", industries: ["Technology", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "san-diego", name: "San Diego", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Military", "Biotech"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "sacramento", name: "Sacramento", county: "Sacramento County", state: "California", stateAbbr: "CA", industries: ["Government", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "san-jose", name: "San Jose", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "fresno", name: "Fresno", county: "Fresno County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "oakland", name: "Oakland", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Shipping", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "long-beach", name: "Long Beach", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Shipping", "Aerospace"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "bakersfield", name: "Bakersfield", county: "Kern County", state: "California", stateAbbr: "CA", industries: ["Oil & Gas", "Agriculture"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "anaheim", name: "Anaheim", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Tourism", "Entertainment"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "santa-ana", name: "Santa Ana", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "riverside", name: "Riverside", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "stockton", name: "Stockton", county: "San Joaquin County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Shipping"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "irvine", name: "Irvine", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Technology", "Biotech"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "chula-vista", name: "Chula Vista", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "fremont", name: "Fremont", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Technology", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "san-bernardino", name: "San Bernardino", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "modesto", name: "Modesto", county: "Stanislaus County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "fontana", name: "Fontana", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "moreno-valley", name: "Moreno Valley", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "glendale", name: "Glendale", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Entertainment"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "huntington-beach", name: "Huntington Beach", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Oil & Gas", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "santa-clarita", name: "Santa Clarita", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "garden-grove", name: "Garden Grove", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "oceanside", name: "Oceanside", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Military", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "rancho-cucamonga", name: "Rancho Cucamonga", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "ontario", name: "Ontario", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Aviation"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "santa-rosa", name: "Santa Rosa", county: "Sonoma County", state: "California", stateAbbr: "CA", industries: ["Wine", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "elk-grove", name: "Elk Grove", county: "Sacramento County", state: "California", stateAbbr: "CA", industries: ["Government", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "corona", name: "Corona", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "pasadena", name: "Pasadena", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "torrance", name: "Torrance", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "pomona", name: "Pomona", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Education", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "palmdale", name: "Palmdale", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "salinas", name: "Salinas", county: "Monterey County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "hayward", name: "Hayward", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "escondido", name: "Escondido", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "sunnyvale", name: "Sunnyvale", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Aerospace"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "visalia", name: "Visalia", county: "Tulare County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "concord", name: "Concord", county: "Contra Costa County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "roseville", name: "Roseville", county: "Placer County", state: "California", stateAbbr: "CA", industries: ["Retail", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "santa-clara", name: "Santa Clara", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "thousand-oaks", name: "Thousand Oaks", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Biotech", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "simi-valley", name: "Simi Valley", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "victorville", name: "Victorville", county: "San Bernardino County", state: "California", stateAbbr: "CA", industries: ["Distribution", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "vallejo", name: "Vallejo", county: "Solano County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Shipping"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "berkeley", name: "Berkeley", county: "Alameda County", state: "California", stateAbbr: "CA", industries: ["Education", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "el-monte", name: "El Monte", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Manufacturing", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "downey", name: "Downey", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Aerospace", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "costa-mesa", name: "Costa Mesa", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Retail", "Arts"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "inglewood", name: "Inglewood", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Aviation"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "carlsbad", name: "Carlsbad", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Biotech", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "san-mateo", name: "San Mateo", county: "San Mateo County", state: "California", stateAbbr: "CA", industries: ["Technology", "Biotech"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "ventura", name: "Ventura", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Agriculture"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "fairfield", name: "Fairfield", county: "Solano County", state: "California", stateAbbr: "CA", industries: ["Military", "Distribution"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "west-covina", name: "West Covina", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "murrieta", name: "Murrieta", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "richmond", name: "Richmond", county: "Contra Costa County", state: "California", stateAbbr: "CA", industries: ["Oil & Gas", "Shipping"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "norwalk", name: "Norwalk", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "antioch", name: "Antioch", county: "Contra Costa County", state: "California", stateAbbr: "CA", industries: ["Retail", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "temecula", name: "Temecula", county: "Riverside County", state: "California", stateAbbr: "CA", industries: ["Wine", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "burbank", name: "Burbank", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Media"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "daly-city", name: "Daly City", county: "San Mateo County", state: "California", stateAbbr: "CA", industries: ["Retail", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "el-cajon", name: "El Cajon", county: "San Diego County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "san-buenaventura", name: "San Buenaventura", county: "Ventura County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "napa", name: "Napa", county: "Napa County", state: "California", stateAbbr: "CA", industries: ["Wine", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "santa-maria", name: "Santa Maria", county: "Santa Barbara County", state: "California", stateAbbr: "CA", industries: ["Agriculture", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "redding", name: "Redding", county: "Shasta County", state: "California", stateAbbr: "CA", industries: ["Healthcare", "Government"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "chico", name: "Chico", county: "Butte County", state: "California", stateAbbr: "CA", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "newport-beach", name: "Newport Beach", county: "Orange County", state: "California", stateAbbr: "CA", industries: ["Finance", "Real Estate"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "beverly-hills", name: "Beverly Hills", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Luxury Retail", "Entertainment"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "santa-barbara", name: "Santa Barbara", county: "Santa Barbara County", state: "California", stateAbbr: "CA", industries: ["Tourism", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "palo-alto", name: "Palo Alto", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Venture Capital"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "mountain-view", name: "Mountain View", county: "Santa Clara County", state: "California", stateAbbr: "CA", industries: ["Technology", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "santa-monica", name: "Santa Monica", county: "Los Angeles County", state: "California", stateAbbr: "CA", industries: ["Entertainment", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "redwood-city", name: "Redwood City", county: "San Mateo County", state: "California", stateAbbr: "CA", industries: ["Technology", "Biotech"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const NEVADA_CITIES: CityLocation[] = [
  { slug: "las-vegas", name: "Las Vegas", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Gaming", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "henderson", name: "Henderson", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "reno", name: "Reno", county: "Washoe County", state: "Nevada", stateAbbr: "NV", industries: ["Technology", "Gaming"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "north-las-vegas", name: "North Las Vegas", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Distribution", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "sparks", name: "Sparks", county: "Washoe County", state: "Nevada", stateAbbr: "NV", industries: ["Distribution", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "carson-city", name: "Carson City", county: "Carson City", state: "Nevada", stateAbbr: "NV", industries: ["Government", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "mesquite", name: "Mesquite", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Tourism", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "boulder-city", name: "Boulder City", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Tourism", "Government"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "laughlin", name: "Laughlin", county: "Clark County", state: "Nevada", stateAbbr: "NV", industries: ["Gaming", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "pahrump", name: "Pahrump", county: "Nye County", state: "Nevada", stateAbbr: "NV", industries: ["Retail", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const ARIZONA_CITIES: CityLocation[] = [
  { slug: "phoenix", name: "Phoenix", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Healthcare", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "tucson", name: "Tucson", county: "Pima County", state: "Arizona", stateAbbr: "AZ", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "mesa", name: "Mesa", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Aerospace", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "scottsdale", name: "Scottsdale", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Tourism", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "chandler", name: "Chandler", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Technology", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "tempe", name: "Tempe", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Education", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "glendale-az", name: "Glendale", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Sports", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "peoria-az", name: "Peoria", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const COLORADO_CITIES: CityLocation[] = [
  { slug: "denver", name: "Denver", county: "Denver County", state: "Colorado", stateAbbr: "CO", industries: ["Technology", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "colorado-springs", name: "Colorado Springs", county: "El Paso County", state: "Colorado", stateAbbr: "CO", industries: ["Military", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "aurora-co", name: "Aurora", county: "Arapahoe County", state: "Colorado", stateAbbr: "CO", industries: ["Healthcare", "Aerospace"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "fort-collins", name: "Fort Collins", county: "Larimer County", state: "Colorado", stateAbbr: "CO", industries: ["Education", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "lakewood-co", name: "Lakewood", county: "Jefferson County", state: "Colorado", stateAbbr: "CO", industries: ["Government", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "boulder", name: "Boulder", county: "Boulder County", state: "Colorado", stateAbbr: "CO", industries: ["Technology", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const IDAHO_CITIES: CityLocation[] = [
  { slug: "boise", name: "Boise", county: "Ada County", state: "Idaho", stateAbbr: "ID", industries: ["Technology", "Government"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "meridian", name: "Meridian", county: "Ada County", state: "Idaho", stateAbbr: "ID", industries: ["Retail", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "nampa", name: "Nampa", county: "Canyon County", state: "Idaho", stateAbbr: "ID", industries: ["Agriculture", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "idaho-falls", name: "Idaho Falls", county: "Bonneville County", state: "Idaho", stateAbbr: "ID", industries: ["Nuclear Energy", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "pocatello", name: "Pocatello", county: "Bannock County", state: "Idaho", stateAbbr: "ID", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const ILLINOIS_CITIES: CityLocation[] = [
  { slug: "chicago", name: "Chicago", county: "Cook County", state: "Illinois", stateAbbr: "IL", industries: ["Finance", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "aurora-il", name: "Aurora", county: "Kane County", state: "Illinois", stateAbbr: "IL", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "naperville", name: "Naperville", county: "DuPage County", state: "Illinois", stateAbbr: "IL", industries: ["Technology", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "joliet", name: "Joliet", county: "Will County", state: "Illinois", stateAbbr: "IL", industries: ["Distribution", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "rockford", name: "Rockford", county: "Winnebago County", state: "Illinois", stateAbbr: "IL", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "springfield-il", name: "Springfield", county: "Sangamon County", state: "Illinois", stateAbbr: "IL", industries: ["Government", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const KANSAS_CITIES: CityLocation[] = [
  { slug: "wichita", name: "Wichita", county: "Sedgwick County", state: "Kansas", stateAbbr: "KS", industries: ["Aerospace", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "overland-park", name: "Overland Park", county: "Johnson County", state: "Kansas", stateAbbr: "KS", industries: ["Technology", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "kansas-city-ks", name: "Kansas City", county: "Wyandotte County", state: "Kansas", stateAbbr: "KS", industries: ["Healthcare", "Distribution"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "olathe", name: "Olathe", county: "Johnson County", state: "Kansas", stateAbbr: "KS", industries: ["Technology", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "topeka", name: "Topeka", county: "Shawnee County", state: "Kansas", stateAbbr: "KS", industries: ["Government", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const KENTUCKY_CITIES: CityLocation[] = [
  { slug: "louisville", name: "Louisville", county: "Jefferson County", state: "Kentucky", stateAbbr: "KY", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "lexington", name: "Lexington", county: "Fayette County", state: "Kentucky", stateAbbr: "KY", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "bowling-green-ky", name: "Bowling Green", county: "Warren County", state: "Kentucky", stateAbbr: "KY", industries: ["Manufacturing", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "owensboro", name: "Owensboro", county: "Daviess County", state: "Kentucky", stateAbbr: "KY", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "covington-ky", name: "Covington", county: "Kenton County", state: "Kentucky", stateAbbr: "KY", industries: ["Healthcare", "Finance"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const MINNESOTA_CITIES: CityLocation[] = [
  { slug: "minneapolis", name: "Minneapolis", county: "Hennepin County", state: "Minnesota", stateAbbr: "MN", industries: ["Healthcare", "Finance"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "saint-paul", name: "Saint Paul", county: "Ramsey County", state: "Minnesota", stateAbbr: "MN", industries: ["Government", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "rochester-mn", name: "Rochester", county: "Olmsted County", state: "Minnesota", stateAbbr: "MN", industries: ["Healthcare", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "duluth", name: "Duluth", county: "St. Louis County", state: "Minnesota", stateAbbr: "MN", industries: ["Healthcare", "Shipping"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "bloomington-mn", name: "Bloomington", county: "Hennepin County", state: "Minnesota", stateAbbr: "MN", industries: ["Retail", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const MISSOURI_CITIES: CityLocation[] = [
  { slug: "kansas-city-mo", name: "Kansas City", county: "Jackson County", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Finance"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "st-louis", name: "St. Louis", county: "St. Louis City", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "springfield-mo", name: "Springfield", county: "Greene County", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "columbia-mo", name: "Columbia", county: "Boone County", state: "Missouri", stateAbbr: "MO", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "independence-mo", name: "Independence", county: "Jackson County", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const OHIO_CITIES: CityLocation[] = [
  { slug: "columbus-oh", name: "Columbus", county: "Franklin County", state: "Ohio", stateAbbr: "OH", industries: ["Government", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "cleveland", name: "Cleveland", county: "Cuyahoga County", state: "Ohio", stateAbbr: "OH", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "cincinnati", name: "Cincinnati", county: "Hamilton County", state: "Ohio", stateAbbr: "OH", industries: ["Healthcare", "Finance"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "toledo", name: "Toledo", county: "Lucas County", state: "Ohio", stateAbbr: "OH", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "akron", name: "Akron", county: "Summit County", state: "Ohio", stateAbbr: "OH", industries: ["Polymer", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "dayton", name: "Dayton", county: "Montgomery County", state: "Ohio", stateAbbr: "OH", industries: ["Aerospace", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const OKLAHOMA_CITIES: CityLocation[] = [
  { slug: "oklahoma-city", name: "Oklahoma City", county: "Oklahoma County", state: "Oklahoma", stateAbbr: "OK", industries: ["Energy", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "tulsa", name: "Tulsa", county: "Tulsa County", state: "Oklahoma", stateAbbr: "OK", industries: ["Energy", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "norman", name: "Norman", county: "Cleveland County", state: "Oklahoma", stateAbbr: "OK", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "broken-arrow", name: "Broken Arrow", county: "Tulsa County", state: "Oklahoma", stateAbbr: "OK", industries: ["Manufacturing", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "edmond", name: "Edmond", county: "Oklahoma County", state: "Oklahoma", stateAbbr: "OK", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const PENNSYLVANIA_CITIES: CityLocation[] = [
  { slug: "philadelphia", name: "Philadelphia", county: "Philadelphia County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "pittsburgh", name: "Pittsburgh", county: "Allegheny County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "allentown", name: "Allentown", county: "Lehigh County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "reading-pa", name: "Reading", county: "Berks County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "scranton", name: "Scranton", county: "Lackawanna County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "erie", name: "Erie", county: "Erie County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const TENNESSEE_CITIES: CityLocation[] = [
  { slug: "nashville", name: "Nashville", county: "Davidson County", state: "Tennessee", stateAbbr: "TN", industries: ["Healthcare", "Music"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "memphis", name: "Memphis", county: "Shelby County", state: "Tennessee", stateAbbr: "TN", industries: ["Distribution", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "knoxville", name: "Knoxville", county: "Knox County", state: "Tennessee", stateAbbr: "TN", industries: ["Education", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "chattanooga", name: "Chattanooga", county: "Hamilton County", state: "Tennessee", stateAbbr: "TN", industries: ["Manufacturing", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "clarksville", name: "Clarksville", county: "Montgomery County", state: "Tennessee", stateAbbr: "TN", industries: ["Military", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const TEXAS_CITIES: CityLocation[] = [
  { slug: "houston", name: "Houston", county: "Harris County", state: "Texas", stateAbbr: "TX", industries: ["Energy", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "dallas", name: "Dallas", county: "Dallas County", state: "Texas", stateAbbr: "TX", industries: ["Technology", "Finance"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "san-antonio", name: "San Antonio", county: "Bexar County", state: "Texas", stateAbbr: "TX", industries: ["Military", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "austin", name: "Austin", county: "Travis County", state: "Texas", stateAbbr: "TX", industries: ["Technology", "Government"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "fort-worth", name: "Fort Worth", county: "Tarrant County", state: "Texas", stateAbbr: "TX", industries: ["Aerospace", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "el-paso", name: "El Paso", county: "El Paso County", state: "Texas", stateAbbr: "TX", industries: ["Military", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "arlington-tx", name: "Arlington", county: "Tarrant County", state: "Texas", stateAbbr: "TX", industries: ["Entertainment", "Manufacturing"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "plano", name: "Plano", county: "Collin County", state: "Texas", stateAbbr: "TX", industries: ["Technology", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const UTAH_CITIES: CityLocation[] = [
  { slug: "salt-lake-city", name: "Salt Lake City", county: "Salt Lake County", state: "Utah", stateAbbr: "UT", industries: ["Technology", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "west-valley-city", name: "West Valley City", county: "Salt Lake County", state: "Utah", stateAbbr: "UT", industries: ["Manufacturing", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "provo", name: "Provo", county: "Utah County", state: "Utah", stateAbbr: "UT", industries: ["Education", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "west-jordan", name: "West Jordan", county: "Salt Lake County", state: "Utah", stateAbbr: "UT", industries: ["Retail", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "orem", name: "Orem", county: "Utah County", state: "Utah", stateAbbr: "UT", industries: ["Technology", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "ogden", name: "Ogden", county: "Weber County", state: "Utah", stateAbbr: "UT", industries: ["Aerospace", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const VIRGINIA_CITIES: CityLocation[] = [
  { slug: "virginia-beach", name: "Virginia Beach", county: "Virginia Beach City", state: "Virginia", stateAbbr: "VA", industries: ["Military", "Tourism"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "norfolk", name: "Norfolk", county: "Norfolk City", state: "Virginia", stateAbbr: "VA", industries: ["Military", "Shipping"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "chesapeake", name: "Chesapeake", county: "Chesapeake City", state: "Virginia", stateAbbr: "VA", industries: ["Healthcare", "Retail"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "richmond-va", name: "Richmond", county: "Richmond City", state: "Virginia", stateAbbr: "VA", industries: ["Government", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "arlington-va", name: "Arlington", county: "Arlington County", state: "Virginia", stateAbbr: "VA", industries: ["Government", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "alexandria", name: "Alexandria", county: "Alexandria City", state: "Virginia", stateAbbr: "VA", industries: ["Government", "Technology"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const WISCONSIN_CITIES: CityLocation[] = [
  { slug: "milwaukee", name: "Milwaukee", county: "Milwaukee County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "madison-wi", name: "Madison", county: "Dane County", state: "Wisconsin", stateAbbr: "WI", industries: ["Government", "Education"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "green-bay", name: "Green Bay", county: "Brown County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "kenosha", name: "Kenosha", county: "Kenosha County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "racine", name: "Racine", county: "Racine County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] },
  { slug: "appleton", name: "Appleton", county: "Outagamie County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"] }
];

export const ALL_CITIES = [
  ...CALIFORNIA_CITIES, 
  ...NEVADA_CITIES,
  ...ARIZONA_CITIES,
  ...COLORADO_CITIES,
  ...IDAHO_CITIES,
  ...ILLINOIS_CITIES,
  ...KANSAS_CITIES,
  ...KENTUCKY_CITIES,
  ...MINNESOTA_CITIES,
  ...MISSOURI_CITIES,
  ...OHIO_CITIES,
  ...OKLAHOMA_CITIES,
  ...PENNSYLVANIA_CITIES,
  ...TENNESSEE_CITIES,
  ...TEXAS_CITIES,
  ...UTAH_CITIES,
  ...VIRGINIA_CITIES,
  ...WISCONSIN_CITIES
];

export const STATE_DATA = [
  { abbr: "CA", name: "California", cities: CALIFORNIA_CITIES },
  { abbr: "NV", name: "Nevada", cities: NEVADA_CITIES },
  { abbr: "AZ", name: "Arizona", cities: ARIZONA_CITIES },
  { abbr: "CO", name: "Colorado", cities: COLORADO_CITIES },
  { abbr: "ID", name: "Idaho", cities: IDAHO_CITIES },
  { abbr: "IL", name: "Illinois", cities: ILLINOIS_CITIES },
  { abbr: "KS", name: "Kansas", cities: KANSAS_CITIES },
  { abbr: "KY", name: "Kentucky", cities: KENTUCKY_CITIES },
  { abbr: "MN", name: "Minnesota", cities: MINNESOTA_CITIES },
  { abbr: "MO", name: "Missouri", cities: MISSOURI_CITIES },
  { abbr: "OH", name: "Ohio", cities: OHIO_CITIES },
  { abbr: "OK", name: "Oklahoma", cities: OKLAHOMA_CITIES },
  { abbr: "PA", name: "Pennsylvania", cities: PENNSYLVANIA_CITIES },
  { abbr: "TN", name: "Tennessee", cities: TENNESSEE_CITIES },
  { abbr: "TX", name: "Texas", cities: TEXAS_CITIES },
  { abbr: "UT", name: "Utah", cities: UTAH_CITIES },
  { abbr: "VA", name: "Virginia", cities: VIRGINIA_CITIES },
  { abbr: "WI", name: "Wisconsin", cities: WISCONSIN_CITIES }
];

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
