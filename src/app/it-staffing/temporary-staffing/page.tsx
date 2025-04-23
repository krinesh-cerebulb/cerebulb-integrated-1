import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function TemporaryStaffing() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Temporary Staffing
        </Heading>
        
        <div className="mb-8 relative">
          <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
            <Image 
              src="/images/staffing/temporary-staffing.png"
              alt="Temporary Staffing"
              width={300}
              height={300}
              className="object-contain"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.src = '/images/temporary-staffing.png';
              }}
            />
          </div>
        </div>
        
        <Content className="prose max-w-none">
          <p>
            Our temporary staffing solutions provide the flexibility you need to manage workload fluctuations, 
            special projects, or temporary absences. We offer skilled IT professionals who can hit the ground 
            running and deliver results quickly, helping you maintain productivity and meet deadlines without 
            the long-term commitment.
          </p>
          
          <h2>When to Consider Temporary Staffing</h2>
          
          <ul>
            <li>
              <strong>Project-Based Needs</strong>
              <p>
                When you need specialized skills for a specific project with a defined timeline.
              </p>
            </li>
            <li>
              <strong>Workload Fluctuations</strong>
              <p>
                During busy periods or seasonal peaks when your team needs additional support.
              </p>
            </li>
            <li>
              <strong>Staff Absences</strong>
              <p>
                To cover for employees on leave due to illness, maternity/paternity, or sabbaticals.
              </p>
            </li>
            <li>
              <strong>Skills Gap</strong>
              <p>
                When you need immediate expertise that your current team doesn't possess.
              </p>
            </li>
            <li>
              <strong>Try Before You Hire</strong>
              <p>
                To evaluate a candidate's skills and cultural fit before making a permanent hiring decision.
              </p>
            </li>
          </ul>
          
          <h2>Our Temporary Staffing Process</h2>
          
          <ol>
            <li>
              <strong>Requirement Analysis</strong>
              <p>
                We discuss your specific needs, project scope, timeline, and required skills to understand 
                exactly what you're looking for.
              </p>
            </li>
            <li>
              <strong>Quick Candidate Matching</strong>
              <p>
                We tap into our pre-screened talent pool to quickly identify professionals with the right 
                skills and availability.
              </p>
            </li>
            <li>
              <strong>Expedited Screening</strong>
              <p>
                Our streamlined vetting process ensures that candidates meet your technical requirements 
                and can adapt quickly to your environment.
              </p>
            </li>
            <li>
              <strong>Rapid Deployment</strong>
              <p>
                We coordinate a swift onboarding process to get the professional working productively as 
                quickly as possible.
              </p>
            </li>
            <li>
              <strong>Ongoing Support</strong>
              <p>
                We maintain regular contact with both you and the temporary professional to ensure everything 
                is progressing smoothly and address any concerns promptly.
              </p>
            </li>
          </ol>
          
          <h2>Benefits of Our Temporary Staffing Services</h2>
          
          <ul>
            <li>Immediate access to skilled professionals</li>
            <li>Flexibility to scale your workforce up or down as needed</li>
            <li>Reduced recruitment and onboarding costs</li>
            <li>No long-term commitments or overhead expenses</li>
            <li>Fresh perspectives and specialized expertise</li>
            <li>Reduced burden on your permanent staff</li>
          </ul>
          
          <h2>Available Temporary Roles</h2>
          
          <p>
            We provide temporary professionals across various IT disciplines, including:
          </p>
          
          <ul>
            <li>Software Developers and Programmers</li>
            <li>Project Managers and Business Analysts</li>
            <li>QA and Testing Specialists</li>
            <li>UX/UI Designers</li>
            <li>DevOps Engineers</li>
            <li>Database Administrators</li>
            <li>Network and Systems Engineers</li>
            <li>IT Support Professionals</li>
          </ul>
          
          <p>
            Whatever your temporary staffing needs, we have the expertise to help you maintain momentum and achieve 
            your business objectives. Contact us today to discuss how we can support your workforce requirements.
          </p>
        </Content>
      </div>
    </main>
  );
} 