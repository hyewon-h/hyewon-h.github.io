import React, {
  memo,
  ReactEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Hls from 'hls.js';
import { classNameBind } from '@/utils/commonUtils';
import Img from '@/components/common/Img';
import * as S from './style';

interface IProps {
  src?: string;
  poster?: string;
  readyImg?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  responsive?: boolean;
  muted?: boolean;
  playsinline?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  useCrossOrigin?: boolean;
  videoHiddenChk?: boolean;
  intersectionPlay?: boolean;
  intersectionThreshold?: number;
  controls?: boolean;
  clickControl?: boolean;
  handleEnded?: ReactEventHandler<HTMLVideoElement> | undefined;
  handleComplete?: (el: any) => void;
}

let hls: Hls;

const Video = ({
  src = '',
  poster = '',
  readyImg = '',
  width,
  height,
  borderRadius,
  className,
  responsive = false,
  muted = false,
  playsinline = false,
  autoplay = false,
  loop = false,
  useCrossOrigin = false,
  videoHiddenChk = true,
  intersectionPlay = true,
  intersectionThreshold = 0.3,
  controls = false,
  clickControl = false,
  handleEnded,
  handleComplete,
}: IProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [cName, setClassName] = useState('');

  const [isClickControl] = useState(clickControl);
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const [isVideoPause, setIsVideoPause] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoError = useCallback(() => {
    // const video = e.target;
    const video = ref && ref.current;
    if (!video) return;

    /**
     * .m3u8 지원여부를 체크함.
     * Safari 브라우저를 제외하고는 hls 모듈에 의존함
     */
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video
        .play()
        .then()
        .catch(() => {});
      setIsloaded(true);
    } else if (Hls.isSupported()) {
      const videoUrl = src;
      if (hls) hls.destroy();
      hls = new Hls();

      hls.loadSource(videoUrl || '');
      hls.attachMedia(video);

      if (
        video.getAttribute('autoplay') !== null &&
        video.getAttribute('autoplay') !== 'false'
      ) {
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video
            .play()
            .then()
            .catch(() => {});
          setIsloaded(true);
        });
      }
    }
  }, [src]);

  // Unmount시 hls 로딩 중단
  useEffect(
    () => () => {
      if (hls) hls.destroy();
    },
    []
  );

  useEffect(() => {
    const video = ref && ref.current;
    if (!video) return;
    if (autoplay) {
      setTimeout(() => {
        const promise = video.play();
        if (promise.then) {
          promise
            .then(() => {
              setIsloaded(true);
            })
            .catch((err: any) => {
              console.log('error playing', err);
              handleVideoError();
            });
        }
      }, 0);
    }
  }, [autoplay, handleVideoError, src]);

  // 비디오 hidden 전환 시 일시중지하기
  useEffect(() => {
    if (!videoHiddenChk) return undefined;
    const handleVisibilityChange = () => {
      const videoElement = ref.current;

      if (document.hidden) {
        videoElement?.pause();
      } else {
        videoElement?.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [videoHiddenChk]);

  // 뷰포트에서 미노출시 일시중지하기
  useEffect(() => {
    if (!intersectionPlay) return undefined;
    const video = ref.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: intersectionThreshold }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [intersectionPlay, intersectionThreshold]);

  useEffect(() => {
    setClassName(
      classNameBind([
        'video',
        isLoaded ? 'isLoaded' : '',
        isClickControl ? 'is-click-control' : '',
        className || '',
      ])
    );
  }, [className, isLoaded, isClickControl]);

  useEffect(() => {
    if (handleComplete && ref.current) {
      handleComplete({ player: ref.current });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // video play/pause 이벤트로 실제 재생 상태 추적
  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  // click 컨트롤
  const onClickControl = useCallback(() => {
    const video = ref && ref.current;
    if (!video) return;

    if (!isPlaying) {
      video.play();
      setIsVideoPlay(false);
      setIsVideoPause(true);
      setTimeout(() => {
        setIsVideoPause(false);
      }, 1000);
    } else {
      video.pause();
      setIsVideoPlay(true);
      setIsVideoPause(false);
      setTimeout(() => {
        setIsVideoPlay(false);
      }, 1000);
    }
  }, [isPlaying]);

  const param = useMemo(
    () => ({
      className: cName,
      $width: width,
      $height: height,
      $borderRadius: borderRadius,
      $responsive: responsive,
      onClick: clickControl ? onClickControl : undefined,
    }),
    [
      cName,
      width,
      height,
      borderRadius,
      responsive,
      clickControl,
      onClickControl,
    ]
  );

  const crossOriginAttr: React.VideoHTMLAttributes<HTMLVideoElement>['crossOrigin'] =
    useCrossOrigin ? 'anonymous' : undefined;

  const paramVideo = {
    poster,
    src,
    playsInline: playsinline,
    muted,
    autoPlay: autoplay,
    loop,
    controls,
    ref,
    onEnded: handleEnded,
    onError: handleVideoError,
  };

  return (
    <S.Box {...param}>
      <S.Video {...paramVideo} crossOrigin={crossOriginAttr} />
      {readyImg && <Img src={readyImg} alt="" className="area-poster" />}
      {isVideoPlay && (
        <span className="pause-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        </span>
      )}
      {isVideoPause && (
        <span className="play-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#fff">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}
    </S.Box>
  );
};

export default memo(Video);
