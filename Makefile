install:
		npm install

publish:
		npm publish --dry-run

build:
		npm build

test:
		npm test

test-coverage:
		npm test -- --coverage --coverageProvider=v8

lint:
		npx eslint .