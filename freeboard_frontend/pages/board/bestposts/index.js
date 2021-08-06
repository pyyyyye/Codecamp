// 베스트 게시글 index.js

import BestList from '../../../src/components/units/board/bestlist/BestList.container';

function ListPage() {
  return <BestList />;
}

export default withAuth(ListPage);
