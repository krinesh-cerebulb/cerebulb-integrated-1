import Link from 'next/link';
// import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: 'the-future-of-ai-in-business',
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming the business landscape and what it means for companies.',
    date: 'June 15, 2024',
    author: 'John Smith',
    authorImage: '/avatars/author-1.jpg',
    category: 'Technology',
    image: '/blog/ai-business.jpg'
  },
  {
    id: 2,
    slug: 'mastering-devops-practices',
    title: 'Mastering DevOps Practices',
    excerpt: 'Learn the essential DevOps practices that can streamline your development process and improve team collaboration.',
    date: 'May 28, 2024',
    author: 'Sarah Johnson',
    authorImage: '/avatars/author-2.jpg',
    category: 'Development',
    image: '/blog/devops.jpg'
  },
  {
    id: 3,
    slug: 'securing-your-cloud-infrastructure',
    title: 'Securing Your Cloud Infrastructure',
    excerpt: 'Best practices for maintaining security in your cloud infrastructure and protecting sensitive data.',
    date: 'April 10, 2024',
    author: 'Michael Brown',
    authorImage: '/avatars/author-3.jpg',
    category: 'Security',
    image: '/blog/cloud-security.jpg'
  },
  {
    id: 4,
    slug: 'the-rise-of-remote-work',
    title: 'The Rise of Remote Work',
    excerpt: 'How remote work is changing the IT industry and strategies for managing remote teams effectively.',
    date: 'March 5, 2024',
    author: 'Lisa Chen',
    authorImage: '/avatars/author-4.jpg',
    category: 'Work Culture',
    image: '/blog/remote-work.jpg'
  }
];

export default function Blog() {
  return (
    <main className="container py-8 px-4 mx-auto">
      <Heading className="mb-4">Our Blog</Heading>
      
      <Content className="prose max-w-none mb-8">
        <p>Stay updated with the latest trends, insights, and news in the IT industry.</p>
      </Content>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full bg-gray-200">
              {/* Fallback for missing images in development */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                {post.title[0]}
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {post.date} • {post.category}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-xs">
                  {post.author[0]}
                </div>
                <span className="text-sm font-medium">{post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 