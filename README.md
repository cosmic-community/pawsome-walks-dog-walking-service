# Pawsome Walks Dog Walking Service

![App Preview](https://imgix.cosmicjs.com/5adc0820-6594-11f0-a051-23c10f41277a-photo-1601758228041-f3b2795255f1-1753034827988.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional dog walking service website built with Next.js and powered by [Cosmic](https://www.cosmicjs.com). Features service listings, team profiles, customer testimonials, and an educational blog about dog care.

## Features

- 🐕 **Service Showcase** - Detailed service pages with pricing and features
- 👥 **Professional Team** - Meet the certified dog walkers and trainers
- ⭐ **Customer Reviews** - Testimonials with ratings and photos
- 📝 **Educational Blog** - Dog care tips, safety guides, and training advice
- 📞 **Contact Information** - Service areas, hours, and multiple contact methods
- 🏠 **About Company** - Mission, story, and business statistics
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized with Next.js 15 and Server Components

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=687d2f3bace2d34c4e959833&clone_repository=687d32f1ace2d34c4e95985e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a dog walking service website with about, services, testimonials, and any other needed content."

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **CMS**: [Cosmic](https://www.cosmicjs.com/docs)
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel, Netlify, and other platforms

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .depth(1)
```

### Getting Team Members
```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Blog Posts with Authors
```typescript
const { objects: posts } = await cosmic.objects
  .find({ type: 'blog' })
  .depth(1) // Include connected author data
```

## Cosmic CMS Integration

This application integrates with your Cosmic bucket's content structure:

- **Services** - Dog walking packages with pricing and features
- **Team Members** - Professional profiles with photos and certifications
- **Testimonials** - Customer reviews with ratings and locations  
- **Blog Posts** - Educational content about dog care and training
- **About Page** - Company information and statistics
- **Contact Info** - Business details, hours, and service areas

All content is managed through the Cosmic dashboard and updates automatically on your website.

## Deployment Options

### Vercel (Recommended for Next.js)
1. Connect your repository to Vercel
2. Add environment variables in project settings
3. Deploy automatically on push to main branch

### Netlify
1. Connect your repository to Netlify  
2. Add environment variables in site settings
3. Deploy automatically on push to main branch

### Environment Variables
Set these variables in your deployment platform:
```env
COSMIC_BUCKET_SLUG=dog-walkers-inc-production
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```
<!-- README_END -->