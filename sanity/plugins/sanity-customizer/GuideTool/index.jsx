import { route } from 'part:@sanity/base/router';

import Guide from './Guide.jsx';
import GuideIcon from './GuideIcon.jsx';

export default {
  name: 'guide',
  title: 'Guia para os módulos',
  router: route('/guia'),
  component: Guide,
  icon: GuideIcon,
}