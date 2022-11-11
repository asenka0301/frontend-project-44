install: 
	npm ci


brain-games: 
	node bin/brain-games


publish: 
	npm publish --dry-run


lint:
	npx eslint .


brain-even: 
	node bin/brain-even


brain-calc: 
	node bin/brain-calc


brain-gcd: 
	node bin/brain-gcd


brain-prime: 
	node bin/brain-prime


.PHONY: test