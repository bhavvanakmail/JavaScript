
        
        console.log('======= DOM API querySelector() ===========');
        const mainHeading = document.querySelector('h1'); // Selecting element by tag name or element name
        console.log(mainHeading.innerHTML);

        // console.log('querySelectorAll() with class');
        // const elementAll = document.querySelectorAll('.adv');
        // console.log(elementAll[0].innerHTML);

        console.log('======= DOM API getElementsByClassName() ===========');
        const secondAdvantage = document.getElementById('advantages');
        console.log(secondAdvantage[0].innerHTML);

        console.log('==================Selecting an element by id==============');
        const addDiv = document.querySelector('#advantages');
        console.log(addDiv.innerHTML);
    