'use client';

import { useCallback } from 'react';
import { RecoilRoot, SetRecoilState } from 'recoil';

export default function RecoilProvider({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}