# SANITY
## About

## Getting started
- Read [getting started](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme) from the Sanity docs
- Join the community [Slack](https://slack.sanity.io/?utm_source=readme)
- Extend and build [plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

### Preparations

#### Install sanity cli
```shell
npm install -g @sanity/cli
```

#### Install dependencies
```shell
sanity install
# or
npm install
# or
yarn
```

##### Setup sanity (mandatory)
If you dont already have a dataset you can create a new one using;
```shell
sanity init
```

Configure your existing sanity instance in ```./sanity.json```, get your details here: [manage.sanity.io](https://manage.sanity.io/)
```json
{
  "root": true,
  "project": {
    "name": "<PROJECT NAME>"
  },
  "api": {
    "projectId": "<YOUR PROJECT ID>",
    "dataset": "<YOUR DATASET NAME, eg. production | development>"
  },
  ...
}
```

##### Configure preview settings (optional)
In order for you to preview unpublished content in your NextJS app you should configure the fields below

1. In ```./.env.development``` define a secret for your local environment
2. In ```./.env.production``` add the url to your production environment if any, else you can just skip for now. Also add a preview secret as above.


### Run development server
```shell
npm run start
# or
yarn start
```

## Deploy
```shell
npm run deploy
# or
yarn run deploy
```
