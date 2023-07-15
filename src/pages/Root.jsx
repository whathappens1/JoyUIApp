import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import { Outlet } from "react-router-dom";
import Header from "components/header";

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Header {...{ setMode, mode }} />;
}

export default function ModeToggle() {
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById("mode-toggle"));
  }, []);

  return (
    <CssVarsProvider
      colorSchemeNode={node || null}
      colorSchemeSelector="#mode-toggle"
      modeStorageKey="mode-toggle-demo"
    >
      <Box
        id="mode-toggle"
        sx={{
          flexGrow: 1,
          p: 2,
          m: -3,
          borderRadius: [0, "sm"],
          height: "100%"
        }}
      >
        <ModeSwitcher />
        <Outlet />
      </Box>
    </CssVarsProvider>
  );
}
