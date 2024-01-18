import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useIsLoggin(state, path, change) {
  const navigate = useNavigate();
  useEffect(() => {
    if (state) {
      navigate(path);
    }
  }, [change, navigate]);
}
