function addList(list) {
    const listItems = list.map((listItem) => (<li key={listItem}>{listItem}</li>))
    return (
        <ul className="list">{listItems}</ul>
    )
}

export default addList;