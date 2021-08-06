import { useRouter } from 'next/router';
import LayoutNavigationUI from './LayoutNavigation.presenter';

export default function LayoutNavigation() {
  const router = useRouter();
  const onClickMarket = () => {
    router.push('/market/write');
  };
  return <LayoutNavigationUI onClickMarket={onClickMarket} />;
}
