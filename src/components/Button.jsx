export default function Button({ title, attributes }) {
    const classAttributes = `rounded ${attributes}`
    return <button type="button" className={classAttributes} >{title}</button>
}