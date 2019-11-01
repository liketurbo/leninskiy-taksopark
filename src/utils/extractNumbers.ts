export default (str: string) => (str.match(/\d+/g) || []).join("")
