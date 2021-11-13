export const requiredFeel = (value: string) => {
    if (value) {
        return
    }
    return 'field is required'
}

export const maxLengthCreator = (maxlength: number) => (value: string) => {
    if (value && value.length < maxlength) {
        return
    }

    return `max length is ${maxlength} symbols`
}

