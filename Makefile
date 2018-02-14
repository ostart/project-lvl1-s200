#Makefile

install:
	npm install
	
start:
	npm run babel-node -- src/bin/brain-even.js

start2:
	npm run babel-node -- src/bin/brain-calc.js

start3:
	npm run babel-node -- src/bin/brain-gcd.js

start4:
	npm run babel-node -- src/bin/brain-balance.js
	
build:
	npm run build
	
publish:
	npm publish

lint:
	npm run eslint .

	

	
