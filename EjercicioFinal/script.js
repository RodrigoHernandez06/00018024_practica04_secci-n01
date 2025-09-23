document.addEventListener('DOMContentLoaded', () => {
    console.assert(true);
    console.clear();
    console.dir(window);
    console.dirxml(document.body);

    const marvel = ['Spider Man', 'Iron Man', 'Capitan Anmerica', 'Wolverine']
    console.group('Personajes de Marvel');
    marvel.forEach(superheroe => {
        console.log(superheroe);
    });
    console.groupEnd();
}); 