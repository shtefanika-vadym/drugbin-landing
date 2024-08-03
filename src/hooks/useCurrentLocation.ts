import { isNil } from "lodash-es";
import { useCallback, useState } from "react";
import { ToastType, notify } from "src/components/ui/Toast/CustomToast";

interface PositionType {
  latitude: number | null;
  longitude: number | null;
}

export const useCurrentLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<PositionType>({
    latitude: null,
    longitude: null,
  });

  const isLocationValid =
    !isNil(location.latitude) && !isNil(location.longitude);

  const getCurrentLocation = useCallback(() => {
    setIsLoading(true);
    if (!navigator.geolocation) {
      return notify("A apărut o eroare necunoscută.", ToastType.ERROR);
    }

    navigator.geolocation.getCurrentPosition(
      handleLocationSuccess,
      handleLocationError
    );
  }, []);

  const verifyLocationAccess = useCallback(async () => {
    try {
      const permissionStatus = await navigator.permissions.query({
        name: "geolocation",
      });

      if (permissionStatus.state === "granted") getCurrentLocation();
      if (permissionStatus.state === "prompt") getCurrentLocation();
      if (permissionStatus.state === "denied") {
        notify(
          "Accesul la locație a fost refuzat. Vă rugăm să activați această opțiune în setările browserului dumneavoastră.",
          ToastType.ERROR
        );
      }
    } catch (error) {
      console.error("Error checking geolocation permission:", error);
    }
  }, [getCurrentLocation]);

  const handleLocationSuccess = (position: any) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    setIsLoading(false);
  };

  const handleLocationError = (error: any) => {
    setIsLoading(false);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        notify(
          "Accesul la locație a fost refuzat. Vă rugăm să activați această opțiune în setările browserului dumneavoastră.",
          ToastType.ERROR
        );
        break;
      case error.POSITION_UNAVAILABLE:
        notify(
          "Informațiile despre locație nu sunt disponibile.",
          ToastType.ERROR
        );
        break;
      case error.TIMEOUT:
        notify(
          "Cererea de obținere a locației utilizatorului a expirat.",
          ToastType.ERROR
        );
        break;
      default:
        notify("A apărut o eroare necunoscută.", ToastType.ERROR);
        break;
    }
  };

  return {
    verifyLocationAccess,
    isLocationValid,
    isLoading,
    location,
  };
};
