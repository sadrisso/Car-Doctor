import ServiceDetails from "@/app/components/ServiceDetails";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

async function ServiceDetailsPage({ params }) {
  const { id } = await params;
  const servicesCollection = dbConnect("services");
  const data = await servicesCollection.findOne({ _id: new ObjectId(id) });
  const services = JSON.parse(JSON.stringify(data));

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-lg text-gray-500">Service not found</p>
      </div>
    );
  }

  return <ServiceDetails data={services} />;
}

export default ServiceDetailsPage;
