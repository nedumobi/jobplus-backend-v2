module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "strapi-provider-email-postmark",
      providerOptions: {
        apiKey: env("POSTMARK_API_KEY"),
      },
      settings: {
        defaultFrom: env("POSTMARK_FROM_EMAIL"),
        defaultTo: env("POSTMARK_FROM_EMAIL"),
      },
    },
  },
  // ...
});
