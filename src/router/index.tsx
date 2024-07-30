import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeView from '../views/HomeView';
import EnterNameView from '../views/EnterNameView';
import ConsumtionModeView from '../views/ConsumtionModeView';
import OrderView from '../views/OrderView';
import PaymentMethodChoiceView from '../views/PaymentMethodChoiceView';
import OrderStatusView from '../views/OrderStatusView';
import LoadingView from '../views/LoadingView';

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
    path: '/order-payment-method-choice',
    element: <PaymentMethodChoiceView />,
  },
  {
    path: '/payment-credit-card',
    element: <LoadingView />,
  },
  {
    path: '/order-status',
    element: <OrderStatusView />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
