This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install node modules:

```
npm install
```

## SETUP FAUNA DB WITH THIS SCHEMA. Save code in a .gql file format and POPULATE DATABASE.:

```
type Products {
    name: String!
    category: String!
    price: Float!
    currency: String!
    image: Image
    bestseller: Boolean!
    featured: Boolean!
    details: Details
}

type Image @embedded{
    src: String
    alt: String
}

type Details @embedded{
    dimmentions: Size
    size: Int
    description: String
    recommendations: [Recommendations]
}

type Size @embedded{
    width: Int
    height: Int
}

type Recommendations @embedded{
    src: String
    alt: String
}

type Query{
    allProducts: [Products]
}
```

## RUN SERVER LOCALLY:

### Setup local environment file: .env in root directory

```
# Add FAUNADB_SECRET_KEY:
FAUNADB_SECRET_KEY=db_secret_from_faunadb

```

#### Start Server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# Nextjs-PoC
