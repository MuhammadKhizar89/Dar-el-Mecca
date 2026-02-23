import React from "react";
import Hero from "./Hero";
import Description from "./Description";
import PackageDetail from "./PackageDetail";
import BookSeat from "./BookSeat";
import { redirect } from "next/navigation";
import Categories from "../../_enums/packagesCategories";
import { dummyPackageDetail, dummyStaticParams } from "../../_data/dummyData";
export async function generateStaticParams({ params }) {
    try {
        // Replaced API call with dummy data
        return dummyStaticParams;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}



export async function generateMetadata({ params }) {
    // Replaced API call with dummy data
    const data = dummyPackageDetail;
    return {
        title: data.title,
        Description: data.bigDescription,
        openGraph: {
            images: [
                {
                    url: data.images?.[0]
                }
            ]
        }
    }
}


async function page({ params }) {
    await params;
    const snug = String(params.snug);
    const category = String(params.category);
    // Replaced API call with dummy data
    const data = dummyPackageDetail;
    console.log(data);
    return (
        <div>
            <Hero
                scrollId={'description'}
                image={data.images?.[0]}
                category={category[0]}
                preTitle={`${category[0] == Categories.TOUR
                    ? `${data.countryName} ${data.duration} Nights `
                    : category[0] == Categories.UMRAH
                        ? `${data.duration} Nights ${data.month} `
                        : ""
                    }`}
                middleTitle={`${category[0] == Categories.TOUR
                    ? "Tour Package "
                    : category[0] == Categories.HAJJ
                        ? "Hajj Package "
                        : "Umrah Package "
                    }`}
                tagline={
                    category[0] == "H" || category[0] == "U"
                        ? "لَبَّيْكَ اللَّهُمَّ لَبَّيْك"
                        : `EXPLORE ${data.countryName}`
                }
                miniDescription={`${category[0] == Categories.TOUR
                    ? "Tour Package"
                    : category[0] == Categories.HAJJ
                        ? "Hajj Package"
                        : "Umrah Package"
                    }`}
            />
            <Description
                title={data.title}
                descriptionTitle={data.descriptionTitle}
                description={data.description}
                duration={data.duration}
                image={data.images?.[1]}
                pricing={data.pricing}
                visa={data.visa}
                hotels={data.eventDetails?.hotels || []}
                flights={data.flightDetails || []}
            />
            {data.poster &&
                <div className="flex justify-center">
                    <img className="" src={data.poster} />
                </div>
            }
            <div className="w-full h-[1px] bg-[#00000014]"></div>
            <PackageDetail eventDetails={data.eventDetails || {}} />
            <BookSeat image={data.images?.[2]} />
        </div>
    );
}

export default page;
