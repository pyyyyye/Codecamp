import {
  Wrapper,
  Contents,
  Title,
  WriteInputBox,
  Categorize,
  InputBox,
  ContBox,
  ContentsBox,
  ContIcons,
  ContInput,
  AddressBox,
  AddressBoxLeft,
  LocationMap,
  LocationIcon,
  AddressComponent,
  AddressBoxRight,
  GpsComponent,
  InputGPS,
  AddressDetail,
  ProductImages,
  ImgInputBox,
  ProductImg,
  DeleteBtn,
  RadioBox,
  RadioButton,
  Button1,
  RadioText,
  ButtonBox,
} from './MarketWrite.styles';

interface MarketWriteUIProps {
  // onClickSubmit: any;
  // handleSubmit: any;
}

export default function MarketWriteUI(props: MarketWriteUIProps) {
  return (
    <Wrapper>
      <Contents>
        <Title>상품 등록하기</Title>
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <WriteInputBox>
            <Categorize>상품명</Categorize>
            <InputBox
              placeholder="상품명을 작성해주세요."
              {...props.register('name')}
            />
          </WriteInputBox>
          <WriteInputBox>
            <Categorize>한 줄 요약</Categorize>
            <InputBox
              placeholder="간단한 상품 설명을 작성해주세요."
              {...props.register('remarks')}
            />
          </WriteInputBox>

          <ContBox>
            <Categorize>상품 설명</Categorize>
            <ContentsBox>
              <ContIcons>아이콘 줄</ContIcons>
              <ContInput
                // type="text"

                placeholder="상품 설명을 자세히 작성해주세요."
                {...props.register('contents')}
              />
            </ContentsBox>
          </ContBox>

          <WriteInputBox>
            <Categorize>판매 가격</Categorize>
            <InputBox
              placeholder="판매 가격을 입력해주세요."
              {...props.register('price')}
            />
          </WriteInputBox>

          <WriteInputBox>
            <Categorize>태그입력</Categorize>
            <InputBox
              name="Tag"
              placeholder="#태그 #태그 #태그"
              // {...props.register('contents')}
            />
          </WriteInputBox>

          <AddressBox>
            {/* --------  Address Left  ------- */}
            <AddressBoxLeft>
              <Categorize>거래 위치</Categorize>
              <LocationMap>지도 그림 박스</LocationMap>
            </AddressBoxLeft>

            {/* --------  Address Right  ------- */}
            <AddressBoxRight>
              <Categorize>GPS</Categorize>
              <GpsComponent>
                <InputGPS type="text" placeholder="위도(LAT)" />
                <LocationIcon src="/icon_location.png" />
                <InputGPS type="text" placeholder="경도(LNG)" />
              </GpsComponent>

              <AddressComponent>
                <Categorize>주소</Categorize>
                <AddressDetail placeholder="주소를 입력해주세요." />
                <AddressDetail
                  placeholder="상세 주소를 입력해주세요."
                  style={{ marginTop: '16px' }}
                />
              </AddressComponent>
            </AddressBoxRight>
          </AddressBox>

          {/* --------------  이미지 업로드 버튼  -------------- */}
          <ProductImages>
            <Categorize>사진 첨부</Categorize>
            <ImgInputBox>
              <DeleteBtn src="/icon_delete_black.png" />
              <ProductImg>
                +<br />
                Upload
              </ProductImg>
            </ImgInputBox>

            {/* {new Array(3).fill('a').map((data, index) => (
            <Upload01
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
            />
          ))} */}
          </ProductImages>

          <RadioBox>
            <Categorize>메인 사진 설정</Categorize>
            <RadioButton>
              <Button1 type="radio" name="set" value="사진1" checked />
              <RadioText>사진 1</RadioText>
              <Button1 type="radio" name="set" value="사진2" />
              <RadioText>사진 2</RadioText>
            </RadioButton>
          </RadioBox>

          {/* ------------------- 하단 등록 버튼 ---------------- */}
          {/* active={props.active} */}
          <ButtonBox type="submit">등록하기</ButtonBox>
        </form>
      </Contents>
    </Wrapper>
  );
}
