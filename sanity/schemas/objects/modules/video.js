export default {
  name: 'video',
  title: 'Vídeo do YouTube',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título',
      description: 'Campo opcional',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imagem do vídeo',
      description: 'Campo opcional',
      type: 'image',
    },
    {
      name: 'videoId',
      title: 'URL / link do vídeo',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'Vídeo sem título',
        subtitle: '(VÍDEO DO YOUTUBE)',
      }
    }
  }
}