import React from 'react';
import { IconType } from 'react-icons';


export interface SidebarMobileItemProps {
  icon: IconType;
  label: string;
  currentRoute?: string
}