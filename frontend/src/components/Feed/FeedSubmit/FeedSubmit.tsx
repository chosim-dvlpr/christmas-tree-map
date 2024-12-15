import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/components/_common/Button/Button';
import Input from '@/components/_common/Input/Input';
import TextArea from '@/components/_common/TextArea/TextArea';
import useFeedMutation from '@/queries/Feed/useFeedMutation';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '@/constants/map';
import mapIcon from '@/assets/map.png';
import santaWithWindow from '@/assets/santaWithWindow.png';
import * as S from './FeedSubmit.css';

const FeedSubmit = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [center, setCenter] = useState(
    () =>
      location.state?.center || {
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE,
      },
  );

  const { addFeedMutation } = useFeedMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addFeedMutation({ imageUrl, content });
    navigate('/?modal=feeds');
  };

  const handleSelectMarkerClick = () => {
    navigate('/select');
  };

  return (
    <form className={S.Layout} onSubmit={handleSubmit}>
      <div className={S.SelectMarkerBox} onClick={handleSelectMarkerClick}>
        <div className={S.MapIconWrapper}>
          <img src={mapIcon} alt="Map Icon" className={S.MapIcon} />
        </div>
        <p className={S.SelectMarkerText}>지도를 움직여 핀을 꽂아 보세요.</p>
      </div>

      <div className={S.ImageUploadBox}>
        <p className={S.LabelText}>업로드 할 이미지를 선택해 주세요.</p>
        <img src={santaWithWindow} className={S.UploadedImage} alt="이미지 업로드" />
      </div>
      <TextArea value={content} onChange={(e) => setContent(e.target.value)}>
        <TextArea.Label label="설명" />
      </TextArea>
      <Input label="비밀번호" type="password" />
      <Button type="submit" color="primary">
        제출
      </Button>
    </form>
  );
};

export default FeedSubmit;
