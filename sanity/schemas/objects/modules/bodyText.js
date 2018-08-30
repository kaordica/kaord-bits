export default {
  name: 'bodyText',
  title: 'Corpo de texto "rico"',
  type: 'object',
  fields: [
    {
      name: 'bodyText',
      title: 'Texto',
      description: 'Dica: você pode expandir essa caixa de texto para ocupar a tela inteira ;)',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'body'
    },
    prepare(selection) {
      return {
        title: 'Corpo de texto "rico"',
      }
    }
  }
}