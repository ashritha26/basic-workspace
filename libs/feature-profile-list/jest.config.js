module.exports = {
  name: 'feature-profile-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-profile-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
