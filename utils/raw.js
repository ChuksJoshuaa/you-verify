export const findData = (data, status) => {
    const newItem = data.filter((item) => item.status === status)
    return newItem
}