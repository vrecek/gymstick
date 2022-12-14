const editColors = (e: React.ChangeEvent): void => {
    const input: HTMLInputElement = e.target as HTMLInputElement

    input.value
        ? input.style.borderColor = 'green'
        : input.style.borderColor = 'rgb(255, 136, 0)'
}

export default editColors