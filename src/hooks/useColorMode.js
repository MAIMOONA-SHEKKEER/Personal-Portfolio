import { useState, useMemo, useCallback } from "react";
import { createAppTheme } from "../theme/theme";

const useColorMode = (initialMode = "dark") => {
  const [mode, setMode] = useState(initialMode);

  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return { mode, theme, toggleColorMode };
};

export default useColorMode;
