BUILD_DIR := $(CURDIR)/dist

.PHONY: build
build:
	gulp

.PHONY: start
start: build
	python3 -m http.server 8080 --bind localhost --directory $(BUILD_DIR)
