package com.aurarise.realty.initializer;

import com.aurarise.realty.model.Property;
import com.aurarise.realty.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final PropertyRepository propertyRepository;

    @Autowired
    public DataInitializer(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public void run(String... args) {
        if (propertyRepository.count() == 0) {
            seedProperties();
        }
    }

    private void seedProperties() {
        Property p1 = new Property(
                null,
                "ACE 150",
                "ace-150",
                "Noida, Sector 150",
                "Noida",
                "Ultra Luxury",
                "/images/img_1600585154340-be6161a56a0c.webp",
                Arrays.asList(
                        "/images/img_1600585154340-be6161a56a0c.webp",
                        "/images/img_1600607687939-ce8a6c25118c.webp",
                        "/images/img_1600566753376-12c8ab7fb75b.webp"
                ),
                "Low Density Project (Just 784 Exclusive Units on 15 Acres)",
                "ACE 150 in Sector 150, Noida is an ultra-luxurious sports-centric residential sanctuary. Set amidst 15 acres of sprawling lush green landscapes with low density planning, the project features 11 majestic high-rise towers offering world-class 3 & 4 BHK residences with VRV air-conditioning, Italian marble flooring, and modular kitchens.",
                Arrays.asList(
                        "Premium 3 & 4 BHK Residences (Sizes: 1927 – 4370 sq.ft.)",
                        "11 High-rise Towers with VRV AC, Italian Marble & Modular Kitchen",
                        "Servant Room + Premium Finishes & Top-class Luxury Amenities"
                ),
                "₹1.95 Cr - ₹4.50 Cr",
                "₹12,500 / Sq.Ft.",
                "3 BHK & 4 BHK Luxury Residences",
                "15 Acres",
                "784 Units",
                "Ready / Near Possession",
                "Under Construction & Ready to Move",
                Arrays.asList(
                        "Olympic-size Swimming Pool",
                        "State-of-the-art Gymnasium",
                        "Cricket Pitch & Lawn Tennis",
                        "50,000 Sq.Ft. Luxury Clubhouse",
                        "VRV Central Air Conditioning",
                        "Italian Marble Flooring",
                        "24/7 Multi-tier Security",
                        "Dedicated Children's Play Area"
                )
        );

        Property p2 = new Property(
                null,
                "Smartworld Elie Saab Residences",
                "smartworld-elie-saab-residences",
                "Sector 97, Noida",
                "Noida",
                "Airport Home",
                "/images/img_1600607687920-4e2a09cf159d.webp",
                Arrays.asList(
                        "/images/img_1600607687920-4e2a09cf159d.webp",
                        "/images/img_1600566753190-17f0baa2a6c3.webp",
                        "/images/img_1600210492486-724fe5c67fb0.webp"
                ),
                "Premium International Standard Living",
                "Designed in collaboration with world-renowned fashion icon Elie Saab, Smartworld Residences in Sector 97 Noida represents the pinnacle of branded luxury living. Ideal for NRIs, global travelers, and luxury connoisseurs seeking haute couture interiors and proximity to Jewar International Airport.",
                Arrays.asList(
                        "Home for International Guests & Global Travelers",
                        "Indian Home for NRIs with Haute Couture Interiors",
                        "Perfect for Dinks Segment & Ultra-Luxury Living"
                ),
                "₹3.85 Cr Onwards",
                "₹18,000 / Sq.Ft.",
                "3 BHK & 4 BHK Branded Suites",
                "12 Acres",
                "550 Units",
                "December 2027",
                "Newly Launched",
                Arrays.asList(
                        "Elie Saab Signature Interior Aesthetics",
                        "Helipad Access",
                        "Private Butler Service",
                        "Temperature Controlled Sky Pool",
                        "Private Cigar & Wine Lounge",
                        "Spa & Wellness Concierge",
                        "Private Elevators",
                        "Smart Home Automation"
                )
        );

        Property p3 = new Property(
                null,
                "Estate 105 Luxury Residence",
                "estate-105-luxury-residence",
                "Max Estates, Sector 105, Noida",
                "Noida",
                "₹27,000/Sqft",
                "/images/img_1600585154526-990dced4db0d.webp",
                Arrays.asList(
                        "/images/img_1600585154526-990dced4db0d.webp",
                        "/images/img_1600573472591-ee6b563aaec9.webp",
                        "/images/img_1600566753086-37f1a2077b21.webp"
                ),
                "Effective: April-1, 2026 • Wellness Focused Living",
                "Max Estate 105 is an ultra-premium, low-density wellness-first residential development in Noida. Combining biophilic design principles with LEED Gold standards, it crafts a living environment centered around holistic health, fresh air purification, and sustainable luxury.",
                Arrays.asList(
                        "Ultra Luxury Low-Density Living with Biophilic Architecture",
                        "Premium Developer Legacy (Max Estates - Max Group)",
                        "High Growth Corridor with Express Highway Proximity"
                ),
                "₹6.50 Cr - ₹12.00 Cr",
                "₹27,000 / Sq.Ft.",
                "3 BHK, 4 BHK & Sky Penthouses",
                "10 Acres",
                "320 Units",
                "Mid 2028",
                "Exclusive Pre-Launch",
                Arrays.asList(
                        "Biophilic Air Filtration Systems",
                        "Therapeutic Organic Gardens",
                        "Hydrotherapy Pools",
                        "Zen Meditation Decks",
                        "Executive Co-Working Hub",
                        "Personalized Wellness Concierge",
                        "Electric Vehicle Superchargers",
                        "5-Star Club House"
                )
        );

        Property p4 = new Property(
                null,
                "Experion Elements",
                "experion-elements",
                "Sector 45, Noida",
                "Noida",
                "Featured",
                "/images/img_1600607687939-ce8a6c25118c.webp",
                Arrays.asList(
                        "/images/img_1600607687939-ce8a6c25118c.webp",
                        "/images/img_1600585152220-90363fe7e115.webp",
                        "/images/img_1600566752355-35792bedcfea.webp"
                ),
                "Starting at ₹6.61 Crores • FDI-Funded Excellence",
                "Experion Elements in Sector 45 Noida is a 100% FDI-funded ultra-luxury development by Singapore-backed Experion Developers. Located in one of Noida's most central sectors, it provides seamless connectivity to South Delhi, DND Flyway, and Golf Course Metro.",
                Arrays.asList(
                        "3 & 4 BHK Ultra Luxury Homes with Panoramic Views",
                        "Flexible 20/80 Payment Plan Options",
                        "FDI Funded International Quality Infrastructure"
                ),
                "₹6.61 Cr Onwards",
                "₹21,500 / Sq.Ft.",
                "3 BHK & 4 BHK Luxury Residences",
                "6.5 Acres",
                "300 Units",
                "2027",
                "Under Construction",
                Arrays.asList(
                        "Infinity Roof-top Pool",
                        "Private Cinema & Screening Room",
                        "Double Heights Grand Entrance Lobbies",
                        "All-Weather Indoor Swimming Pool",
                        "Fine Dining Restaurant in Club",
                        "Squash & Badminton Courts",
                        "High Speed Elevators with Touchless Tech",
                        "EV Charging Stations"
                )
        );

        Property p5 = new Property(
                null,
                "JACOB/CO Residence",
                "jacobco-residence",
                "Noida",
                "Noida",
                "For Sale",
                "/images/img_1512917774080-9991f1c4c750.webp",
                Arrays.asList(
                        "/images/img_1512917774080-9991f1c4c750.webp",
                        "/images/img_1545324418-cc1a3fa10c00.webp",
                        "/images/img_1600607687644-c7171b42498f.webp"
                ),
                "Wake Up Above the City • Architectural Masterpiece",
                "Inspired by the high-watchmaking brilliance of Jacob & Co., JACOB/CO Residence elevates luxury living to celestial heights in Noida. Featuring dramatic high-rise glass architecture, private sky lounges, infinity edge pools, and bespoke concierge services.",
                Arrays.asList(
                        "Sky Infinity Pool with 360-degree Panoramic City Views",
                        "Private Lounges & Executive Sky Clubs",
                        "Exclusive Sky Decks & Private Elevator Entrances"
                ),
                "₹8.90 Cr - ₹22.50 Cr",
                "₹29,000 / Sq.Ft.",
                "4 BHK Luxury Residences & Sky Villas",
                "8 Acres",
                "180 Ultra Exclusive Units",
                "2028",
                "Bespoke Pre-Launch",
                Arrays.asList(
                        "Highest Sky Infinity Pool in NCR",
                        "Private Observatory & Telescope Deck",
                        "Chauffeur Service & Valet Parking",
                        "Private Dining Rooms with Michelin Star Chefs",
                        "Private Spa & Hydro-massage Baths",
                        "State-of-the-Art Fitness Center",
                        "24/7 Personal Security Guarding",
                        "Custom Diamond-faceted Lobbies"
                )
        );

        Property p6 = new Property(
                null,
                "Waterside Residences",
                "waterside-residences",
                "Sector 36A, Gurugram",
                "Gurugram",
                "Krisumi Sales",
                "/images/img_1580587771525-78b9dba3b914.webp",
                Arrays.asList(
                        "/images/img_1580587771525-78b9dba3b914.webp",
                        "/images/img_1600585154340-be6161a56a0c.webp",
                        "/images/img_1600566753190-17f0baa2a6c3.webp"
                ),
                "Book Your Dream Home Now • Indo-Japanese Craftsmanship",
                "Waterside Residences at Krisumi City in Sector 36A Gurugram is a joint venture between Sumitomo Corporation (Japan) and Krishna Group (India). Bringing authentic Japanese engineering, minimalism, and serene water features to the heart of Gurugram.",
                Arrays.asList(
                        "Premium Lounge with Waterfalls & Japanese Zen Gardens",
                        "Pay Just 25% Booking Plan for Flexible Payments",
                        "Direct Access to Dwarka Expressway & CPR"
                ),
                "₹2.75 Cr - ₹5.40 Cr",
                "₹15,200 / Sq.Ft.",
                "2 BHK, 3 BHK & 4 BHK Apartments",
                "65 Acres Megacity",
                "430 Units in Phase 2",
                "Late 2026",
                "Under Construction",
                Arrays.asList(
                        "160,000 Sq.Ft. Japanese Clubhouse (Nikko)",
                        "Traditional Japanese Teppanyaki Restaurant",
                        "Japanese Zen Meditation Gardens",
                        "Temperature Controlled Indoor Pool",
                        "High-speed Japanese Elevators",
                        "Kids Splash Pad & Play Park",
                        "Seamless Dwarka Expressway Link",
                        "Advanced 7-tier Security"
                )
        );

        Property p7 = new Property(
                null,
                "ParQ by CONSCIENT",
                "parq-by-conscient",
                "Sector 80, Gurugram",
                "Gurugram",
                "Featured",
                "/images/img_1600596542815-ffad4c1539a9.webp",
                Arrays.asList(
                        "/images/img_1600596542815-ffad4c1539a9.webp",
                        "/images/img_1600585154526-990dced4db0d.webp",
                        "/images/img_1600607687920-4e2a09cf159d.webp"
                ),
                "The Greenest Address in Sector 80 • 80% Open Green Space",
                "Conscient ParQ in Sector 80 Gurugram offers high-rise luxury apartments enveloped in pristine green landscapes. Nestled close to the Aravalli hills, it features 3 & 4 BHK residences with expansive balconies, eco-conscious planning, and world-class sports amenities.",
                Arrays.asList(
                        "3 & 4 BHK Premium High-Rise Apartments",
                        "Pay Just 25% Booking Plan",
                        "80% Open Green Space Nestled Near Aravallis"
                ),
                "₹2.85 Cr - ₹4.95 Cr",
                "₹14,000 / Sq.Ft.",
                "3 BHK & 4 BHK High-Rise Condos",
                "5.5 Acres",
                "450 Units",
                "2027",
                "Under Construction",
                Arrays.asList(
                        "Over 80% Greenery & Landscaped Parks",
                        "Multi-purpose Sports Complex",
                        "Resort-style Outdoor Swimming Pool",
                        "Clubhouse with Bowling Alley & Billiards",
                        "Grand Double-height Entrance Lobbies",
                        "Jogging & Cycling Tracks",
                        "Pet Park",
                        "24x7 Power Backup & Water Supply"
                )
        );

        Property p8 = new Property(
                null,
                "ICONIC by Trilive",
                "iconic-by-trilive",
                "Greater Noida",
                "Greater Noida",
                "New Launch",
                "/images/img_1545324418-cc1a3fa10c00.webp",
                Arrays.asList(
                        "/images/img_1545324418-cc1a3fa10c00.webp",
                        "/images/img_1512917774080-9991f1c4c750.webp",
                        "/images/img_1600566753376-12c8ab7fb75b.webp"
                ),
                "Limited Exclusive Price: ₹10,000/PSF • Landmark Tower",
                "ICONIC by Trilive is a futuristic 45-storey single luxury tower in Greater Noida. Designed for exclusive, private high-rise living with only 4 units per floor, private high-speed elevators, and a spectacular sky infinity swimming pool at 500+ feet.",
                Arrays.asList(
                        "45 Floors Single Tower (4 BHK + Study Residences)",
                        "Private Lift Access with 5 Elevators & Private Foyers",
                        "Premium Sky Infinity Swimming Pool at 45th Level"
                ),
                "₹3.20 Cr - ₹5.10 Cr",
                "₹10,000 / Sq.Ft.",
                "4 BHK + Study Sky Mansions",
                "3.5 Acres Tower Precinct",
                "180 Exclusive Apartments",
                "2028",
                "New Launch",
                Arrays.asList(
                        "Sky Infinity Pool on 45th Floor",
                        "5 High-Speed Private Elevators",
                        "Private Foyer Entrances for Every Unit",
                        "Acoustic Glass Windows for Noise Control",
                        "3-Level Underground Car Parking",
                        "Grand Ballroom & Party Hall",
                        "Solar Powered Common Lighting",
                        "Uninterrupted View of Surrounding Greenery"
                )
        );

        propertyRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8));
        System.out.println("✅ DataInitializer: 8 Properties successfully seeded into PostgreSQL Database.");
    }
}
