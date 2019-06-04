# Info

SAPUI5 Walkthrough practice.

[Documentation](https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db)

Used with docker (nginx proxy-pass + node server).

In repo tags you can switch between walkthrough steps.
 
# Run

For start add network in docker (used for custom windows network with routing to virtual machine):

```bash
docker network add develope
```

Then just start docker:

```bash
docker-compose up
```

Demo site available at [walkthrough.sapui5.test](http://walkthrough.sapui5.test/index.html)