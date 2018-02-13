#Makefile

install:
	npm install
	
start:
	npm run babel-node -- src/bin/brain-even.js

start2:
	npm run babel-node -- src/bin/brain-calc.js
	
build:
	npm run build
	
publish:
	npm publish

lint:
	npm run eslint .

	

	
