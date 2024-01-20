serve:
	docker-compose run --rm --service-ports node yarn dev
shell:
	docker-compose run --rm node bash
