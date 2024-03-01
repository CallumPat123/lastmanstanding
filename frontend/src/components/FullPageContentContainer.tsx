import { PropsWithChildren } from "react";

import { Breakpoint, SxProps } from "@mui/material";
import Container from "@mui/material/Container";

export default function FullPageContentContainer({
  maxWidth,
  children,
  minHeight,
  sx = {},
}: PropsWithChildren<{
  maxWidth?: Breakpoint;
  minHeight?: string;
  sx?: SxProps;
}>) {
  return (
    <Container
      maxWidth={maxWidth || "md"}
      sx={{ minHeight: minHeight || "60vh", pt: 3, ...sx }}
    >
      {children}
    </Container>
  );
}
