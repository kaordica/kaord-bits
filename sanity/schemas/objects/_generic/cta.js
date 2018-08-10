import { ctaTypes } from '../ctaTypes';

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
      }
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
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link do botão',
      description: 'Usar um endereço absoluto (ex: https://studioselleta.com.br/sobre)',
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
}