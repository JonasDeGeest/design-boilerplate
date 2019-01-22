Static Prototype Boilerplate
=====================

Our Static Prototype Boilerplate makes use of our [ITP `CSS` framework](https://bitbucket.org/inthepocket/itp-css). It adds tools like [Jekyll](http://jekyllrb.com/) and [Gulp](http://gulpjs.com/) to simplify designing and building in the browser. The boilerplate can be used as a **styleguide**, to build **static websites** or to speed up making **HTML prototypes**.

## Installation

### Requirements

1. [Ruby](https://www.ruby-lang.org) and [rubygems](https://rubygems.org)
2. [Node](http://nodejs.org) and [npm](https://npmjs.org)

### Automated Installation

Run the following command from the project root:

`sh install.sh`

This will check if package managers are installed and download required packages for you.

### Use

Run the following command to load a browsersync server and watch your files for changes:

    gulp watch

## CSS structure.

Project specific code should be written in components. ITP CSS is maintained in a separate repository which is loaded with `npm`. We believe these partials should be easy to update and configurable without writing new code.

## Atomic design

We believe our User Interface design should be organised according to the [atomic design principle](http://atomicdesign.bradfrost.com/chapter-2/).

### Atoms (Find them in the \_includes folder)

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button. Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.

### Molecules (Find them in the \_includes folder)

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

### Organisms (Find them in the \_includes folder)

Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

### Templates (Find them in the \_layouts folder)

Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.

### Pages (Find them in the pages folder)

Pages are specific instances of templates that show what a UI looks like with real representative content in place.

## Browser support

This boilerplate aims to support all modern browsers. This includes latest versions of Chrome, Firefox and Safari and the latest mobile browsers on Android and iPhone. Internet explorer is currently supported starting from IE11 and up.

## Why are we doing this?

- Reducing the gap between Design and Development
- Enforce a global coding style
- Create a scalable system for both small and big web projects
