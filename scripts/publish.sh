yarn
rm -rf dist
yarn build
npx ts-node scripts/deployment-package-json.ts "${VERSION:-null}"
cd dist
npm publish --access public
