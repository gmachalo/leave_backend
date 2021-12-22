module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd665c8e290767aa2e8c1b558525f3ef'),
  },
});
