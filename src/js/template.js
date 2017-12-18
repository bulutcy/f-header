const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

export default (callback, options) => {
    const templatePath = path.resolve(__dirname, '../../src/templates/header.hbs');
    const source = fs.readFileSync(templatePath, 'utf-8');
    const compiled = handlebars.compile(source);

    callback(null, compiled(options));
};
