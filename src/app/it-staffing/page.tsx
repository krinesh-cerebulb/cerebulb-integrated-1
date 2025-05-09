import { Content } from "@/components/ui/content";
import { Heading } from "@/components/ui/heading";

// const staffingServices = [
//   {
//     name: "Permanent Staffing",
//     slug: "permanent-staffing",
//     description: "Long-term staffing solutions with direct employment.",
//     image: "/images/staffing/permanent-staffing.webp",
//   },
//   {
//     name: "Temporary Staffing",
//     slug: "temporary-staffing",
//     description: "Flexible staffing solutions for short-term needs.",
//     image: "/images/staffing/temporary-staffing.webp",
//   },
//   {
//     name: "Recruitment Process Outsourcing (RPO)",
//     slug: "recruitment-process-outsourcing",
//     description: "End-to-end recruitment process management.",
//     image: "/images/staffing/rpo.webp",
//   },
// ];

export default function ITStaffing() {
  // const cards = staffingServices.map((service) => ({
  //   image: service.image,
  //   title: service.name,
  //   description: service.description,
  // }));

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              IT Staffing Services
            </Heading>
            <Content className="prose max-w-none">
              <p className="text-lg text-gray-600">
                We offer comprehensive IT staffing solutions to help you build
                high-performing teams. Our services are designed to meet your
                specific needs, whether you&apos;re looking for permanent
                employees, temporary staff, or complete recruitment process
                outsourcing.
              </p>
            </Content>
          </div>
        </div>

        {/* <Section
          heading="Our Staffing Solutions"
          subheading="Choose the right staffing solution for your business needs"
          cards={cards}
        /> */}
      </div>
    </main>
  );
}
