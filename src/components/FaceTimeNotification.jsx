import { useState, useEffect, useRef, useCallback } from "react";
import { CAL_BOOKING_URL } from "#constants/index";

const FaceTimeNotification = ({ visible, onDismiss }) => {
  const [dismissing, setDismissing] = useState(false);
  const ringtoneRef = useRef(null);
  const timerRef = useRef(null);

  const stopRingtone = useCallback(() => {
    if (ringtoneRef.current) {
      ringtoneRef.current.pause();
      ringtoneRef.current.currentTime = 0;
      ringtoneRef.current = null;
    }
  }, []);

  const handleDismiss = useCallback(() => {
    stopRingtone();
    clearTimeout(timerRef.current);
    setDismissing(true);
    setTimeout(() => {
      setDismissing(false);
      onDismiss();
    }, 300);
  }, [onDismiss, stopRingtone]);

  useEffect(() => {
    if (!visible) return;

    const audio = new Audio("/audio/facetime_ringtone.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {
      console.warn("Audio autoplay blocked");
    });
    ringtoneRef.current = audio;

    timerRef.current = setTimeout(handleDismiss, 10000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [visible, handleDismiss]);

  const handleAccept = () => {
    window.open(CAL_BOOKING_URL, "_blank");
    handleDismiss();
  };

  if (!visible && !dismissing) return null;

  const bannerClass = `facetime-banner ${dismissing ? "dismissing" : "visible"}`;

  return (
    <div className={bannerClass}>
      <img
        src="/images/Harsh.png"
        alt="Harsh"
        className="ft-pfp"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
      <span className="ft-pfp-fallback">H</span>

      <div className="ft-text">
        <div className="ft-title">
          <span className="ft-app-name">FaceTime</span>
          <span className="ft-now">now</span>
        </div>
        <div className="ft-subtitle">Calling Harsh...</div>
      </div>

      <div className="ft-actions">
        <button
          className="ft-btn ft-decline"
          onClick={handleDismiss}
          aria-label="Decline"
        >
          <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 1L11 11M11 1L1 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="ft-btn ft-accept"
          onClick={handleAccept}
          aria-label="Accept"
        >
          <svg width="24" height="20" viewBox="0 0 16 13" fill="none">
            <path
              d="M10 0H2C0.9 0 0 0.9 0 2V11C0 12.1 0.9 13 2 13H10C11.1 13 12 12.1 12 11V8.5L16 12V1L12 4.5V2C12 0.9 11.1 0 10 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FaceTimeNotification;
