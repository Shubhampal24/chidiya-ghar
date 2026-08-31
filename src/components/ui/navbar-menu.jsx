"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  const hasSuboptions = Boolean(children);

  return (
    <div
      onMouseEnter={() => setActive(item)}
      style={{ display: 'inline-flex', alignItems: 'center', position: 'relative', padding: '6px 0' }}
    >
      <div
        style={{
          cursor: 'pointer',
          color: 'white',
          fontSize: '14px',
          fontWeight: 500,
          margin: 0,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
        className="hover:opacity-80"
      >
        <span>{item}</span>
        {hasSuboptions && (
          <ChevronDown
            size={13}
            style={{
              transition: 'transform 0.25s ease',
              transform: active === item ? 'rotate(180deg)' : 'rotate(0deg)',
              opacity: 0.85
            }}
          />
        )}
      </div>
      {active !== null && active === item && children && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: '10px',
            zIndex: 999
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            <motion.div
              transition={transition}
              layoutId="active"
              style={{
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 14px 38px rgba(0, 0, 0, 0.16)',
                minWidth: '160px'
              }}
            >
              <motion.div layout style={{ padding: '10px 14px' }}>
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '26px',
        padding: '7px 28px',
        position: 'relative',
        borderRadius: '9999px',
        background: 'rgba(255, 255, 255, 0.07)',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      style={{
        display: 'block',
        padding: '6px 12px',
        color: '#333333',
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        borderRadius: '8px',
        transition: 'all 0.15s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.color = 'var(--terracotta, #c05e43)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#333333';
      }}
    >
      {children}
    </a>
  );
};
