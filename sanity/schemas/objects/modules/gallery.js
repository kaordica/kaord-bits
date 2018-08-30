export default {
  name: 'gallery',
  title: 'Galeria de imagens',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título',
      description: 'Opcional',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Imagens',
      description: 'Entre 1 e 6 imagens',
      type: 'array',
      of: [
        { type: 'image' }
      ],
      validation: Rule => Rule.max(6).min(1).error('Entre 1 e 6 imagens'),
    }
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare(selection) {
      const { title, images } = selection;
      return {
        title: title || 'Galeria de imagens sem nome',
        subtitle: '(GALERIA DE IMAGENS)',
        media: images[0],
      }
    }
  }
}