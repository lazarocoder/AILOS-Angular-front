const baseConfig = require('../../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/ailos-lib/ngx-component/src/'],
  coverageDirectory: '<rootDir>/coverage/ailos-lib/ngx-component',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/ailos-lib/ngx-component/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
