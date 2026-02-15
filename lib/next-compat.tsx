
import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

// Mocking next/link
export const Link = ({ href, children, ...props }: any) => {
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:');
  if (isExternal) {
    return <a href={href} {...props}>{children}</a>;
  }
  return <RouterLink to={href} {...props}>{children}</RouterLink>;
};

// Mocking next/image
export const Image = ({ src, alt, width, height, fill, priority, className, ...props }: any) => {
  const style = fill ? { position: 'absolute' as const, top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', objectFit: 'cover' as const } : {};
  return <img src={src} alt={alt} width={width} height={height} className={className} style={style} {...props} />;
};

// Mocking next/navigation
export const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export const useRouter = () => {
  const navigate = useNavigate();
  return {
    push: (path: string) => navigate(path),
    replace: (path: string) => navigate(path, { replace: true }),
    back: () => navigate(-1),
  };
};
