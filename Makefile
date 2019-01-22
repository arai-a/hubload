all:
	rm -f hubload.xpi
	zip -9 hubload.xpi hubload.js manifest.json

i: all
	open -a FirefoxNightly hubload.xpi

ia: all
	open -a FirefoxAurora hubload.xpi
