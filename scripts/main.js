document.addEventListener('DOMContentLoaded', function() {
    console.log("Styleguide js running!");

    const templateImports = document.querySelectorAll('link[rel="import"]');

    console.log(templateImports)
    
    templateImports.forEach(element => {
        debugger
        const template = element.import.querySelector('template');
        const clone = document.importNode(template.content, true);

        document.querySelector(`section[data-template=${element.id}`).appendChild(clone)
    })
    // const link = document.getElementById('btn-template-link');
    // const template = link.import.querySelector('template');
    // const clone = document.importNode(template.content, true);

    // document.getElementById('buttons-section').appendChild(clone)

}, false)