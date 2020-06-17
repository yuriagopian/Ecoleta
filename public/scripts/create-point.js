function populateUfs() {
    const ufSelect = document
        .querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res =>
            res.json()
        )
        .then(states => {
            for (const state of states) {

                ufSelect.innerHTML += `<option value='${state.id}'> ${state.nome} </option>`
            }
        })
}

populateUfs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=name]")
    const ufValue = event.target.value;
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text



    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a cidade </option>"
    citySelect.disabled = true

    fetch(url)
        .then(res =>
            res.json()
        )
        .then(cities => {
            for (const city of cities) {

                citySelect.innerHTML += `<option value='${city.nome}'> ${city.nome} </option>`
            }

            citySelect.disabled = false
        })
}


document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities)

// itens de coleta 
// pegar todos os li 
const itemsToColect = document.querySelectorAll(".items-grid li")

for (const item of itemsToColect) {
    item.addEventListener("click", handleSelectedItem)
}

//atualizar o campo escondido com os dados selecionados 
const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe do html com  javascript
    itemLi.classList.toggle("selected")


    const itemId = event.target.dataset.id
    //verificar se existem selecionados 
    //se sim, pegar os itens selecionados 

    // const alreadySelected = selectedItems.findIndex(item =>
    //     item == itemId
    // )  uma maneira de fazer simplificada 
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // isso será true ou false 
        return itemFound
    }) // maneira mais intuitiva 

    // se já estiver selecionado tirar da seleção 
    if (alreadySelected >= 0) { // ou  alreadySelected != -1
        //tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }

    // se não estiver selecionado adcionar a seleção 
    else {
        selectedItems.push(itemId)
    }
    // console.log(selectedItems)
    collectedItems.value = selectedItems
}

