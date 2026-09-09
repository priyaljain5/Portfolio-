'use client';

import { FileText, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import Dock from '@/components/Dock';

// TODO: replace '#' with Priyal's real LinkedIn / X / GitHub / resume-PDF URLs
const items = [
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    onClick: () => window.open('#', '_blank'),
  },
  {
    icon: <Twitter size={18} />,
    label: 'X / Twitter',
    onClick: () => window.open('#', '_blank'),
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    onClick: () => window.open('#', '_blank'),
  },
  {
    icon: <FileText size={18} />,
    label: 'Resume',
    onClick: () => window.open('#', '_blank'),
  },
];

export function ContactDock() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 639px)');
    const update = () => setIsCompact(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return (
    <Dock
      items={items}
      panelHeight={isCompact ? 52 : 62}
      baseItemSize={isCompact ? 36 : 44}
      magnification={isCompact ? 44 : 52}
      dockHeight={isCompact ? 100 : 120}
      itemGap={isCompact ? 8 : 16}
      panelPaddingX={isCompact ? 8 : 16}
    />
  );
}
