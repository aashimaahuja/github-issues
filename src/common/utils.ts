export const getTextColor = (color: string) => {
    const darkColors = ['001f77', 'e11d21', '006b75', '556677', '3178c6']
    if (darkColors.includes(color.toLowerCase())) {
        return 'white'
    }
    return 'black'
}