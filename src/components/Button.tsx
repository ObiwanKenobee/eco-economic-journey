
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'outline' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  href,
  ...props 
}: ButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 overflow-hidden group";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-earth text-sand hover:bg-charcoal focus:ring-earth shadow-button hover:shadow-md hover:translate-y-[-2px]",
    secondary: "bg-white/90 text-earth border border-earth/10 hover:bg-sand focus:ring-sand shadow-button hover:shadow-md hover:translate-y-[-2px]",
    text: "bg-transparent hover:bg-muted px-2 py-1 hover:text-accent focus:ring-earth",
    outline: "bg-transparent border border-earth/20 text-earth hover:bg-earth/5 focus:ring-earth",
    default: "bg-earth/90 text-white hover:bg-earth focus:ring-earth shadow-button hover:shadow-md hover:translate-y-[-2px]"
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );
  
  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
