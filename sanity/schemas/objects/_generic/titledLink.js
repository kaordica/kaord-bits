export default {
  name: 'titledLink',
  title: 'Título e endereço relativo',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título do link',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'url',
      title: 'Endereço absoluto da página',
      description: 'Exemplo: https://selleta.studio/sobre',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
  ],
}