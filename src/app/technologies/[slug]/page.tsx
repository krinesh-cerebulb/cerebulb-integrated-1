'use client';

import { useParams } from 'next/navigation';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';
import Image from 'next/image';

// Technology content for each slug
const technologyContent = {
  'java': {
    title: 'Java',
    image: '/tech/java.png',
    description: `
      <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
      
      <h2>Our Java Solutions</h2>
      <p>We provide comprehensive Java development services, from enterprise applications to cloud-based systems. Our expertise spans across:</p>
      
      <ul>
        <li>Spring Framework (Spring Boot, Spring MVC, Spring Security)</li>
        <li>Java EE (Jakarta EE)</li>
        <li>Microservices architecture</li>
        <li>REST API development</li>
        <li>Java-based web applications</li>
        <li>Enterprise Java Beans (EJB)</li>
        <li>Hibernate & JPA</li>
      </ul>
      
      <h2>Why Choose Us for Java Development?</h2>
      <p>Our team of experienced Java developers follows best practices and design patterns to deliver scalable, maintainable, and secure applications. We focus on:</p>
      
      <ul>
        <li>Clean, well-documented code</li>
        <li>Optimal performance and scalability</li>
        <li>Comprehensive testing at all stages</li>
        <li>Continuous integration and deployment</li>
        <li>Long-term support and maintenance</li>
      </ul>
    `
  },
  'dotnet': {
    title: '.NET',
    image: '/tech/dotnet.png',
    description: `
      <p>.NET is a free, cross-platform, open-source developer platform for building many different types of applications, from web and mobile to desktop, gaming, IoT, and more.</p>
      
      <h2>Our .NET Expertise</h2>
      <p>We offer extensive .NET development services across the entire Microsoft technology stack:</p>
      
      <ul>
        <li>ASP.NET Core and MVC development</li>
        <li>Blazor web applications</li>
        <li>WPF and Windows Forms desktop applications</li>
        <li>.NET MAUI for cross-platform mobile development</li>
        <li>Entity Framework for data access</li>
        <li>Azure cloud integration</li>
        <li>SignalR for real-time applications</li>
      </ul>
      
      <h2>Why Choose Us for .NET Development?</h2>
      <p>Our certified .NET developers have deep expertise in Microsoft technologies and can help you:</p>
      
      <ul>
        <li>Build secure, scalable web applications</li>
        <li>Migrate legacy .NET applications to modern .NET Core/.NET 7+</li>
        <li>Develop cross-platform applications</li>
        <li>Integrate with Microsoft ecosystem (Azure, SQL Server, Power BI)</li>
        <li>Implement CI/CD pipelines for .NET applications</li>
      </ul>
    `
  },
  'crm': {
    title: 'CRM',
    image: '/tech/crm.png',
    description: `
      <p>Customer Relationship Management (CRM) systems help businesses manage customer data, interactions, and relationships to improve business relationships, customer retention, and drive sales growth.</p>
      
      <h2>Our CRM Services</h2>
      <p>We provide comprehensive CRM solutions tailored to your business needs:</p>
      
      <ul>
        <li>Salesforce implementation and customization</li>
        <li>Microsoft Dynamics 365 development</li>
        <li>HubSpot integration and setup</li>
        <li>Custom CRM development</li>
        <li>CRM migration and data integration</li>
        <li>CRM training and support</li>
      </ul>
      
      <h2>Benefits of Our CRM Solutions</h2>
      <p>Our CRM implementations help organizations:</p>
      
      <ul>
        <li>Centralize customer information</li>
        <li>Automate sales processes</li>
        <li>Improve customer service</li>
        <li>Generate detailed analytics and reports</li>
        <li>Increase team collaboration</li>
        <li>Boost sales and marketing efficiency</li>
      </ul>
    `
  },
  'api-testing': {
    title: 'API Testing',
    image: '/tech/api-testing.png',
    description: `
      <p>API testing validates the functionality, reliability, performance, and security of application programming interfaces, ensuring they meet the expected requirements.</p>
      
      <h2>Our API Testing Services</h2>
      <p>We provide comprehensive API testing solutions:</p>
      
      <ul>
        <li>RESTful and SOAP API testing</li>
        <li>GraphQL API testing</li>
        <li>Automated API testing frameworks</li>
        <li>Performance and load testing for APIs</li>
        <li>Security testing for APIs</li>
        <li>API documentation validation</li>
      </ul>
      
      <h2>Our API Testing Approach</h2>
      <p>Our testing methodology includes:</p>
      
      <ul>
        <li>Test case design based on API specifications</li>
        <li>Automated testing using industry-leading tools (Postman, JMeter, RestAssured)</li>
        <li>Continuous integration for API tests</li>
        <li>Comprehensive reporting and monitoring</li>
        <li>Shift-left testing approach</li>
      </ul>
    `
  },
  'devops': {
    title: 'DevOps',
    image: '/tech/devops.png',
    description: `
      <p>DevOps combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives.</p>
      
      <h2>Our DevOps Services</h2>
      <p>We offer end-to-end DevOps solutions to streamline your development and deployment processes:</p>
      
      <ul>
        <li>CI/CD pipeline implementation</li>
        <li>Infrastructure as Code (IaC)</li>
        <li>Container orchestration (Docker, Kubernetes)</li>
        <li>Configuration management</li>
        <li>Cloud infrastructure automation</li>
        <li>Monitoring and logging solutions</li>
      </ul>
      
      <h2>Benefits of Our DevOps Solutions</h2>
      <p>Our DevOps implementation helps organizations achieve:</p>
      
      <ul>
        <li>Faster time to market</li>
        <li>Improved collaboration between teams</li>
        <li>Higher quality software delivery</li>
        <li>More reliable releases</li>
        <li>Better resource utilization</li>
        <li>Automated, repeatable processes</li>
      </ul>
    `
  },
  'cloud-technologies': {
    title: 'Cloud Technologies',
    image: '/tech/cloud.png',
    description: `
      <p>Cloud technologies enable on-demand delivery of computing power, database storage, applications, and other IT resources through a cloud services platform via the internet with pay-as-you-go pricing.</p>
      
      <h2>Our Cloud Services</h2>
      <p>We provide comprehensive cloud solutions across major platforms:</p>
      
      <ul>
        <li>Cloud migration strategies</li>
        <li>AWS, Azure, and Google Cloud implementation</li>
        <li>Serverless architecture design</li>
        <li>Cloud-native application development</li>
        <li>Multi-cloud and hybrid cloud solutions</li>
        <li>Cloud security and compliance</li>
      </ul>
      
      <h2>Why Choose Our Cloud Services?</h2>
      <p>Our certified cloud specialists can help you:</p>
      
      <ul>
        <li>Reduce IT infrastructure costs</li>
        <li>Improve scalability and flexibility</li>
        <li>Enhance data security and disaster recovery</li>
        <li>Optimize cloud resource utilization</li>
        <li>Implement best practices for cloud governance</li>
        <li>Achieve faster time-to-market for your applications</li>
      </ul>
    `
  },
  'project-management': {
    title: 'Project Management',
    image: '/tech/project-management.png',
    description: `
      <p>Project management is the application of processes, methods, skills, knowledge, and experience to achieve specific project objectives according to the project acceptance criteria within agreed parameters.</p>
      
      <h2>Our Project Management Services</h2>
      <p>We provide comprehensive project management solutions for technology projects:</p>
      
      <ul>
        <li>Agile and Scrum methodology implementation</li>
        <li>Traditional waterfall project management</li>
        <li>Hybrid project management approaches</li>
        <li>PMO setup and optimization</li>
        <li>Project recovery services</li>
        <li>Project portfolio management</li>
      </ul>
      
      <h2>Our Project Management Approach</h2>
      <p>Our certified project managers ensure:</p>
      
      <ul>
        <li>Clear project scope and requirements definition</li>
        <li>Effective communication and stakeholder management</li>
        <li>Risk identification and mitigation strategies</li>
        <li>Resource optimization and budget control</li>
        <li>Quality assurance throughout the project lifecycle</li>
        <li>Regular reporting and transparency</li>
      </ul>
    `
  },
  'bigdata-technologies': {
    title: 'BigData Technologies',
    image: '/tech/bigdata.png',
    description: `
      <p>Big Data technologies enable organizations to store, process, and analyze vast volumes of structured and unstructured data to extract valuable insights and make data-driven decisions.</p>
      
      <h2>Our Big Data Services</h2>
      <p>We provide comprehensive Big Data solutions:</p>
      
      <ul>
        <li>Data lake and data warehouse implementation</li>
        <li>Hadoop ecosystem deployment</li>
        <li>Apache Spark for large-scale data processing</li>
        <li>Real-time data streaming (Kafka, Apache Flink)</li>
        <li>NoSQL database solutions (MongoDB, Cassandra)</li>
        <li>ETL pipeline development</li>
      </ul>
      
      <h2>Benefits of Our Big Data Solutions</h2>
      <p>Our Big Data implementations help organizations:</p>
      
      <ul>
        <li>Gain actionable insights from massive datasets</li>
        <li>Improve business intelligence and decision making</li>
        <li>Enhance customer experience through data-driven approaches</li>
        <li>Optimize operations and reduce costs</li>
        <li>Develop predictive analytics capabilities</li>
        <li>Scale data processing as business needs grow</li>
      </ul>
    `
  },
  'ai-machine-learning': {
    title: 'AI & Machine Learning',
    image: '/tech/ai-ml.png',
    description: `
      <p>Artificial Intelligence (AI) and Machine Learning (ML) enable systems to learn from data, identify patterns, and make decisions with minimal human intervention, revolutionizing how businesses operate and deliver value.</p>
      
      <h2>Our AI & ML Services</h2>
      <p>We provide end-to-end AI and Machine Learning solutions:</p>
      
      <ul>
        <li>Predictive analytics and forecasting</li>
        <li>Natural Language Processing (NLP)</li>
        <li>Computer Vision solutions</li>
        <li>Recommendation systems</li>
        <li>Anomaly detection and fraud prevention</li>
        <li>Reinforcement learning applications</li>
      </ul>
      
      <h2>Our AI & ML Approach</h2>
      <p>Our team of data scientists and ML engineers follow a structured approach:</p>
      
      <ul>
        <li>Problem definition and requirements analysis</li>
        <li>Data collection, cleaning, and preprocessing</li>
        <li>Feature engineering and model selection</li>
        <li>Model training, validation, and testing</li>
        <li>Model deployment and integration with existing systems</li>
        <li>Continuous monitoring and improvement</li>
      </ul>
    `
  }
};

export default function TechnologyDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Get content for the current slug or use a default if not found
  const content = technologyContent[slug] || {
    title: slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ') : 'Technology Details',
    image: '/tech/default.png',
    description: `<p>Detailed information about ${slug ? slug.replace(/-/g, ' ') : 'this technology'} will be coming soon.</p>`
  };

  return (
    <main className="container py-8 px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <Heading className="mb-6 text-3xl font-bold">
          {content.title}
        </Heading>
        
        {content.image && (
          <div className="mb-8 relative">
            <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
              <Image 
                src={content.image}
                alt={content.title}
                width={200}
                height={200}
                className="object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = '/tech/default.png';
                }}
              />
            </div>
          </div>
        )}
        
        <Content className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content.description }} />
        </Content>
      </div>
    </main>
  );
} 