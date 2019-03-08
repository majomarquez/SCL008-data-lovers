const filterTag = (data, condition) => {
    let filteredTag = Object.keys(data).filter(function(key){ // recorre y envia un array nuevo
		let element = data[key];
        return element.tags.includes(condition)  //revisa si la condicion es verdadera o falsa
    })
    return filteredTag;
};
