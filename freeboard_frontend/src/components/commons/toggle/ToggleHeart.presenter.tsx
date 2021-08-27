// toggleHeart.presenter
import { ToggleWrapper, ToggleBtn, ToggleCount } from './ToggleHeart.styles';

export default function ToggleHeartUI() {
  return (
    <ToggleWrapper>
      <ToggleBtn src="/images/icon_like_2.png" />
      <ToggleCount>20</ToggleCount>
    </ToggleWrapper>
  );
}
