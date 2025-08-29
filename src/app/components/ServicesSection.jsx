import dbConnect from "@/lib/dbConnect";
import React from "react";
import Services from "./Services";

export default async function ServicesSection() {
  const data = await dbConnect("services").find().toArray()
  const services = JSON.parse(JSON.stringify(data));

  console.log("Services Data --> ", services)

  return (
    <Services data={services}/>
  );
}




