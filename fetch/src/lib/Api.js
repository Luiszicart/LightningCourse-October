const getPeople = async(url) => {
    let data = await fetch(url)

    return data.json()
}

export { getPeople }