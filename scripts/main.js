document.addEventListener('DOMContentLoaded', function() {
    console.log("Styleguide js running!");

    importHtmlTemplates();
    injectHtmlSnippets();
    
}, false)

function importHtmlTemplates() {
    const templateImports = document.querySelectorAll('link[rel="import"]');
    
    templateImports.forEach(element => {

        const template = element.import.querySelector('template');
        const clone = document.importNode(template.content, true);
        console.log(clone)
        document.querySelector(`section[data-template=${element.id}`).appendChild(clone)
    })   
}

function injectHtmlSnippets() {
    const templateImports = document.querySelectorAll('link[id$="-snippet"]');
    
    templateImports.forEach(element => {
        const template = element.import.querySelector('template');
        const clone = document.importNode(template.content, true);
        console.log(clone)
        document.querySelector(`code[data-snippet-template=${element.id}`).appendChild(clone)
    })  
}