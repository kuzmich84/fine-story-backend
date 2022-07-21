module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c26f0c8b9e5a38a14b521a9f53905f32'),
  },
});
