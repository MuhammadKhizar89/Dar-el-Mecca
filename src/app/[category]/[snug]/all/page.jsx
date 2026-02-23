import { redirect } from "next/navigation";
import React from "react";
import AllPackages from "../AllPackages";
import BookSeat from "../BookSeat";
import Hero from "../Hero";
import { dummyAllPackages } from "../../../_data/dummyData";
async function page({ params }) {
  await params;
  const category = String(params.category);
  const snug = String(params.snug);
  // Replaced API call with dummy data
  const data = dummyAllPackages;
  const firstKey = Object.keys(data)[0];
  return (
    <>
      <Hero
        image={data[firstKey]?.[0]?.images?.[0]}
        category={category[0]}
        preTitle={`All ${firstKey} `}
        middleTitle={' Umrah Packages '}
        tagline={"لَبَّيْكَ اللَّهُمَّ لَبَّيْك"}
        miniDescription={"Umrah Packages"}
        scrollId={"all-packages"}
      />
      <AllPackages category={category[0]} data={data} />
      <BookSeat image={data[firstKey]?.[0]?.images?.[0]} />
    </>
  );
}
export default page;
