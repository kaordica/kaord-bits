// Example of a document-specific object
// nested inside a /objects/documentName folder
export default {
  name: "exampleHero",
  type: "object",
  title: "Seção inicial",
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Sub-título',
      type: 'string',
    },
  ]
}