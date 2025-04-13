
const API = "http://localhost:3000/api/category/";

const getCategories = async () => {

    try {
        const response = await fetch(API);
        const categories = await response.json();
        return categories;
    } catch (error) {
        console.log(error)    
    }
}


async function shownData(){

    const categories = await getCategories();
    const tbody = document.querySelector('tbody');
    
    categories.forEach(category => {
        const row = document.createElement('tr');
        const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = category;
        console.log(Imagen)

        row.innerHTML = /*html*/`
        <td>
        ${CategoriaID}
        </td>
        <td>
        ${CategoriaNombre}
        </td>
        <td>
        ${Descripcion}
        </td>
        <td>
            <img src="./${Imagen}" width="100px" class="cuenta"/>
        </td>
        <td>
            <button class="btn color3">Detalles</button>
        </td>
        <td>
            <button class="btn color2">Editar</button>
        </td>
        <td>
            <button class="btn color5">Borrar</button>
        </td>
        `
        tbody.appendChild(row)
    });

}

shownData();