# Design Sprint Guide

The Design Sprint Guide is a static website built using [Eleventy](https://11ty.dev).

## Contributing

You can find details of how to contribute and more details about the project in
our [Contributing Guide](https://github.com/thoughtbot/design-sprint-guide/blob/main/CONTRIBUTING.md).

Start by installing dependencies:

```
npm install
```

### Run Eleventy

```
npm start
```
This will start Eleventy and watch sass files, and reload the browser on changes.

### Access the CMS

We use [Netlify CMS](https://www.netlifycms.org) locally to make editing
exercises, and schedules easier, to access the CMS
run everything above, then in a another terminal window run:

```
npx netlify-cms-proxy-server
```

Then open `localhost:8080/admin` in a browser, and tap 'Login' (no login required).

The CMS is optional, you can still edit everything manually if you want to.

In future we plan to hook up the entire site to the CMS, accessible from
anywhere with proper authentication.
