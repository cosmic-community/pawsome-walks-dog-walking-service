// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// About page data
interface About extends CosmicObject {
  type: 'about';
  metadata: {
    hero_title?: string;
    hero_subtitle?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    mission?: string;
    story?: string;
    years_experience?: number;
    dogs_walked?: number;
    happy_customers?: number;
  };
}

// Services
interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    description?: string;
    price?: string;
    duration?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    features?: string[];
    featured?: boolean;
  };
}

// Team members
interface TeamMember extends CosmicObject {
  type: 'team';
  metadata: {
    name?: string;
    position?: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    years_experience?: number;
    favorite_breed?: string;
    certifications?: string[];
  };
}

// Testimonials
interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    dog_name?: string;
    review?: string;
    rating?: {
      key: string;
      value: string;
    };
    photo?: {
      url: string;
      imgix_url: string;
    };
    location?: string;
    featured?: boolean;
  };
}

// Blog posts
interface BlogPost extends CosmicObject {
  type: 'blog';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: TeamMember;
    published_date?: string;
    tags?: string[];
  };
}

// Contact information
interface ContactInfo extends CosmicObject {
  type: 'contact';
  metadata: {
    business_name?: string;
    phone?: string;
    email?: string;
    address?: string;
    service_areas?: string[];
    hours?: Record<string, string>;
    emergency_phone?: string;
  };
}

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
function isAbout(obj: CosmicObject): obj is About {
  return obj.type === 'about';
}

function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team';
}

function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog';
}

function isContactInfo(obj: CosmicObject): obj is ContactInfo {
  return obj.type === 'contact';
}

// Export types
export type {
  CosmicObject,
  About,
  Service,
  TeamMember,
  Testimonial,
  BlogPost,
  ContactInfo,
  CosmicResponse,
};

export {
  isAbout,
  isService,
  isTeamMember,
  isTestimonial,
  isBlogPost,
  isContactInfo,
};