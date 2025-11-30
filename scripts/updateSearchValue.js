const updateSearchValue = (newSearch) => {
    const ul = document.getElementsByClassName("searchable-list")[0];
    const listItems = ul.querySelectorAll("li");
    const pagesWithinSearch =
    [...listItems]
        .map((li) => li.innerText)
        .filter((pageName) => pageName.toLowerCase().includes(newSearch.toLowerCase()));
    
    listItems.forEach((li) => {
    li.style.display = pagesWithinSearch.includes(li.innerText) ? 'block' : 'none';
    });
} 