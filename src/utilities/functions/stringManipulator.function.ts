export const arrayToString = (array: any[]) => {
    return array.map((item: string, index) => {
        if(array.length !== index + 1) {
            return `${item}, `
        } else {
            return `${item}`
        }
    })
}