This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## for question list, this is the api that is used (GET request)
https://6805f6b0ca467c15be6a9494.mockapi.io/wapcohort2dummyapi/students/questions

## for category-wise display (GET request)
https://6805f6b0ca467c15be6a9494.mockapi.io/wapcohort2dummyapi/students/questions?category=${subject}&page=${page}&limit=1

## For adding more data on the list (POST request)
https://6805f6b0ca467c15be6a9494.mockapi.io/wapcohort2dummyapi/students/questions

example body for POST request:

```json
{
  "createdAt": "2025-04-25T10:55:00Z",
  "question": "Which of the following is a characteristic of a stack data structure?",
  "options": [
    "Follows FIFO (First In First Out) order",
    "Follows LIFO (Last In First Out) order",
    "Allows access to any element at any time",
    "None of the above"
  ],
  "correctOption": "Follows LIFO (Last In First Out) order",
  "level": "easy",
  "category": "PSP"
}
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
