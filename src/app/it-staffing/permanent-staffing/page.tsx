import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function PermanentStaffing() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Permanent Staffing
        </Heading>
        
        <div className="mb-8 relative">
          <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
            <Image 
              src="/images/staffing/permanent-staffing.png"
              alt="Permanent Staffing"
              width={300}
              height={300}
              className="object-contain"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.src = '/images/permanent-staffing.png';
              }}
            />
          </div>
        </div>
        
        <Content className="prose max-w-none">
          <p>
            Our permanent staffing solutions are designed to help you find the perfect talent for your long-term needs. 
            We understand that hiring the right talent is crucial for your organization's success, and our experienced 
            recruiters work tirelessly to identify candidates who not only have the right skills but also fit your 
            company culture.
          </p>
          
          <h2>Our Permanent Staffing Process</h2>
          
          <ol>
            <li>
              <strong>Understanding Your Requirements</strong>
              <p>
                We start by thoroughly understanding your business, culture, and specific job requirements to ensure 
                we find the perfect match for your organization.
              </p>
            </li>
            <li>
              <strong>Candidate Sourcing</strong>
              <p>
                Our specialized recruiters leverage our extensive network, advanced sourcing techniques, and industry 
                expertise to identify top talent across various technology domains.
              </p>
            </li>
            <li>
              <strong>Rigorous Screening</strong>
              <p>
                Each candidate undergoes a comprehensive screening process including technical assessments, behavioral 
                interviews, and background checks to ensure they meet your standards.
              </p>
            </li>
            <li>
              <strong>Candidate Presentation</strong>
              <p>
                We present you with a carefully selected shortlist of candidates who match your requirements, saving 
                you time and resources in the hiring process.
              </p>
            </li>
            <li>
              <strong>Interview Coordination</strong>
              <p>
                We coordinate interviews between you and potential candidates, providing feedback and guidance throughout 
                the process.
              </p>
            </li>
            <li>
              <strong>Offer and Onboarding Support</strong>
              <p>
                We assist with offer negotiation and provide support during the onboarding process to ensure a smooth 
                transition for both you and the new hire.
              </p>
            </li>
          </ol>
          
          <h2>Benefits of Our Permanent Staffing Services</h2>
          
          <ul>
            <li>Access to a wide pool of pre-screened, qualified candidates</li>
            <li>Reduced time-to-hire and recruitment costs</li>
            <li>Higher quality hires that align with your company culture</li>
            <li>Decreased employee turnover</li>
            <li>Ongoing support and relationship management</li>
            <li>Industry insights and market intelligence</li>
          </ul>
          
          <h2>Areas of Expertise</h2>
          
          <p>
            We specialize in recruiting for a variety of technology roles including but not limited to:
          </p>
          
          <ul>
            <li>Software Development (Java, .NET, Python, etc.)</li>
            <li>DevOps and Cloud Engineering</li>
            <li>Data Science and Analytics</li>
            <li>Cybersecurity</li>
            <li>Project Management</li>
            <li>IT Leadership (CIO, CTO, IT Directors)</li>
            <li>Network and System Administration</li>
            <li>QA and Testing</li>
          </ul>
          
          <p>
            Let us help you build a strong, talented team that will drive your business forward. Contact us today to 
            discuss your permanent staffing needs.
          </p>
        </Content>
      </div>
    </main>
  );
} 