// Dummy data for API replacements

export const dummyReviews = [
    {
        id: 1,
        name: "Ahmed Hassan",
        title: "Excellent Umrah Experience",
        review: "The entire Umrah journey was perfectly organized. Great hotels, professional guides, and amazing customer service!",
        rating: 5,
        image: "/images/umrah-service.jpeg"
    },
    {
        id: 2,
        name: "Fatima Ali",
        title: "Best Package Ever",
        review: "Dar El Mecca made my Umrah dream come true. Every detail was taken care of with perfection.",
        rating: 5,
        image: "/images/umrah-service.jpeg"
    },
    {
        id: 3,
        name: "Mohammed Ibrahim",
        title: "Highly Recommended",
        review: "Professional team, comfortable accommodations, and spiritual atmosphere. Couldn't ask for better!",
        rating: 5,
        image: "/images/umrah-service.jpeg"
    },
    {
        id: 4,
        name: "Zainab Khan",
        title: "Wonderful Journey",
        review: "From booking to return, everything was smooth. The guides were knowledgeable and caring.",
        rating: 5,
        image: "/images/umrah-service.jpeg"
    },
    {
        id: 5,
        name: "Omar Ahmed",
        title: "Perfect Planning",
        review: "Best Umrah package I've experienced. The team's attention to detail is remarkable.",
        rating: 5,
        image: "/images/umrah-service.jpeg"
    }
];

export const dummyEventTitles = [
    {
        type: "U",
        events: [
            { month: "January", title: "January Umrah" },
            { month: "February", title: "February Umrah" },
            { month: "March", title: "March Umrah" },
            { month: "April", title: "April Umrah" },
            { month: "Ramadan", title: "Ramadan Umrah" }
        ]
    },
    {
        type: "H",
        events: [
            { id: "hajj-2025", title: "Hajj 2025" },
            { id: "hajj-2026", title: "Hajj 2026" }
        ]
    },
    {
        type: "T",
        events: [
            { id: "dubai-tour", title: "Dubai Tour" },
            { id: "egypt-tour", title: "Egypt Tour" },
            { id: "turkey-tour", title: "Turkey Tour" },
            { id: "malaysia-tour", title: "Malaysia Tour" }
        ]
    }
];

export const dummyBusinessHours = [
    { days: "Monday - Thursday", schedule: "9:00 AM - 9:00 PM" },
    { days: "Friday - Sunday", schedule: "10:00 AM - 8:00 PM" },
    { days: "Phone", schedule: "+1-703-555-0123" },
    { days: "Email", schedule: "info@darelmecca.com" }
];

export const dummyPackageDetail = {
    id: 1,
    title: "January Umrah Package",
    descriptionTitle: "Experience Spiritual Journey",
    description: "Experience the spiritual journey of a lifetime with our carefully curated Umrah packages. Our team ensures comfort, safety, and spiritual fulfillment throughout your journey.",
    duration: 8,
    month: "January",
    countryName: "Saudi Arabia",
    bigDescription: "Experience the spiritual journey of a lifetime with our carefully curated Umrah packages. Our team ensures comfort, safety, and spiritual fulfillment throughout your journey.",
    images: [
        "/images/umrah-guide/pic1.png",
        "/images/umrah-guide/pic2.png",
        "/images/umrah-guide/pic3.jpeg"
    ],
    poster: "/images/Hajj-Package-Poster.jpeg",
    pricing: { standard: 2499, deluxe: 2799 },
    visa: "Y",
    eventDetails: {
        inclusion: [
            "Round-trip airfare from USA",
            "5-star hotel accommodation in Makkah and Medina",
            "Professional English/Arabic speaking guides",
            "Visa assistance and processing",
            "Daily breakfast and dinner",
            "Transportation between airports and hotels",
            "Umrah visa insurance",
            "24/7 customer support"
        ],
        exclusion: [
            "Personal travel insurance",
            "Additional meals and beverages",
            "Tips and gratuities",
            "Personal purchases",
            "Airfare taxes (if applicable)",
            "Any services not mentioned in inclusions"
        ],
        transportation: [
            "Airport transfer (IAD to your hotel)",
            "Daily hotel shuttle service",
            "Bus transportation to Haram",
            "Return airport transfer (hotel to IAD)",
            "Local city tours transportation"
        ],
        hotels: [
            {
                id: 1,
                name: "5 Star Swissotel Makkah",
                city: "Makkah",
                rating: 5,
                description: "Luxury hotel near Haram with world-class facilities",
                accomodationDescription: "Luxury 5-star accommodation",
                locationDescription: "Located 300m from Al-Haram Mosque",
                images: ["/images/umrah-guide/pic1.png", "/images/umrah-guide/pic2.png"]
            },
            {
                id: 2,
                name: "5 Star Anwar Al Medina Movenpick",
                city: "Medina",
                rating: 5,
                description: "Premium accommodation in Medina with excellent services",
                accomodationDescription: "Premium 5-star accommodation",
                locationDescription: "Located near Al-Masjid Al-Nabawi",
                images: ["/images/umrah-guide/pic3.jpeg", "/images/umrah-guide/pic4.jpeg"]
            }
        ],
        flights: [
            { type: "Departure", departureCity: "IAD", destinationCity: "MED", date: "2025-01-18" },
            { type: "Return", departureCity: "JED", destinationCity: "IAD", date: "2025-01-27" }
        ]
    },
    flightDetails: [
        { type: "Departure", departureCity: "IAD", destinationCity: "MED", date: "2025-01-18" },
        { type: "Return", departureCity: "JED", destinationCity: "IAD", date: "2025-01-27" }
    ],
    price: 2499,
    currency: "USD",
    includedServices: [
        "Round-trip airfare from USA",
        "5-star hotel accommodation",
        "Professional guides",
        "Visa assistance",
        "Meals and transportation"
    ],
    itinerary: [
        {
            day: 1,
            title: "Departure",
            description: "Depart from Washington Dulles International Airport"
        },
        {
            day: 2,
            title: "Arrival in Jeddah",
            description: "Arrive in Jeddah and transfer to Makkah"
        },
        {
            day: 3,
            title: "Umrah in Makkah",
            description: "Perform Umrah rituals in the Holy Mosque"
        },
        {
            day: 4,
            title: "Makkah Tour",
            description: "Visit historical Islamic sites in Makkah"
        },
        {
            day: 5,
            title: "Travel to Medina",
            description: "Journey to the Holy City of Medina"
        },
        {
            day: 6,
            title: "Medina Exploration",
            description: "Visit Al-Masjid Al-Nabawi and historical sites"
        },
        {
            day: 7,
            title: "Medina Tour",
            description: "Guided tour of Medina's spiritual landmarks"
        },
        {
            day: 8,
            title: "Return Home",
            description: "Depart from Jeddah to return home"
        }
    ],
    reviews: [
        {
            author: "Ahmed Hassan",
            rating: 5,
            comment: "Amazing experience! Highly recommended."
        },
        {
            author: "Fatima Ahmed",
            rating: 5,
            comment: "Perfect organization and great service."
        }
    ]
};

export const dummyUmrahPackagesList = {
    January: [
        {
            id: 1,
            title: "January Umrah Package",
            duration: 8,
            month: "January",
            type: "U",
            visa: "Y",
            pricing: { standard: 2499, deluxe: 2799 },
            images: ["/images/umrah-guide/pic2.png"],
            eventDetails: {
                hotels: [
                    { id: 1, name: "5 Star Swissotel Makkah" },
                    { id: 2, name: "5 Star Anwar Al Medina Movenpick" }
                ],
                flights: [
                    { type: "Departure", departureCity: "IAD", destinationCity: "MED", date: "2025-01-18" },
                    { type: "Return", departureCity: "JED", destinationCity: "IAD", date: "2025-01-27" }
                ]
            }
        },
        {
            id: 2,
            title: "January Umrah Deluxe",
            duration: 10,
            month: "January",
            type: "U",
            visa: "Y",
            pricing: { standard: 3299, deluxe: 3699 },
            images: ["/images/umrah-guide/pic3.jpeg"],
                    eventDetails: {
                hotels: [
                    { id: 1, name: "5 Star Ritz Carlton Makkah" },
                    { id: 2, name: "5 Star Anwar Al Medina Movenpick" }
                ],
                flights: [
                    { type: "Departure", departureCity: "IAD", destinationCity: "MED", date: "2025-01-10" },
                    { type: "Return", departureCity: "JED", destinationCity: "IAD", date: "2025-01-20" }
                ]
            }
        }
    ]
};

export const dummyAllPackages = {
    January: [
        {
            id: 1,
            title: "January Umrah Package",
            duration: 8,
            month: "January",
            departFrom: "IAD-MED",
            departDate: "18 JAN",
            returnFrom: "JED-IAD",
            returnDate: "27 JAN",
            price: 2499,
            hotels: ["5 Star Swissotel Makkah"],
            images: ["/images/umrah-guide/pic2.png"],
            rating: 4.9
        }
    ],
    February: [
        {
            id: 3,
            title: "February Umrah Package",
            duration: 7,
            month: "February",
            departFrom: "IAD-MED",
            departDate: "20 FEB",
            returnFrom: "JED-IAD",
            returnDate: "28 FEB",
            price: 2299,
            hotels: ["5 Star Swissotel Makkah"],
            images: ["/images/umrah-guide/pic3.jpeg"],
            rating: 4.85
        }
    ],
    Ramadan: [
        {
            id: 5,
            title: "Ramadan Umrah Package",
            duration: 8,
            month: "Ramadan",
            departFrom: "IAD-MED",
            departDate: "07 MAR",
            returnFrom: "JED-IAD",
            returnDate: "16 MAR",
            price: 2799,
            hotels: ["5 Star Dar Iman Intercontinental"],
            images: ["/images/umrah-guide/ramdan-mubarak.jpeg"],
            rating: 4.92
        }
    ]
};

export const dummyStaticParams = [
    { params: { snug: "january", id: "1" } },
    { params: { snug: "january", id: "2" } },
    { params: { snug: "february", id: "3" } },
    { params: { snug: "ramadan", id: "5" } }
];
