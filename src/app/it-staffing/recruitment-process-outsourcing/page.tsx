import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function RecruitmentProcessOutsourcing() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Recruitment Process Outsourcing (RPO)
        </Heading>
        
        <div className="mb-8 relative">
          <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
            <Image 
              src="/images/staffing/rpo.png"
              alt="Recruitment Process Outsourcing"
              width={300}
              height={300}
              className="object-contain"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.src = '/images/rpo.png';
              }}
            />
          </div>
        </div>
        
        <Content className="prose max-w-none">
          <p>
            Our Recruitment Process Outsourcing (RPO) service provides a comprehensive solution for organizations 
            looking to streamline their hiring processes, reduce costs, and improve the quality of their talent 
            acquisition. We act as an extension of your HR department, taking ownership of the entire recruitment 
            lifecycle or specific components based on your needs.
          </p>
          
          <h2>What is RPO?</h2>
          
          <p>
            Recruitment Process Outsourcing (RPO) is a strategic partnership where an external provider assumes 
            responsibility for all or part of your recruitment function. Unlike traditional staffing services that 
            focus on filling individual positions, RPO is a more holistic approach that optimizes your entire 
            recruitment process, enhances your employer brand, and delivers a consistent pipeline of quality talent.
          </p>
          
          <h2>Our RPO Models</h2>
          
          <div className="space-y-6">
            <div>
              <h3>Full-Service RPO</h3>
              <p>
                We manage your entire recruitment process from job requisition to onboarding, acting as your 
                complete talent acquisition department.
              </p>
            </div>
            
            <div>
              <h3>Project-Based RPO</h3>
              <p>
                Designed for specific hiring initiatives, such as opening a new office, launching a new department, 
                or handling seasonal hiring surges.
              </p>
            </div>
            
            <div>
              <h3>Selective RPO</h3>
              <p>
                We handle specific components of your recruitment process, such as sourcing, screening, or 
                assessment, while you maintain control of other aspects.
              </p>
            </div>
            
            <div>
              <h3>Hybrid RPO</h3>
              <p>
                A customized combination of internal resources and our RPO services, tailored to your 
                organization's unique needs.
              </p>
            </div>
          </div>
          
          <h2>Our RPO Services Include</h2>
          
          <ul>
            <li>
              <strong>Workforce Planning</strong>
              <p>
                Strategic analysis of your hiring needs and development of comprehensive recruitment plans.
              </p>
            </li>
            <li>
              <strong>Employer Branding</strong>
              <p>
                Enhancement of your company's reputation as an employer of choice in the IT industry.
              </p>
            </li>
            <li>
              <strong>Candidate Sourcing</strong>
              <p>
                Proactive identification and engagement of passive and active candidates through multiple channels.
              </p>
            </li>
            <li>
              <strong>Candidate Screening</strong>
              <p>
                Thorough assessment of candidates using technical evaluations, behavioral interviews, and background checks.
              </p>
            </li>
            <li>
              <strong>Interview Management</strong>
              <p>
                Coordination of the entire interview process, including scheduling, preparation, and feedback collection.
              </p>
            </li>
            <li>
              <strong>Offer Management</strong>
              <p>
                Handling of negotiations, offer creation, and acceptance tracking.
              </p>
            </li>
            <li>
              <strong>Onboarding Support</strong>
              <p>
                Assistance with the integration of new hires into your organization.
              </p>
            </li>
            <li>
              <strong>Analytics and Reporting</strong>
              <p>
                Comprehensive metrics and insights to continuously improve your recruitment process.
              </p>
            </li>
          </ul>
          
          <h2>Benefits of Our RPO Solutions</h2>
          
          <ul>
            <li>
              <strong>Cost Efficiency</strong>
              <p>
                Reduction in recruitment costs through streamlined processes and economies of scale.
              </p>
            </li>
            <li>
              <strong>Scalability</strong>
              <p>
                Flexible resources that can quickly adapt to changing hiring volumes and business needs.
              </p>
            </li>
            <li>
              <strong>Improved Quality of Hire</strong>
              <p>
                Access to specialized recruiters with deep industry knowledge and advanced sourcing techniques.
              </p>
            </li>
            <li>
              <strong>Reduced Time-to-Hire</strong>
              <p>
                Accelerated recruitment cycles through optimized processes and dedicated resources.
              </p>
            </li>
            <li>
              <strong>Enhanced Compliance</strong>
              <p>
                Ensured adherence to all relevant employment laws and regulations.
              </p>
            </li>
            <li>
              <strong>Advanced Technology</strong>
              <p>
                Utilization of cutting-edge recruitment technologies without additional investment.
              </p>
            </li>
            <li>
              <strong>Strategic Focus</strong>
              <p>
                Freedom for your HR team to focus on strategic initiatives rather than administrative recruitment tasks.
              </p>
            </li>
          </ul>
          
          <p>
            Partner with us for your RPO needs and transform your talent acquisition from a tactical function to a 
            strategic advantage. Contact us today to discuss how our RPO solutions can be tailored to your specific 
            requirements.
          </p>
        </Content>
      </div>
    </main>
  );
} 