.PHONY: bump
bump:
	npm version patch

.PHONY: build
build: bump
	npm run build

.PHONY: publish
publish: build
	git commit -am "Bump version to $(shell node -p "require('./package.json').version")"
