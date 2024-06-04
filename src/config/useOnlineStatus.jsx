import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {  
        const handleOnline = () => setStatus(true);
        const handleOffline = () => setStatus(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

    }, []);

    return status;
};

export default useOnlineStatus;
