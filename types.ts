import React from 'react';

export enum StepType {
  THEORY = 'THEORY',
  INTERACTIVE = 'INTERACTIVE',
  PLAYGROUND = 'PLAYGROUND'
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  type: StepType;
  content: React.ReactNode;
}

export interface GeminiImageResponse {
  imageUrl: string | null;
  error: string | null;
}