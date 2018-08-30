export default {
  name: 'titleSubtitle',
  title: 'Título e subtítulo',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'subtitle',
      title: 'Sub-título',
      description: 'Campo opcional',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    }
  }
}