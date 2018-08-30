export default {
  name: 'footerMenu',
  title: 'Menu do rodapé',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'url',
      title: 'Endereço absoluto para o título',
      description: 'Campo opcional - caso não coloque um endereço aqui, o título desse menu vai ser só um texto, sem link.',
      type: 'string',
    },
    {
      name: 'menu',
      title: 'Links',
      type: 'array',
      of: [{ type: 'titledLink' }],
      validation: Rule => Rule.min(1).max(6).error('Entre 1 e 6 links')
    },
  ],
}