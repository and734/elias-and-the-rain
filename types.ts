import React from 'react';

export interface Character {
  name: string;
  role: string;
  description: string;
  quote?: string;
}

export interface ThemePoint {
  title: string;
  description: string;
  icon: 'rain' | 'symbol' | 'book';
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}