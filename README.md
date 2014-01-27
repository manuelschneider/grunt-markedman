# grunt-markedman

> a grunt-task for using marked-man to generate manpages from markdown

Made possible by the guys behind [marked-man](https://github.com/kapouer/marked-man) and grunt. Thanks!

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-markedman --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-markedman');
```

## The "markedman" task

### Overview
In your project's Gruntfile, add a section named `markedman` to the data object passed into `grunt.initConfig()`.

```js
markedman: {
  options: {
    version: '<%= pkg.version %>',
    section: '3'
  },
  readme: {
    files: [
      {src: 'README.md', dest: '<%= pkg.name %>.3' }
    ]
  }
}
```

### Options

#### options.version
Type: `String`
Default value: `''`

The version of your app.

#### options.section
Type: `String`
Default value: `'1'`

The man-section, see [wikipedia](http://en.wikipedia.org/wiki/Man_page). In general use (1) for commands and (8) for services.

#### options.manual
Type: `String`
Default value: `''`

The MANUAL string shown in the manpage header. See [marked-man doku](https://github.com/kapouer/marked-man).

#### options.src
Type: `String`
Default value: `'readme.md'`

Some markdown file to convert to man.

#### options.dest
Type: `String`
Default value: `'dist/readme.1.man'`

The destination of the generated manpage.

### Usage Examples

#### A little bit more complex...

```js
markedman: {
  options: {
    version: '<%= pkg.version %>',
    section: '3'
  },
  readme: {
    files: [
      {src: 'README.md', dest: '<%= pkg.name %>.3' }
    ]
  },
  main: {
    options: {
      section: '1'
    },
    files: [
      {src: 'doc/furtherDocs.md', dest: 'docA.1' },
      {src: 'doc/plentyOfDocs.md', dest: 'docB.1' }
    ]
  }
},
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
