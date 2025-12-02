import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

const staffMembers = [
  {
    name: "Artelia M. Covington",
    title: "Director, ORSP",
    email: "acovington@bowiestate.edu",
    phone: "301-860-4400",
    office: "Main Campus, Robinson Hall, Room 114",
  },
  {
    name: "Jhovita Williams",
    title: "Senior Grants & Contracts Manager",
    email: "jawilliams@bowiestate.edu",
    phone: "301-860-4394",
    office: "Main Campus, Robinson Hall, Room 110",
  },
  {
    name: "Anthony R. Shepherd",
    title: "Grants & Contracts Specialist",
    email: "ashepherd@bowiestate.edu",
    phone: null,
    office: null,
  },
  {
    name: "Oluwatoyin E. Kode",
    title: "Program Management Specialist",
    email: "okode@bowiestate.edu",
    phone: "301-860-3092",
    office: "Entrepreneurship Academy, Room A124",
  },
  {
    name: "Temperance E. Ali",
    title: "Program Coordinator",
    email: "tali@bowiestate.edu",
    phone: null,
    office: null,
  },
  {
    name: "Dinali N. Jayawardana",
    title: "Program Coordinator",
    email: "djayawardana@bowiestate.edu",
    phone: null,
    office: null,
  },
  {
    name: "Ajay K. Jha",
    title: "Tech Transfer & Innovation Officer",
    email: "ajha@bowiestate.edu",
    phone: null,
    office: null,
  },
  {
    name: "Anika C. Bissahoyo",
    title: "Contingent Worker",
    email: "abissahoyo@bowiestate.edu",
    phone: null,
    office: null,
  },
  {
    name: "Sydney N. Palmer",
    title: "Technical Assistant",
    email: "spalmer@bowiestate.edu",
    phone: null,
    office: null,
  },
  {
    name: "Kimeal Parham",
    title: "Laboratory Research Assistant",
    email: "kparham1@bowiestate.edu",
    phone: null,
    office: null,
  },
  {
    name: "Stacia L. Shields",
    title: "Academic Advisor",
    email: "sshields@bowiestate.edu",
    phone: "301-860-4756",
    office: "Main Campus, Science Center, Room 2110",
  },
]

export default function StaffDirectory() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Faculty & Staff Directory</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Meet the dedicated team behind the Technology Transfer and Innovation Office
            </p>
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((staff, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{staff.name}</CardTitle>
                  <p className="text-sm text-gray-600">{staff.title}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-bsu-gold mt-0.5 flex-shrink-0" />
                    <a href={`mailto:${staff.email}`} className="text-sm text-gray-600 hover:text-bsu-gold break-all">
                      {staff.email}
                    </a>
                  </div>
                  {staff.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-bsu-gold flex-shrink-0" />
                      <a href={`tel:${staff.phone}`} className="text-sm text-gray-600 hover:text-bsu-gold">
                        {staff.phone}
                      </a>
                    </div>
                  )}
                  {staff.office && (
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-bsu-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{staff.office}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-bsu-dark text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Contact the Office</h2>
            <p className="text-gray-300 mb-6">
              For general inquiries or to schedule an appointment, please contact our main office:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Main Office</h3>
                <p className="text-gray-300 text-sm">
                  Office of Research and Sponsored Programs
                  <br />
                  Robinson Hall, Room 114
                  <br />
                  Bowie State University
                  <br />
                  14000 Jericho Park Road
                  <br />
                  Bowie, MD 20715
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-300 text-sm">
                  Phone: (301) 860-3500
                  <br />
                  Email: researchandsponsored@bowiestate.edu
                  <br />
                  <br />
                  Office Hours:
                  <br />
                  Monday - Friday, 8:30 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
