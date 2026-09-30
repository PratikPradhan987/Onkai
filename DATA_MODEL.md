# DATA MODEL

V1 is file-based and typed.

## Project
- slug: string
- title: string
- tagline: string
- description: string
- category: app | game | web | experiment
- status: concept | prototype | development | released | archived
- year: number
- technologies: string[]
- featured: boolean
- thumbnail: string
- heroImage: string
- links: optional object
- accessibilityNotes: optional string
- caseStudy: optional structured content

## Service
- slug
- title
- shortDescription
- description
- capabilities[]
- featured

## Experiment
- slug
- title
- description
- category
- status
- image
- technologies[]

Use TypeScript interfaces/types and validate dynamic route inputs.
