export default {
  name: 'testimony',
  title: 'Depoimento simples',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Nome da pessoa',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'title',
      title: 'Ocupação / título',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Depoimento em si / texto',
      type: 'text',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'photo',
      title: 'Foto da pessoa',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo / explicativo sobre a imagem',
          description: 'Usado para acessibilidade e SEO',
          type: 'string',
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    }
  }
}