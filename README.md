# aurelia-multiple-bundle-example
testing multiple bundles with aurelia-cli

## Breakdown ##
This works by breaking bundles into their own directories

### aurelia.json ###
Add "exclude" to app-bundle.js definition, exclude the directories that are meant to be lazy loaded

Add a bundle definition for each bundle, scoped to that directory

Note: I thought square brackets were necessary in the bundle-one js source (they tell the bundler not to include dependencies), in order to keep some-service.ts out of the bundle-one.js result, but it turns out that the service isn't included regardless. Still seems like a good idea to be explicit about it, though.

### directory structure ###
As mentioned above, the easiest way to do this is to make each bundle its own directory, then scope each bundle in aurelia.json to that directory.

Here we have src/bundle-one/ and src/bundle-two/ which are each their own lazy loaded bundles.

We explicitly exclude those directories from app-bundle.js, but everything else under src/ will end up in app-bundle.js
