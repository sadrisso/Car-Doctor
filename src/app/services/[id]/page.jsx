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

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image */}
        {data.img && (
          <div className="relative w-full h-64">
            <Image
              src={data.img}
              alt={data.title || "Service Image"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {data.title || "Service Title"}
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {data.description || "No description available for this service."}
          </p>

          {/* Price & CTA */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-xl font-semibold text-green-600">
              ${data.price || "N/A"}
            </span>
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsPage;
