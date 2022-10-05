import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  rootDir: `${process.cwd()}/src`,
  // transformIgnorePatterns: [],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};

export default config;
