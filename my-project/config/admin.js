module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4a1f4bbeb9f471cd390217f4105ff19'),
  },
});
