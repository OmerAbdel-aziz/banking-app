// app/auth/layout.tsx
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
     
      <main>{children}</main>
    
    </div>
  );
}