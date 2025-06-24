import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { PostsPage } from '../pages/TodoPage/TodoPage';

export const routes = [
  { path: '/', label: 'Приветствие', element: <WelcomePage /> },
  { path: '/todo', label: 'Todo', element: <TodoPage /> },
];
