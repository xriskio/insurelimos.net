# InsureLimos - Transportation Insurance Platform

## Overview

InsureLimos is a specialized insurance quote management platform for transportation companies. The application serves as a lead generation and quote request system for various types of commercial transportation insurance, including limousine services, rideshare/TNC operators, NEMT (Non-Emergency Medical Transportation), taxis, buses, and other public auto services.

The platform is built as a modern full-stack web application that allows potential clients to submit detailed quote requests through specialized forms, which are then stored in a database for follow-up by insurance agents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Technology Stack

**Frontend:**
- React 18 with TypeScript
- Vite as the build tool and development server
- Tailwind CSS v4 (via @tailwindcss/vite) for styling
- Wouter for client-side routing
- shadcn/ui component library built on Radix UI primitives
- React Hook Form with Zod for form validation
- TanStack Query for server state management
- Framer Motion for animations

**Backend:**
- Node.js with Express
- TypeScript throughout the stack
- PostgreSQL database via Drizzle ORM
- Session-based architecture (connect-pg-simple for session storage)

**Infrastructure:**
- Designed for Replit deployment
- Google Cloud Storage integration for file uploads via Replit's object storage sidecar
- Database migrations managed through Drizzle Kit

### Application Structure

The codebase follows a monorepo structure with three main directories:

1. **`/client`** - React frontend application
2. **`/server`** - Express backend API
3. **`/shared`** - Shared TypeScript schemas and types (Drizzle schemas, Zod validators)

### Frontend Architecture

**Routing Strategy:**
- Client-side routing using Wouter (lightweight React Router alternative)
- Main routes: Home, Services, Coverage, About, Contact, Quote pages
- Dynamic quote forms based on URL parameters (`/quote/:type`)

**Component Organization:**
- `/components/ui/` - Reusable shadcn/ui components
- `/components/layout/` - Header and Footer layout components
- `/components/sections/` - Page-specific sections (Hero, ServicesGrid, CoverageList)
- `/components/forms/` - Specialized quote forms for different insurance types
- `/components/seo/` - SEO meta tag management component

**State Management:**
- React Hook Form for form state
- TanStack Query for API data fetching and caching
- Local component state with useState/useEffect

**Styling Approach:**
- Tailwind CSS with custom theme configuration
- CSS custom properties for theming (defined in index.css)
- shadcn/ui provides pre-styled, accessible components
- Custom fonts: Inter (body), Montserrat (headings)

### Backend Architecture

**API Design:**
- RESTful API endpoints under `/api/*`
- Quote submission endpoints for each insurance type:
  - `/api/quotes/limo` - Limousine insurance quotes
  - `/api/quotes/tnc` - TNC/rideshare quotes
  - `/api/quotes/nemt` - NEMT quotes
  - `/api/quotes/transport` - General transport quotes
  - Additional endpoints for workers comp, excess liability, cyber liability
- Contact form endpoint: `/api/contact`

**Request/Response Flow:**
1. Client submits form data via POST request
2. Server validates data using Zod schemas (imported from `/shared`)
3. Data is inserted into PostgreSQL via Drizzle ORM
4. Success/error response returned to client
5. Client displays toast notification

**Error Handling:**
- Zod validation errors converted to user-friendly messages via `zod-validation-error`
- 400 status for validation failures
- 500 status for server errors
- Try-catch blocks around all async operations

**File Upload System:**
- Integration with Google Cloud Storage via Replit's sidecar service
- ObjectUploader component requests signed upload URLs from server
- Direct upload from browser to GCS
- ACL (Access Control List) management for object permissions
- Support for multiple file uploads with validation (file type, size, count limits)

### Database Schema

**Core Tables (Drizzle ORM):**

1. **`transport_quotes`** - Comprehensive quote storage for all transportation types
   - Business and contact information
   - Vehicle details (stored as JSON array)
   - Driver information (stored as JSON array)
   - Coverage requirements
   - Loss history
   - Uploaded document references
   - Quote type discriminator field

2. **Individual Quote Tables** (Legacy/Specialized):
   - `limo_quotes` - Limousine-specific quotes
   - `tnc_quotes` - TNC/rideshare quotes
   - `nemt_quotes` - NEMT quotes
   - `public_auto_quotes` - General public auto
   - `workers_comp_quotes` - Workers compensation
   - `excess_liability_quotes` - Excess liability
   - `cyber_liability_quotes` - Cyber liability

3. **`contact_messages`** - General contact form submissions

**Schema Design Decisions:**
- UUID primary keys via `gen_random_uuid()`
- Text fields for most data (flexible, no strict typing at DB level)
- JSON/JSONB fields for complex nested data (vehicles, drivers)
- Array fields for multi-select values (filings needed, uploaded documents)
- Timestamps for all records
- No foreign keys or relations (simplified lead capture system)

### Build and Deployment

**Development Mode:**
- Vite dev server on port 5000 for client
- Express server with Vite middleware integration
- Hot Module Replacement (HMR) for rapid development
- TypeScript type checking without emission

**Production Build:**
- Custom build script (`script/build.ts`) using esbuild
- Client build via Vite to `dist/public`
- Server bundled to `dist/index.cjs` via esbuild
- Server dependencies selectively bundled (allowlist approach) to reduce cold start time
- Static file serving from `dist/public`

**Deployment Configuration:**
- Replit-specific plugins:
  - `@replit/vite-plugin-runtime-error-modal` - Error overlay
  - `@replit/vite-plugin-cartographer` - Code navigation
  - `@replit/vite-plugin-dev-banner` - Development banner
  - Custom `metaImagesPlugin` - Updates OpenGraph images for Replit domains

## External Dependencies

### Third-Party Services

**Google Cloud Storage:**
- Used for file uploads (quote documents, attachments)
- Authentication via Replit's sidecar service at `http://127.0.0.1:1106`
- External account credentials with subject token exchange
- ACL policy management for access control

**Search Engine Indexing:**
- **IndexNow API** - Automatic URL submission for Google, Bing, Yandex
  - Key: `b84008cb48a94a9fb067ae2b2481c1bc`
  - Automatically submits new blog/news posts when published
- **Bing Webmaster URL Submission API** - Direct Bing indexing
  - Uses `BING_WEBMASTER_API_KEY` environment variable
  - Allows up to 10,000 URLs per day
  - Admin portal has "SEO" tab for manual bulk submission
- Both APIs are called simultaneously via `submitToAllSearchEngines()` in `server/indexnow.ts`
- Sitemap available at `/sitemap.xml`, robots.txt at `/robots.txt`

**Google SEO Implementation (Following Google Search Central Guidelines):**
- Structured data using JSON-LD format (recommended by Google)
- Schema types implemented:
  - `WebSite` - Site name, search action, alternate names
  - `InsuranceAgency` - Business info, contact points, service catalog
  - `LocalBusiness` - Address, hours, geo coordinates
  - `BreadcrumbList` - Navigation breadcrumbs for all pages
  - `ItemList` - Carousel-style listings for services and blog posts
  - `Article` - Full article schema for blog/news posts
  - `FAQPage` - FAQ structured data for coverage pages
  - `Service` - Individual insurance service schemas
- Core Web Vitals optimizations in CSS:
  - LCP: Font preloading, image prioritization, content-visibility
  - CLS: Aspect ratios, image dimensions, layout containment
  - INP: GPU-accelerated transitions, will-change hints
- Page experience optimizations:
  - Mobile-friendly with 44px touch targets
  - Reduced motion support for accessibility
  - High contrast mode support
  - HTTPS-ready configuration

**PostgreSQL Database:**
- Primary data store via `DATABASE_URL` environment variable
- Connection pooling via `pg` library
- Schema management through Drizzle Kit migrations

### Key NPM Packages

**UI Components:**
- `@radix-ui/*` - 25+ primitive components for accessibility
- `lucide-react` - Icon library
- `class-variance-authority` - Component variant management
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library

**Forms & Validation:**
- `react-hook-form` - Form state management
- `zod` - Runtime type validation
- `@hookform/resolvers` - RHF + Zod integration

**Data Fetching:**
- `@tanstack/react-query` - Server state management

**Backend:**
- `express` - Web framework
- `drizzle-orm` - TypeScript ORM
- `drizzle-kit` - Schema migrations
- `pg` - PostgreSQL client
- `connect-pg-simple` - PostgreSQL session store
- `express-session` - Session middleware

**Development:**
- `vite` - Build tool and dev server
- `typescript` - Type safety
- `tsx` - TypeScript execution
- `esbuild` - Production bundling

### Configuration Files

- `drizzle.config.ts` - Database connection and migration settings
- `vite.config.ts` - Frontend build configuration with plugins
- `tsconfig.json` - TypeScript compiler options with path aliases
- `tailwind.config.ts` - Tailwind customization (referenced in components.json)
- `components.json` - shadcn/ui configuration