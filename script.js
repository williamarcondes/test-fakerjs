import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

let btnGen = document.querySelector('button');

btnGen.addEventListener('click', () => {
    let name = faker.name.firstName();
    let email = faker.internet.email();

    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;
    
});