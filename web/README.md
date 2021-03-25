# Web

This is a [Next.js](https://nextjs.org/) project bootstrapped with 
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites
Make sure you are not on a windows machine for your own health and
well-being.

Make sure node >= LTS is installed or ``` brew install node```

### Preparations
First, install dependencies:
```shell
npm i
# or
yarn
```

### Configure environment
In ``` ./.env.local ``` configure your sanity dataset and supply the following:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=<SANITY PROJECT ID>
SANITY_API_TOKEN=<SANITY API TOKEN>
SANITY_PREVIEW_SECRET=<SANITY PREVIEW SECRET>
SANITY_DATASET=<SANITY DATASET NANE eg. development | production>
```


### Run development server
```shell
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) 
with your browser to see the result.

### Run storybook
```shell
npm run storybook
# or
yarn storybook
```

Open [http://localhost:9009](http://localhost:9009) 
with your browser to see the result.

## Code

### Pages
You can start editing the page by modifying `pages/index.js`. 
The page auto-updates as you edit the file.

### API Routes
[API routes](https://nextjs.org/docs/api-routes/introduction) can be 
accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). 
This endpoint can be edited in `pages/api/hello.js`. The `pages/api` directory 
is mapped to `/api/*`. Files in this directory are treated as 
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Components
In the ``` /lib ``` folder you will find all the components pages are made up from. 
These components should all be reusable and as such have no dependencies to application
logic.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - 
your feedback and contributions are welcome!

## Deploy
I strongly recommend you to deploy your app on [vercel platform](https://vercel.com/docs) and 
check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Deploy storybook to [Chromatic](https://www.chromatic.com/builds?appId=60191d39fd1ccd00216ee149), 
update [package.json](./package.json) with your chromatic project id in <YOUR CHROMATIC PROJECT ID> 
and run:

```shell
 npm run chromatic
 # or
 yarn chromatic
```


