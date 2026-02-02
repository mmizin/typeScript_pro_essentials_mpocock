const concatName = (first: string, last?: string) => {
    if (!last) {
        console.log(`${first}`)
    }
    else {
            console.log(`${first} ${last}`)
    }

}

concatName("Nick", "Mizin")
concatName("Nick")