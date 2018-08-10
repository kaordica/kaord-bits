export default {
  name: 'titleSubtitle',
  title: 'Título e subtítulo',
  type: 'object',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    }
  }
}