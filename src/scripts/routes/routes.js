/* eslint-disable linebreak-style */
import Resto from '../views/pages/resto';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Resto,
  '/Resto': Resto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
