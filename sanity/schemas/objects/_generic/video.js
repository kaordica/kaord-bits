export default {
  name: 'video',
  title: 'Vídeo',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título',
      description: 'Campo opcional',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL de compartilhamento do vídeo no YouTube',
      description: 'Para conseguir esse link, abra o vídeo no YouTube e clique em "share"/"compartilhar"',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
  ],
}