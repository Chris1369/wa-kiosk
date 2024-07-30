import IsFailed from './IsFailed';
import IsSuccess from './IsSuccess';

export default function OrderStatusView() {
  //
  const params = new URLSearchParams(window.location.search);
  const isSuccess = params.get('isSuccess') === 'true';

  if (isSuccess) {
    return <IsSuccess />;
  } else {
    return <IsFailed />;
  }
}
