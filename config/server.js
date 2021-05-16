module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "be8d5723db8f78788c380233539c7d78"),
    },
  },
  url: env("PUBLIC_ADMIN_URL", "/"),
});
