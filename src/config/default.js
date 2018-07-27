/* @flow */

module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    subHeading: 'Sub-Heading - For the ever evolving front end stack',
    meta: [
      {
        name: 'Website Name HERE!!!!!!!',
        content: 'The best react universal starter boilerplate in the world.'
      }
    ]
  }
};
