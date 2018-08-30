export default {
  name: 'config',
  title: 'Configurações',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Endereço',
      description: 'Somente rua, número e bairro',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'phone',
      title: 'Telefone',
      description: 'No formato +55 31 xxxxx xxxx',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'whatsApp',
      title: 'Telefone para chamar no WhatsApp',
      description: 'Pode ser o mesmo do telefone. Deve ser no formato +55 31 xxxxx xxxx',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'headerMenu',
      title: 'Menu do cabeçalho',
      type: 'array',
      of: [{ type: 'titledLink' }],
      validation: Rule => Rule.min(1).max(4).error('Entre 1 e 4 links')
    },
    {
      name: 'footerMenu',
      title: 'Menus do rodapé',
      type: 'array',
      of: [{ type: 'footerMenu' }],
      validation: Rule => Rule.min(1).max(4).error('Entre 1 e 4 menus')
    },
    {
      name: 'social',
      title: 'Links para redes sociais',
      type: 'socialMedia',
    },
  ],
  preview: {
    select: {
      title: 'social'
    },
    prepare(selection) {
      return {
        title: 'Configurações básicas',
        subtitle: 'Com telefone, menu, etc.',
        description: 'Utilize este arquivo para mudar valores utilizados no site todo.'
      }
    }
  }
}