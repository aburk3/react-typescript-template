import React, { Suspense } from "react";
// import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import theme from "../utils/theme";
import { ThemeProvider } from "styled-components";

import { ContentWrapper } from "./styles";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";
import LoadingAnimation from "../components/Animations/Loading";
import BucketList from "../pages/BucketList";

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper>
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/bucket-list" element={<BucketList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ContentWrapper>
    </ThemeProvider>
  );
};

export default AppRouter;
