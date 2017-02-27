# aurelia-multiple-bundle-example
testing multiple bundles with aurelia-cli

## Breakdown ##
This works by breaking bundles into their own directories

### aurelia.json ###
Add "exclude" to app-bundle.js definition, exclude the directories that are meant to be lazy loaded
Add a bundle definition for each bundle, scoped to that directory
Note: I thought square brackets were necessary in the bundle-one js source (they tell the bundler not to include dependencies), in order to keep some-service.ts out of the bundle-one.js result, but it turns out that the service isn't included regardless. Still seems like a good idea to be explicit about it, though.
