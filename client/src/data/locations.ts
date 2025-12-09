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

export const ARIZONA_CITIES: CityLocation[] = [
  { slug: "phoenix", name: "Phoenix", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Healthcare", "Technology"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc"] },
  { slug: "tucson", name: "Tucson", county: "Pima County", state: "Arizona", stateAbbr: "AZ", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "mesa", name: "Mesa", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Aerospace", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "scottsdale", name: "Scottsdale", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Tourism", "Technology"], transportTypes: ["limo", "nemt", "taxi", "tnc"] },
  { slug: "chandler", name: "Chandler", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Technology", "Manufacturing"], transportTypes: ["nemt", "paratransit", "tnc"] },
  { slug: "tempe", name: "Tempe", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Education", "Technology"], transportTypes: ["nemt", "paratransit", "tnc"] },
  { slug: "glendale-az", name: "Glendale", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Sports", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "peoria-az", name: "Peoria", county: "Maricopa County", state: "Arizona", stateAbbr: "AZ", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const COLORADO_CITIES: CityLocation[] = [
  { slug: "denver", name: "Denver", county: "Denver County", state: "Colorado", stateAbbr: "CO", industries: ["Technology", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus"] },
  { slug: "colorado-springs", name: "Colorado Springs", county: "El Paso County", state: "Colorado", stateAbbr: "CO", industries: ["Military", "Tourism"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "aurora-co", name: "Aurora", county: "Arapahoe County", state: "Colorado", stateAbbr: "CO", industries: ["Healthcare", "Aerospace"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "fort-collins", name: "Fort Collins", county: "Larimer County", state: "Colorado", stateAbbr: "CO", industries: ["Education", "Technology"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "lakewood-co", name: "Lakewood", county: "Jefferson County", state: "Colorado", stateAbbr: "CO", industries: ["Government", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "boulder", name: "Boulder", county: "Boulder County", state: "Colorado", stateAbbr: "CO", industries: ["Technology", "Education"], transportTypes: ["limo", "nemt", "tnc"] }
];

export const IDAHO_CITIES: CityLocation[] = [
  { slug: "boise", name: "Boise", county: "Ada County", state: "Idaho", stateAbbr: "ID", industries: ["Technology", "Government"], transportTypes: ["nemt", "paratransit", "taxi", "tnc", "bus"] },
  { slug: "meridian", name: "Meridian", county: "Ada County", state: "Idaho", stateAbbr: "ID", industries: ["Retail", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "nampa", name: "Nampa", county: "Canyon County", state: "Idaho", stateAbbr: "ID", industries: ["Agriculture", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "idaho-falls", name: "Idaho Falls", county: "Bonneville County", state: "Idaho", stateAbbr: "ID", industries: ["Nuclear Energy", "Healthcare"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "pocatello", name: "Pocatello", county: "Bannock County", state: "Idaho", stateAbbr: "ID", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const ILLINOIS_CITIES: CityLocation[] = [
  { slug: "chicago", name: "Chicago", county: "Cook County", state: "Illinois", stateAbbr: "IL", industries: ["Finance", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "aurora-il", name: "Aurora", county: "Kane County", state: "Illinois", stateAbbr: "IL", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "naperville", name: "Naperville", county: "DuPage County", state: "Illinois", stateAbbr: "IL", industries: ["Technology", "Healthcare"], transportTypes: ["limo", "nemt", "tnc"] },
  { slug: "joliet", name: "Joliet", county: "Will County", state: "Illinois", stateAbbr: "IL", industries: ["Distribution", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "rockford", name: "Rockford", county: "Winnebago County", state: "Illinois", stateAbbr: "IL", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "springfield-il", name: "Springfield", county: "Sangamon County", state: "Illinois", stateAbbr: "IL", industries: ["Government", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const KANSAS_CITIES: CityLocation[] = [
  { slug: "wichita", name: "Wichita", county: "Sedgwick County", state: "Kansas", stateAbbr: "KS", industries: ["Aerospace", "Healthcare"], transportTypes: ["nemt", "paratransit", "taxi", "bus", "ambulance"] },
  { slug: "overland-park", name: "Overland Park", county: "Johnson County", state: "Kansas", stateAbbr: "KS", industries: ["Technology", "Healthcare"], transportTypes: ["limo", "nemt", "tnc"] },
  { slug: "kansas-city-ks", name: "Kansas City", county: "Wyandotte County", state: "Kansas", stateAbbr: "KS", industries: ["Healthcare", "Distribution"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "olathe", name: "Olathe", county: "Johnson County", state: "Kansas", stateAbbr: "KS", industries: ["Technology", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "topeka", name: "Topeka", county: "Shawnee County", state: "Kansas", stateAbbr: "KS", industries: ["Government", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const KENTUCKY_CITIES: CityLocation[] = [
  { slug: "louisville", name: "Louisville", county: "Jefferson County", state: "Kentucky", stateAbbr: "KY", industries: ["Healthcare", "Manufacturing"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "lexington", name: "Lexington", county: "Fayette County", state: "Kentucky", stateAbbr: "KY", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "taxi", "bus"] },
  { slug: "bowling-green-ky", name: "Bowling Green", county: "Warren County", state: "Kentucky", stateAbbr: "KY", industries: ["Manufacturing", "Education"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "owensboro", name: "Owensboro", county: "Daviess County", state: "Kentucky", stateAbbr: "KY", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "covington-ky", name: "Covington", county: "Kenton County", state: "Kentucky", stateAbbr: "KY", industries: ["Healthcare", "Finance"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const MINNESOTA_CITIES: CityLocation[] = [
  { slug: "minneapolis", name: "Minneapolis", county: "Hennepin County", state: "Minnesota", stateAbbr: "MN", industries: ["Healthcare", "Finance"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "saint-paul", name: "Saint Paul", county: "Ramsey County", state: "Minnesota", stateAbbr: "MN", industries: ["Government", "Healthcare"], transportTypes: ["nemt", "paratransit", "taxi", "bus"] },
  { slug: "rochester-mn", name: "Rochester", county: "Olmsted County", state: "Minnesota", stateAbbr: "MN", industries: ["Healthcare", "Technology"], transportTypes: ["nemt", "paratransit", "ambulance"] },
  { slug: "duluth", name: "Duluth", county: "St. Louis County", state: "Minnesota", stateAbbr: "MN", industries: ["Healthcare", "Shipping"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "bloomington-mn", name: "Bloomington", county: "Hennepin County", state: "Minnesota", stateAbbr: "MN", industries: ["Retail", "Healthcare"], transportTypes: ["limo", "nemt", "tnc"] }
];

export const MISSOURI_CITIES: CityLocation[] = [
  { slug: "kansas-city-mo", name: "Kansas City", county: "Jackson County", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Finance"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "st-louis", name: "St. Louis", county: "St. Louis City", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Manufacturing"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "springfield-mo", name: "Springfield", county: "Greene County", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Education"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "columbia-mo", name: "Columbia", county: "Boone County", state: "Missouri", stateAbbr: "MO", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "independence-mo", name: "Independence", county: "Jackson County", state: "Missouri", stateAbbr: "MO", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const OHIO_CITIES: CityLocation[] = [
  { slug: "columbus-oh", name: "Columbus", county: "Franklin County", state: "Ohio", stateAbbr: "OH", industries: ["Government", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "cleveland", name: "Cleveland", county: "Cuyahoga County", state: "Ohio", stateAbbr: "OH", industries: ["Healthcare", "Manufacturing"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "bus", "ambulance"] },
  { slug: "cincinnati", name: "Cincinnati", county: "Hamilton County", state: "Ohio", stateAbbr: "OH", industries: ["Healthcare", "Finance"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus"] },
  { slug: "toledo", name: "Toledo", county: "Lucas County", state: "Ohio", stateAbbr: "OH", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "akron", name: "Akron", county: "Summit County", state: "Ohio", stateAbbr: "OH", industries: ["Polymer", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "dayton", name: "Dayton", county: "Montgomery County", state: "Ohio", stateAbbr: "OH", industries: ["Aerospace", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] }
];

export const OKLAHOMA_CITIES: CityLocation[] = [
  { slug: "oklahoma-city", name: "Oklahoma City", county: "Oklahoma County", state: "Oklahoma", stateAbbr: "OK", industries: ["Energy", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "tulsa", name: "Tulsa", county: "Tulsa County", state: "Oklahoma", stateAbbr: "OK", industries: ["Energy", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "bus", "ambulance"] },
  { slug: "norman", name: "Norman", county: "Cleveland County", state: "Oklahoma", stateAbbr: "OK", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "broken-arrow", name: "Broken Arrow", county: "Tulsa County", state: "Oklahoma", stateAbbr: "OK", industries: ["Manufacturing", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "edmond", name: "Edmond", county: "Oklahoma County", state: "Oklahoma", stateAbbr: "OK", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const PENNSYLVANIA_CITIES: CityLocation[] = [
  { slug: "philadelphia", name: "Philadelphia", county: "Philadelphia County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Education"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "pittsburgh", name: "Pittsburgh", county: "Allegheny County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Technology"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "allentown", name: "Allentown", county: "Lehigh County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "reading-pa", name: "Reading", county: "Berks County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Manufacturing"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "scranton", name: "Scranton", county: "Lackawanna County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Healthcare", "Education"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "erie", name: "Erie", county: "Erie County", state: "Pennsylvania", stateAbbr: "PA", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] }
];

export const TENNESSEE_CITIES: CityLocation[] = [
  { slug: "nashville", name: "Nashville", county: "Davidson County", state: "Tennessee", stateAbbr: "TN", industries: ["Healthcare", "Music"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "memphis", name: "Memphis", county: "Shelby County", state: "Tennessee", stateAbbr: "TN", industries: ["Distribution", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "bus", "ambulance"] },
  { slug: "knoxville", name: "Knoxville", county: "Knox County", state: "Tennessee", stateAbbr: "TN", industries: ["Education", "Healthcare"], transportTypes: ["nemt", "paratransit", "taxi", "bus"] },
  { slug: "chattanooga", name: "Chattanooga", county: "Hamilton County", state: "Tennessee", stateAbbr: "TN", industries: ["Manufacturing", "Technology"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "clarksville", name: "Clarksville", county: "Montgomery County", state: "Tennessee", stateAbbr: "TN", industries: ["Military", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] }
];

export const TEXAS_CITIES: CityLocation[] = [
  { slug: "houston", name: "Houston", county: "Harris County", state: "Texas", stateAbbr: "TX", industries: ["Energy", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "dallas", name: "Dallas", county: "Dallas County", state: "Texas", stateAbbr: "TX", industries: ["Technology", "Finance"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "san-antonio", name: "San Antonio", county: "Bexar County", state: "Texas", stateAbbr: "TX", industries: ["Military", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "austin", name: "Austin", county: "Travis County", state: "Texas", stateAbbr: "TX", industries: ["Technology", "Government"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus"] },
  { slug: "fort-worth", name: "Fort Worth", county: "Tarrant County", state: "Texas", stateAbbr: "TX", industries: ["Aerospace", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "bus"] },
  { slug: "el-paso", name: "El Paso", county: "El Paso County", state: "Texas", stateAbbr: "TX", industries: ["Military", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus", "ambulance"] },
  { slug: "arlington-tx", name: "Arlington", county: "Tarrant County", state: "Texas", stateAbbr: "TX", industries: ["Entertainment", "Manufacturing"], transportTypes: ["limo", "nemt", "bus"] },
  { slug: "plano", name: "Plano", county: "Collin County", state: "Texas", stateAbbr: "TX", industries: ["Technology", "Healthcare"], transportTypes: ["limo", "nemt", "tnc"] }
];

export const UTAH_CITIES: CityLocation[] = [
  { slug: "salt-lake-city", name: "Salt Lake City", county: "Salt Lake County", state: "Utah", stateAbbr: "UT", industries: ["Technology", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "west-valley-city", name: "West Valley City", county: "Salt Lake County", state: "Utah", stateAbbr: "UT", industries: ["Manufacturing", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "provo", name: "Provo", county: "Utah County", state: "Utah", stateAbbr: "UT", industries: ["Education", "Technology"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "west-jordan", name: "West Jordan", county: "Salt Lake County", state: "Utah", stateAbbr: "UT", industries: ["Retail", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "orem", name: "Orem", county: "Utah County", state: "Utah", stateAbbr: "UT", industries: ["Technology", "Education"], transportTypes: ["nemt", "paratransit", "tnc"] },
  { slug: "ogden", name: "Ogden", county: "Weber County", state: "Utah", stateAbbr: "UT", industries: ["Aerospace", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] }
];

export const VIRGINIA_CITIES: CityLocation[] = [
  { slug: "virginia-beach", name: "Virginia Beach", county: "Virginia Beach City", state: "Virginia", stateAbbr: "VA", industries: ["Military", "Tourism"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "bus"] },
  { slug: "norfolk", name: "Norfolk", county: "Norfolk City", state: "Virginia", stateAbbr: "VA", industries: ["Military", "Shipping"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "bus", "ambulance"] },
  { slug: "chesapeake", name: "Chesapeake", county: "Chesapeake City", state: "Virginia", stateAbbr: "VA", industries: ["Healthcare", "Retail"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "richmond-va", name: "Richmond", county: "Richmond City", state: "Virginia", stateAbbr: "VA", industries: ["Government", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus"] },
  { slug: "arlington-va", name: "Arlington", county: "Arlington County", state: "Virginia", stateAbbr: "VA", industries: ["Government", "Technology"], transportTypes: ["limo", "nemt", "taxi", "tnc"] },
  { slug: "alexandria", name: "Alexandria", county: "Alexandria City", state: "Virginia", stateAbbr: "VA", industries: ["Government", "Technology"], transportTypes: ["limo", "nemt", "taxi", "tnc"] }
];

export const WISCONSIN_CITIES: CityLocation[] = [
  { slug: "milwaukee", name: "Milwaukee", county: "Milwaukee County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "tnc", "bus", "ambulance"] },
  { slug: "madison-wi", name: "Madison", county: "Dane County", state: "Wisconsin", stateAbbr: "WI", industries: ["Government", "Education"], transportTypes: ["limo", "nemt", "paratransit", "taxi", "bus"] },
  { slug: "green-bay", name: "Green Bay", county: "Brown County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "kenosha", name: "Kenosha", county: "Kenosha County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "racine", name: "Racine", county: "Racine County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] },
  { slug: "appleton", name: "Appleton", county: "Outagamie County", state: "Wisconsin", stateAbbr: "WI", industries: ["Manufacturing", "Healthcare"], transportTypes: ["nemt", "paratransit", "bus"] }
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
