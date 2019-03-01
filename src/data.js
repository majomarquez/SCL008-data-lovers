const filterTag = (data, condition) => {
    let filteredTag= data.filter (element =>{ // recorre y envia un array nuevo
        return element.tags.includes(condition)  //revisa si la condicion es verdadera o falsa 
    })
    return filterTag;
};