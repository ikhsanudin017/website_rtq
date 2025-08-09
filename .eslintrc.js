module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable ALL problematic rules
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/', 'dist/'],
}
