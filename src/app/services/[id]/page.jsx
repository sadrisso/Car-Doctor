import ServiceDetails from "@/app/components/ServiceDetails";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

async function ServiceDetailsPage({ params }) {
  const id = params?.id;
  const servicesCollection = dbConnect("services");
  const data = await servicesCollection.findOne({ _id: new ObjectId(id) });

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-lg text-gray-500">Service not found</p>
      </div>
    );
  }

  return <ServiceDetails data={data} />;
}

export default ServiceDetailsPage;
