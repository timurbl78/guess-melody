import React, {Fragment, useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

function AudioPlayer({isPlaying, src, onPlayButtonClick}) {
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.onloadeddata = () => setIsLoading(false);

    return () => {
      if (audioRef.current) {
        audioRef.current.onloadeddata = null;
        audioRef.current = null;
      }
    };
  }, [src]);

  return (
    <Fragment>
      <button
        className={`track__button track__button--${isPlaying ? 'pause' : 'play'}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        <audio src={src} ref={audioRef} />
      </div>
    </Fragment>
  );
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
