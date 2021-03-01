import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return (
    loading && (
      <div className="Loader-container">
        <div className="Loader">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    )
  );
};

export default Loader;
