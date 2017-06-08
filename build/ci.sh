set -e
if [ -z "$CI_PULL_REQUEST" ]
then
  npm run build
else
  npm run build
fi