var docs = require('md-docs');
docs.start(['**/*.md', '*.md'], {
    port: 8001,
    theme: 'dark',
    watch: true,
    ignored: /([\/\\]\.|node_modules)/,
    docsDestDir: './html', // default value depends on the os 
    debug: true
});