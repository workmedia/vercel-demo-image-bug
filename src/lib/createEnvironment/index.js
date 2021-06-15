/* eslint-disable global-require */
export const { initEnvironment, createEnvironment } = (
  typeof window === 'undefined' ? require('./server') : require('./client')
).default;
