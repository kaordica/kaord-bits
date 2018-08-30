import { ctaTypes } from '../../stringOptions';

export default {
  name: 'cta',
  title: 'Chamada para ação',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Modelo da chamada',
      type: 'string',
      options: {
        list: ctaTypes,
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
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
    {
      name: 'btnText',
      title: 'Texto do botão',
      description: 'Campo opcional, mas se você não preencher nada vamos usar o texto "Saiba mais" dentro do botão ;)',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link do botão',
      description: 'Se o link apontar para o próprio site, usar um endereço relativo (ex: /sobre), caso contrário, use um absoluto (ex: https://instagram.com/kaordicadesign)',
      type: 'string',
      validation: Rule => Rule.required().error('Campo obrigatório'),
    },
    {
      name: 'image',
      title: 'Imagem',
      description: 'Campo opcional - usar só caso o modelo escolhido tenha imagem',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: `(CHAMADA PARA AÇÃO)`
      }
    }
  }
}