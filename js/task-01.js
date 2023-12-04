const categoriesList = document.getElementById('categories')
const categoryItems = categoriesList.querySelectorAll('li.item')
console.log(`Number of categories: ${categoryItems.length}`)

categoryItems.forEach(categoryItem => {
	const categoryName = categoryItem.querySelector('h2').textContent
	const categoryElementsCount = categoryItem.querySelectorAll('li').length

	console.log(`Category: ${categoryName}`)
	console.log(`Elements: ${categoryElementsCount}`)
})``
