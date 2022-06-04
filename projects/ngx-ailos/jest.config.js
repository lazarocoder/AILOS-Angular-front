const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/ngx-ailos/src/'],
  coverageDirectory: '<rootDir>/coverage/ngx-ailos',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/ngx-ailos/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
