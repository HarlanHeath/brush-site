const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_pk_test_MY_PUBLISHABLE_KEY
    : process.env.REACT_APP_pk_test_MY_PUBLISHABLE_KEY;

export default STRIPE_PUBLISHABLE;
