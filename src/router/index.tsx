import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeView from '../views/HomeView';
import EnterNameView from '../views/EnterNameView';
import ConsumtionModeView from '../views/ConsumtionModeView';
import OrderView from '../views/OrderView';
import PaymentMethodChoiceView from '../views/PaymentMethodChoiceView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/consumption',
    element: <ConsumtionModeView />,
  },
  {
    path: '/enter-your-name-name',
    element: <EnterNameView />,
  },
  {
    path: '/order',
    element: <OrderView />,
  },
  {
    path: '/order-method-choice',
    element: <PaymentMethodChoiceView />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
