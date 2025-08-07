.PHONY: bump
bump:
	npm version patch
.PHONY: build
build: bump
    npm run build
