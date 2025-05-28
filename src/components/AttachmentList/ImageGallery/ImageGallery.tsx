import { useState, useCallback, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import BasicModal from "../BasicModal";
import {
  GalleryWrapper,
  GalleryImage,
  PrevButton,
  NextButton,
} from "./ImageGallery.styled";

type Props = {
  images: string[];
  startIndex: number;
  onClose: () => void;
};

const ImageGallery = ({ images, startIndex, onClose }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    },
    [showPrev, showNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <BasicModal onClose={onClose}>
      <GalleryWrapper>
        <PrevButton type="button" onClick={showPrev}>
          <AiOutlineLeft size={32} />
        </PrevButton>
        <GalleryImage
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
        <NextButton type="button" onClick={showNext}>
          <AiOutlineRight size={32} />
        </NextButton>
      </GalleryWrapper>
    </BasicModal>
  );
};

export default ImageGallery;
