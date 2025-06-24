pnpm i
rm -rf dist
pnpm build
npx tsx scripts/deployment-package-json.ts "${VERSION:-null}"
pnpm publish --access public --no-git-checks
