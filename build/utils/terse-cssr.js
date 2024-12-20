const parser = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');

module.exports = function terseCssr(code) {
    const patternSpace = / +/g;
    const patternEnter = /\n+/g;

    const ast = parser.parse(code, {
        sourceType: 'module',
    })

    traverse(ast,{
        TemplateElement(path){
            ['raw','cooked'].forEach(key => {
                path.node.value[key] = path.node.value[key].replace(patternSpace, ' ').replace(patternEnter, '\n');
            })
        }
    })

    console.log(generate(ast).code);
    
    return generate(ast).code;
    
}