// Pickup-location suggestions for Ghana.
// Curated list of well-known areas, landmarks and streets per city.
// Extend this list as new branches or service areas are added.

export interface Place {
    name: string;
    city: string;
}

export const ghanaPlaces: Place[] = [
    // Cape Coast (Central Region)
    { name: "Cape Coast Castle", city: "Cape Coast" },
    { name: "Kotokuraba", city: "Cape Coast" },
    { name: "Kotokuraba Market", city: "Cape Coast" },
    { name: "Pedu", city: "Cape Coast" },
    { name: "Abura", city: "Cape Coast" },
    { name: "Amamoma", city: "Cape Coast" },
    { name: "Adisadel", city: "Cape Coast" },
    { name: "Ola Road", city: "Cape Coast" },
    { name: "Bakano", city: "Cape Coast" },
    { name: "Kwaprow", city: "Cape Coast" },
    { name: "University of Cape Coast", city: "Cape Coast" },
    { name: "Fosu Lagoon", city: "Cape Coast" },
    { name: "Victoria Park", city: "Cape Coast" },
    { name: "Elmina", city: "Cape Coast" },

    // Accra (Greater Accra Region)
    { name: "Osu, Oxford Street", city: "Accra" },
    { name: "Labone", city: "Accra" },
    { name: "Cantonments", city: "Accra" },
    { name: "Airport Residential", city: "Accra" },
    { name: "East Legon", city: "Accra" },
    { name: "Ridge", city: "Accra" },
    { name: "Dzorwulu", city: "Accra" },
    { name: "Achimota", city: "Accra" },
    { name: "Dansoman", city: "Accra" },
    { name: "Kaneshie", city: "Accra" },
    { name: "Madina", city: "Accra" },
    { name: "Lapaz", city: "Accra" },
    { name: "Spintex Road", city: "Accra" },
    { name: "Labadi", city: "Accra" },
    { name: "Teshie", city: "Accra" },
    { name: "Nungua", city: "Accra" },
    { name: "Kwame Nkrumah Circle", city: "Accra" },
    { name: "Tema", city: "Accra" },

    // Kumasi (Ashanti Region)
    { name: "Adum", city: "Kumasi" },
    { name: "Kejetia", city: "Kumasi" },
    { name: "Bantama", city: "Kumasi" },
    { name: "Asokwa", city: "Kumasi" },
    { name: "Ahodwo", city: "Kumasi" },
    { name: "Suame", city: "Kumasi" },
    { name: "Ayigya", city: "Kumasi" },
    { name: "KNUST Campus", city: "Kumasi" },

    // Takoradi (Western Region)
    { name: "Market Circle", city: "Takoradi" },
    { name: "Sekondi", city: "Takoradi" },
    { name: "Effia", city: "Takoradi" },
    { name: "Anaji", city: "Takoradi" },
    { name: "Takoradi Harbour", city: "Takoradi" },
];

// Returns up to `limit` places whose area name or city matches every word typed.
// e.g. "cape" or "cape coast" or "kotok" all match Cape Coast places.
export function searchPlaces(query: string, limit = 8): Place[] {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];

    return ghanaPlaces
        .filter((place) => {
            const haystack = `${place.name} ${place.city}`.toLowerCase();
            return terms.every((term) => haystack.includes(term));
        })
        .slice(0, limit);
}
