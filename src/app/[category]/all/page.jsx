import React from "react";
import BookSeat from "../[snug]/BookSeat";
import AllPackages from "../[snug]/AllPackages";
import Hero from "../[snug]/Hero";
import Categories from "../../_enums/packagesCategories";
import { dummyAllPackages } from "../../_data/dummyData";
import { redirect } from "next/navigation";
async function page({ params }) {
    await params;
    const category = String(params.category);
    // Replaced API call with dummy data
    const data = dummyAllPackages;
    const firstKey = Object.keys(data)[0];
    return (
        <>
            <Hero
                scrollId={"all-packages"}
                image={data[firstKey]?.[0]?.images?.[0]}
                category={category[0]}
                preTitle={"All "}
                middleTitle={`${category[0] == Categories.TOUR
                    ? "World Tour Packages "
                    : category[0] == Categories.HAJJ
                        ? "Hajj Packages "
                        : "Umrah Packages "
                    }`}
                tagline={category[0] == "H" || category[0] == "U" ? "لَبَّيْكَ اللَّهُمَّ لَبَّيْك" : "EXPLORE WORLD"}
                miniDescription={`${category[0] == Categories.TOUR
                    ? "World Tour Packages"
                    : category[0] == Categories.HAJJ
                        ? "Hajj Packages"
                        : "Umrah Packages"
                    }`}
            />
            <AllPackages category={category[0]} data={data} />
            <BookSeat image={data[firstKey]?.[0]?.images?.[0]} />
        </>
    );
}
export default page;
